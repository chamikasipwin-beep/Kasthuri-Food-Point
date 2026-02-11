# Kasthuri Food Point - Backend

Spring Boot backend API for Kasthuri Food Point restaurant website.

## Features

- RESTful API for menu and orders
- JPA/Hibernate for database operations
- H2 in-memory database (development)
- MySQL support (production)
- CORS configuration for frontend
- Automatic database seeding

## Tech Stack

- Spring Boot 3.2.2
- Spring Data JPA
- H2 Database
- MySQL Connector
- Maven

## Development

```bash
./mvnw spring-boot:run
```

The API will be available at `http://localhost:8080`

## H2 Console

Access the H2 console at `http://localhost:8080/h2-console`

- JDBC URL: `jdbc:h2:mem:kasthuri_db`
- Username: `sa`
- Password: (leave empty)

## API Documentation

See the main README for API endpoint documentation.
