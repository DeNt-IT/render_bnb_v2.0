using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RenderBnBv2.Migrations
{
    public partial class AddDisplayNameToProfile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DisplayName",
                table: "Profiles",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DisplayName",
                table: "Profiles");
        }
    }
}
