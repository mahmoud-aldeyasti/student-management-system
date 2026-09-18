# 🎓 Student Management System

> A full-stack CRUD application built with **ASP.NET Core Web API** and **Angular (Standalone Components)**, backed by **SQL Server** via Entity Framework Core, and styled with **Bootstrap 5**.

---

## ✨ Features

- **Add & Update Students** — Dynamic form handling that switches seamlessly between create and edit modes.
- **Delete Records** — Smooth record removal with confirmation flows.
- **RESTful Backend** — Fully configured with Entity Framework Core, custom CORS policies, and clean controller-based routing.
- **Responsive UI** — Bootstrap 5 layout with Bootstrap Icons for a polished, mobile-friendly experience.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Backend** | C#, ASP.NET Core Web API, Entity Framework Core, SQL Server |
| **Frontend** | Angular 18 (Standalone), TypeScript, RxJS, FormsModule |
| **Styling** | Bootstrap 5, Bootstrap Icons |

---

## 📁 Project Structure

```text
StudentManagementSystem/
│
├── backend/                        # ASP.NET Core Web API
│   ├── Controllers/
│   │   └── StudentMasterController.cs
│   ├── Model/
│   │   ├── studentDbContext.cs
│   │   └── Student.cs
│   ├── Program.cs                  # CORS & EF Core configuration
│   └── appsettings.json            # Connection strings
│
└── frontend/                       # Angular application
    └── src/app/
        ├── students/               # Student list component & row item
        ├── student-form/           # Add / edit form component
        └── services/               # StudentService (HttpClient wrapper)
```

---

## 🔌 API Reference

**Base URL:** `/api/StudentMaster`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/StudentMaster` | Retrieve all student records |
| `POST` | `/api/StudentMaster` | Add a new student record |
| `PUT` | `/api/StudentMaster` | Update an existing student record |
| `DELETE` | `/api/StudentMaster/{id}` | Delete a student by ID |

---

## 🚀 Getting Started

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download) (v7 or later)
- [Node.js & npm](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) — `npm install -g @angular/cli`
- SQL Server (local instance or SQL Server Express)

---

### 1. Database Setup

Ensure SQL Server is running, then update the connection string in `backend/appsettings.json`:

```json
"ConnectionStrings": {
  "studentCon": "Server=YOUR_SERVER_NAME;Database=studentDB;Trusted_Connection=true;Encrypt=True;TrustServerCertificate=True"
}
```

> Make sure your `studentMaster` table schema matches the `Student` model, or run EF Core migrations if configured.

---

### 2. Run the Backend

```bash
cd backend
dotnet run
```

The API will be available at `http://localhost:5110`.

---

### 3. Run the Frontend

```bash
cd frontend
npm install
ng serve
```

The app will be available at `http://localhost:4200` and will communicate with the local API automatically.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
