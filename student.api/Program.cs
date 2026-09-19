using Microsoft.EntityFrameworkCore;
using student.api.Model;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddDbContext<studentDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("studentCon")));
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularCors", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});



var app = builder.Build();


app.UseCors("AllowAngularCors"); 
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();



app.MapControllers();

app.Run();
