# Kasthuri Food Point 🍛

A modern, full-stack restaurant website built with React and Spring Boot. Customers can browse the menu, add items to cart, and place orders without needing to log in.

## Features

- ✨ **Premium UI/UX** - Dark mode design with smooth animations using React Spring
- 🛒 **Guest Checkout** - No login required to place orders
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎨 **Modern Design** - Glassmorphism, gradients, and smooth transitions
- 🔄 **Real-time Cart** - Persistent cart using localStorage
- 🍽️ **Menu Categories** - Filter menu items by category
- 💳 **Order Management** - Complete order tracking system

## Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Spring** - Animation library
- **Axios** - HTTP client
- **Vanilla CSS** - Custom styling with CSS variables

### Backend
- **Spring Boot 3.2.2** - Java framework
- **Spring Data JPA** - Database ORM
- **H2 Database** - In-memory database (development)
- **MySQL** - Production database (optional)
- **Maven** - Build tool

## Project Structure

```
kasthuri-food-point/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # Context providers
│   │   ├── services/      # API services
│   │   └── index.css      # Global styles
│   └── package.json
└── backend/           # Spring Boot application
    ├── src/main/java/com/kasthuri/foodpoint/
    │   ├── entity/        # JPA entities
    │   ├── repository/    # Data repositories
    │   ├── service/       # Business logic
    │   ├── controller/    # REST controllers
    │   └── config/        # Configuration
    └── pom.xml
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Java 17 or higher
- Maven

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Run the Spring Boot application:
```bash
./mvnw spring-boot:run
```

The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## API Endpoints

### Menu
- `GET /api/menu` - Get all available menu items
- `GET /api/menu/{id}` - Get menu item by ID
- `GET /api/menu/category/{category}` - Get items by category

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/{id}` - Get order by ID
- `GET /api/orders` - Get all orders

## Database

The application uses H2 in-memory database for development. The database is automatically seeded with sample menu items on startup.

To use MySQL in production, update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/kasthuri_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
```

## Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to Vercel or Netlify

### Backend (Railway/Render/Heroku)
1. Package the application:
```bash
cd backend
./mvnw clean package
```

2. Deploy the generated JAR file from `target/` directory

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT

## Author

Kasthuri Food Point Team
