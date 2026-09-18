# Use the official .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy the project file and restore dependencies
COPY ["student.api.csproj", "./"]
RUN dotnet restore "student.api.csproj"

# Copy the rest of the source code and build
COPY . .
RUN dotnet build "student.api.csproj" -c Release -o /app/build

# Publish the application
FROM build AS publish
RUN dotnet publish "student.api.csproj" -c Release -o /app/publish

# Use the lightweight ASP.NET runtime image for production
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=publish /app/publish .

# Configure port for Render and entrypoint
ENV ASPNETCORE_URLS=http://+=80
EXPOSE 80
ENTRYPOINT ["dotnet", "student.api.dll"]