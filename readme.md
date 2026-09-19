# 🎓 Student Management System

> A full-stack CRUD application built with **ASP.NET Core Web API** (hosted on Render) and **Angular 18** (hosted on Vercel), backed by **Supabase PostgreSQL** via Entity Framework Core, and styled with **Bootstrap 5**.

---

## ✨ Features

- **Add & Update Students** — Dynamic form handling that switches seamlessly between create and edit modes.
- **Delete Records** — Smooth record removal with confirmation flows.
- **RESTful Cloud Backend** — ASP.NET Core Web API hosted on Render with strict multi-origin CORS configuration.
- **Responsive UI** — Angular frontend deployed on Vercel with clean client-side routing.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Backend** | C#, ASP.NET Core Web API, Entity Framework Core, Supabase PostgreSQL |
| **Frontend** | Angular 18 (Standalone), TypeScript, RxJS |
| **Styling** | Bootstrap 5, Bootstrap Icons |
| **Hosting** | Render (API), Vercel (Frontend), Supabase (Database) |

---

## 🌐 Live Demo

The application is fully deployed and accessible online:

| Service | URL |
|---|---|
| **Frontend (Vercel)** | [student-management-system-pi-brown.vercel.app](https://student-management-system-pi-brown.vercel.app) |
| **Backend API (Render)** | [student-management-system-lmzs.onrender.com/api/StudentMaster](https://student-management-system-lmzs.onrender.com/api/StudentMaster) |

> **Note:** The Render free tier spins down after inactivity. The first API request may take 30–60 seconds to wake the server.

---

## 📁 Project Structure

```text
student-management-system/
│
├── student.api/                        # ASP.NET Core Web API
│   ├── Controllers/
│   │   └── StudentMasterController.cs
│   ├── Model/
│   │   ├── studentDbContext.cs
│   │   └── Student.cs
│   ├── Program.cs                      # CORS & EF Core configuration
│   └── appsettings.json                # Connection strings & logging config
│
└── StudentApp/                         # Angular 18 frontend
    └── src/app/
        ├── students/                   # Student list component & row item
        ├── student-form/               # Add / edit form component
        └── services/                   # StudentService (HttpClient wrapper)
```

---

## 💻 Running Locally

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Node.js & npm](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) — `npm install -g @angular/cli`

---

### 1. Configure the Backend

Navigate to the `student.api` directory and update `appsettings.json` with your database connection string. You can point this at a local SQL Server instance or your Supabase cloud pooler:

```json
{
  "ConnectionStrings": {
    "studentCon": "Host=aws-1-eu-west-1.pooler.supabase.com;Port=5432;Database=postgres;Username=postgres.your_project_id;Password=your_password;SSL Mode=Require;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

Then start the API:

```bash
cd student.api
dotnet run
```

The API will be available at `http://localhost:5110` (or `https://localhost:7xxx` for HTTPS).

---

### 2. Configure and Run the Frontend

Before starting the Angular dev server, update the environment configuration inside `StudentApp` to point at your **local** API URL (e.g., `http://localhost:5110/api`) instead of the production Render URL.

Then install dependencies and serve the app:

```bash
cd StudentApp
npm install
ng serve
```

Open your browser at `http://localhost:4200`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
