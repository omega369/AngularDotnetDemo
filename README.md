# Video Game Catalogue

This is a simple two-page application for managing a video game catalogue. The project uses **Angular 19** for the front-end and **ASP.NET Core 8** for the back-end. The front end allows users to browse and edit video games, while the back end handles the data storage using **Entity Framework Core** with SQL Server.

## **Features**

1. **Browse Page (Home Page)**: View a list of all video games.
2. **Edit Page**: Add or edit a video game.
3. Fully functional front-end/back-end integration.
4. Database seeding for initial data.
5. Open API support.
6. Front-end / back-end unit testing.
7. Front-end / back-end dependency injection.

## **Getting Started**

Follow these steps to set up the application:

### **1. Prerequisites**

- **Node.js**: Ensure you have Node.js installed (LTS recommended).
- **.NET SDK**: Install .NET SDK 8 or later.
- **SQL Server**: Local or remote SQL Server instance.

### **2. Front-End Setup**

1. Navigate to the `angulardotnetdemo.client` directory

   ```bash
   cd angulardotnetdemo.client
   ```

2. Install dependencies (This step requires `--force` as [ng-boostrap does not yet support Angular v19](https://github.com/ng-bootstrap/ng-bootstrap/issues/4779)):

   ```bash
   npm install --force
   ```

### **3. Back-End Setup**

1. Open the solution in Visual Studio

2. Update the connection string in `appsettings.json` in the Server project `AngularDotnetDemo.Server`:

   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=AngularDotnetDemo;Trusted_Connection=True;MultipleActiveResultSets=true"
   }
   ```

3. Set up the database in package manager console in Visual Studio:

   ```powershell
   update-database
   ```

   This will create the database and apply entity framework migrations.

4. Run the back end though Visual Studio `Ctrl + F5` or dotnet sdk:

   ```powershell
   dotnet run
   ```

   Navigate to `https://localhost:61959/` on your browser (You may need to install an IIS Development Certificate).

## **Development Details**

This project was bootstrapped using the Angular ASP.NET Core template from Visual Studio and built on from there.

### **Technologies Used**

- **Front End**: Angular 19, Bootstrap 5
- **Back End**: ASP.NET Core 8, Entity Framework Core
- **Database**: SQL Server (with Code First migrations)

## **Usage**

- **Browse Page**: View the catalog of video games on the homepage `/`.
- **Edit Page**: Edit an existing game by navigating to `/edit/:id`.

## **Possible Enhancements**

- Add authentication and authorization.
- Include pagination and search for the browse page.
- Improve error handling and validations.
- Add a loading indicator when data fetching.
- Add create / delete video game api and functionality.

## What I learned

### Angular's New Control Flow Syntax

Angular's updated control flow syntax improves template logic with a more intuitive and readable approach to conditions and loops, reducing boilerplate and enhancing clarity.

### Angular Signals

Signals introduce a modern, fine-grained reactivity model in Angular, optimizing performance by recalculating only affected components and paving the way for Zone.js-free applications.

### Nullable Reference Types in C#

C# now enables nullable reference types by default, encouraging explicit null handling at compile time, reducing runtime errors, and promoting safer, more robust code.

---

**If you encounter any issues, feel free to reach out!**
