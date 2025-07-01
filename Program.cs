using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Render_BnB_v2.Data;
using Render_BnB_v2.Services;
using System.Text;
using Microsoft.Extensions.FileProviders;
using Render_BnB_v2.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Configure DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Register custom services
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IProfileService, ProfileService>();
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<ICurrentUserService, CurrentUserService>();

// Add JWT Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });

builder.Services.AddAuthorization();

// Add Swagger for development
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Seed admin account
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    var config = scope.ServiceProvider.GetRequiredService<IConfiguration>();
    await SeedAdminUser(context, config);
}

// Configure the HTTP pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    // Don't force HTTPS in development
}
else
{
    app.UseHttpsRedirection();
}

// Enable CORS
app.UseCors("AllowAll");

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

// Setup static files from the React build folder
var reactBuildPath = Path.Combine(Directory.GetCurrentDirectory(), "render-bnb", "build");
if (Directory.Exists(reactBuildPath))
{
    app.UseStaticFiles(new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(reactBuildPath),
        RequestPath = ""
    });

    // Handle all other requests by serving the React app's index.html
    app.MapFallbackToFile("index.html", new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(reactBuildPath)
    });
}
else
{
    Console.WriteLine($"WARNING: React build folder not found at {reactBuildPath}");
}

app.UseMiddleware<SpaFallbackMiddleware>(reactBuildPath);

// API controllers
app.MapControllers();

app.Run();

static async Task SeedAdminUser(ApplicationDbContext context, IConfiguration configuration)
{
    var login = configuration["Admin:Login"] ?? "admin";
    var email = configuration["Admin:Email"] ?? "admin@example.com";
    var password = configuration["Admin:Password"] ?? "admin123";

    if (!await context.Users.AnyAsync(u => u.Login == login))
    {
        var user = new Render_BnB_v2.Models.User
        {
            Login = login,
            Email = email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(password)
        };
        context.Users.Add(user);
        await context.SaveChangesAsync();
    }
}
