using Microsoft.EntityFrameworkCore;
using student.api.Model;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddDbContext<studentDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("studentCon")));
// Add CORS policy allowing only your specified Vercel frontend domains
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowVercelFrontend", policy =>
    {
        policy.WithOrigins(
                "https://student-management-system-pi-brown.vercel.app",
                "https://student-management-system-git-main-mahmoud-aldeyasti.vercel.app",
                "https://student-management-system-cyx8s2e6m-mahmoud-aldeyasti.vercel.app"
            )
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});



var app = builder.Build();


app.UseCors("AllowVercelFrontend"); 
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();



app.MapControllers();

app.Run();
