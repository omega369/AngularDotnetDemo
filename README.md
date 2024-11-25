
# Video Game Catalog

This is a simple two-page application for managing a video game catalog. The project uses **Angular 19** for the front end and **ASP.NET Core 8** for the back end. The front end allows users to browse and edit video games, while the back end handles the data storage using **Entity Framework Core** with SQL Server.

## **Features**

1. **Browse Page**: View a list of all video games.
2. **Edit Page**: Add or edit a video game.
3. Fully functional front-end/back-end integration.
4. Database seeding for initial data.

## **Getting Started**

Follow these steps to set up the application:

### **1. Prerequisites**

- **Node.js**: Ensure you have Node.js installed (LTS recommended).
- **.NET SDK**: Install .NET SDK 8 or later.
- **SQL Server**: Local or remote SQL Server instance.

### **2. Front End Setup**

1. Navigate to the `ClientApp` directory

   ```bash
   cd ClientApp
   ```

2. Install dependencies:

   ```bash
   npm install --force
   ```

3. Start the Angular development server:

   ```bash
   npm start
   ```

   The application will run at [http://localhost:4200](http://localhost:4200).

---

### **3. Back End Setup**

1. Navigate to the root project folder where the `.csproj` file is located.
2. Set up the database:

   ```bash
   dotnet ef database update
   ```

   This will create the database and apply migrations.

3. Run the back end:

   ```bash
   dotnet run
   ```

   The API will be available at [http://localhost:5006](http://localhost:5006).

---

### **4. Database Configuration**

- Update the connection string in `appsettings.json` if you're using a custom SQL Server instance:

   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=VideoGameCatalog;Trusted_Connection=True;MultipleActiveResultSets=true"
   }
   ```

## **Development Details**

### **Technologies Used**

- **Front End**: Angular 19, Bootstrap 5
- **Back End**: ASP.NET Core 8, Entity Framework Core
- **Database**: SQL Server (with Code First migrations)

### **Folder Structure**

#### **Front End (Angular)**

- `ClientApp/src/app/`
  - **Components**: Contains the `video-game-list` (browse) and `video-game-edit` (edit) components.
  - **Services**: Contains `video-game.service.ts` for managing video game logic and `video-game-api.service.ts` for API calls.

#### **Back End (.NET Core)**

- **Controllers**: Contains `VideoGameController` for API endpoints.
- **Services**: Contains `VideoGameService` for business logic.
- **Data**: Contains `VideoGameContext` and seeding logic.

## **Usage**

- **Browse Page**: View the catalog of video games.
- **Edit Page**: Add a new video game by navigating to `/edit` or edit an existing game by navigating to `/edit/:id`.

## **Troubleshooting**

### Common Issues

1. **Node.js Dependency Errors**  
   Run the following if you encounter dependency conflicts:

   ```bash
   npm install --force
   ```

2. **Database Issues**  
   Ensure your connection string is correct and the SQL Server instance is running. If needed, delete and reapply the migrations:

   ```bash
   dotnet ef database drop
   dotnet ef database update
   ```

3. **CORS Errors**  
   If accessing the API from a different host, add CORS settings in `Program.cs`:

   ```csharp
   builder.Services.AddCors(options =>
   {
       options.AddPolicy("AllowAll", policy =>
       {
           policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
       });
   });
   ```

## **Future Enhancements**

- Add authentication and authorization.
- Include pagination and search for the browse page.
- Improve error handling and validations.

If you encounter any issues, feel free to reach out!
