# Render-BnB

This project is split into a .NET API backend and a React frontend.

## Backend
Run the API with:

```bash
 dotnet run
```

The backend listens on `http://localhost:5063`.

## Frontend
The frontend lives in the `render-bnb` folder. Start it with:

```bash
 cd render-bnb
 npm install
 npm start
```

The React dev server runs on `http://localhost:3000` and proxies API requests to the backend.
