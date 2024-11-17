![Weather Finder Client](./public/Weather_Finder.png)

## Features

- A responsive web interface to retrieve and display real-time weather information based on user-input city and country.
- Input validation and error handling to enhance user experience.
- Displays weather data with a clean and user-friendly design.

## Tech

Weather Finder Client is built with the following technologies:

- **[React]** - A JavaScript library for building user interfaces.
- **[HTML & CSS]** - Used to structure and style the application, making it responsive and user-friendly.
- **[JavaScript]** - Core programming language for building the client logic.
- **[ESLint]** - A tool for identifying and fixing code issues, maintaining code quality and consistency.
- **[Jest]** - A testing framework for writing and running unit tests to ensure functionality and stability.

## How to Run

This project requires [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) to be installed.

### Step 1: Configure API Base URL

Before running the application, set up the environment configuration to connect to the Weather Finder API.

**Note**: Duplicate the `.env.example` file and rename it to `.env` in the root directory, By default, the URL uses port `5000` to match the API's running port. If you are not using `Docker` to start the API, be sure to adjust the URL in the .env file to match the actual port being used.

In production, avoid committing sensitive data directly. Instead, use environment-specific configuration files (e.g., `.env.production`), server-side environment variables, or a secrets manager like [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) or [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) to securely manage credentials.

### Step 2: Install Dependencies

Install the necessary dependencies for the project:

```sh
# Install dependencies
npm install
```

### Step 3: Running the Development Server

Start the development server to view the application locally:

```sh
npm start
```

This command will start the application on http://localhost:3000, and the development server will automatically reload for any file changes.

### Step 4: Build for Production(Optional)

```sh
npm run build
```

This will output the production-ready files in the build folder, which can be deployed to any web server or AWS S3 + Cloudfront.

## How to Run Tests

```sh
npm test
```

## License

MIT
