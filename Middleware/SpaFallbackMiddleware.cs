// Middleware/SpaFallbackMiddleware.cs
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Render_BnB_v2.Middleware
{
    public class SpaFallbackMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly string _reactBuildPath;

        public SpaFallbackMiddleware(RequestDelegate next, string reactBuildPath)
        {
            _next = next;
            _reactBuildPath = reactBuildPath;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            // First, try to process request normally (API calls, static files, etc.)
            await _next(context);

            // If a response was already sent, we're done
            if (context.Response.HasStarted)
                return;

            // If the response is 404 (Not Found) and it's not an API call
            if (context.Response.StatusCode == 404 && !context.Request.Path.StartsWithSegments("/api"))
            {
                context.Response.StatusCode = 200;
                context.Response.ContentType = "text/html";
                
                var indexHtmlPath = Path.Combine(_reactBuildPath, "index.html");
                if (File.Exists(indexHtmlPath))
                {
                    await context.Response.SendFileAsync(indexHtmlPath);
                }
            }
        }
    }
}