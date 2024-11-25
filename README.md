
# Frontend for Authentication Module

This is the frontend implementation of the user authentication module. It supports user signup and login functionalities, integrated with a backend API built using NestJS. The application is built using React with Material-UI for a modern and responsive design.

---

## Demo

https://auth.fullstackdev.in/

## Features

- **Signup and Login Forms**: Users can register and log in using secure forms with validation.
- **Password Validation**:
    - Minimum length of 8 characters.
    - At least one letter, one number, and one special character.
- **Welcome Page**: Displays a welcome message after successful login.
- **Responsive Design**: Built with Material-UI for modern, adaptive layouts.
- **Secure Configurations**:
    - Form validations using `Yup` and `React Hook Form`.
    - `.env` file for storing sensitive configuration like API URLs and ports.
    - Cross-Origin Resource Sharing (CORS) handled securely.
    - Linting setup with ESLint for code quality.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (v8 or later)

---

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. **Install Dependencies**

   Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

3. **Environment Configuration**

   Create a `.env` file in the root of the project and provide the necessary environment variables. Below is an example `.env` file:

   ```env
   REACT_APP_PORT=3001
   REACT_APP_API_URL=http://localhost:3000/api
   ```

4. **Start the Application**

   Run the following command to start the frontend:

   ```bash
   npm start
   ```

   The application will start on the port specified in the `.env` file (default: `3001`).

---

## Security Measures

- **Form Validation**: All inputs are validated using `Yup` to prevent invalid data submission.
- **Environment Variables**: Sensitive configurations like API URLs and ports are stored in `.env` files.
- **CORS**: Configured backend to handle secure cross-origin requests.
- **Helmet**: Ensures basic HTTP headers for security are applied in the backend.
- **CSRF Protection**: Backend implements CSRF tokens for secure state-changing requests.
- **Rate Limiting**: Prevents abuse by limiting the number of requests to the backend.
- **Basic Authentication for Swagger**: Ensures only authorized users can access API documentation.

---

## Testing

This application is configured for linting and follows best practices:

1. **Run Linting**

   ```bash
   npm run lint
   ```

   This checks for code quality and adherence to standards.

2. **Run Tests**

   No frontend tests are implemented as part of this task, but you can integrate tools like Jest and React Testing Library for testing.

---

## Deployment

To deploy this application:

1. Build the project:

   ```bash
   npm run build
   ```

2. Serve the `build/` directory using any static file server or integrate with your deployment pipeline.

---

## API Integration

The frontend communicates with the backend API for authentication. The base URL for the API is defined in the `.env` file as `REACT_APP_API_URL`.

---

## Future Enhancements

- **Session Management**: Implement session storage or JWT storage for maintaining user authentication state.
- **Role-Based Access**: Restrict access to certain pages based on user roles.
- **Frontend Unit Tests**: Add tests for form validation and API integration.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear and descriptive messages.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Support

For any issues or feature requests, please open an issue in the repository.

Happy coding! 🎉
