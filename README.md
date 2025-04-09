# Auth0 SPA Token Generator

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fweehong%2Fauth0-spa-token-generator.git)

This application is designed to generate tokens for Auth0 Single Page Applications (SPAs). 

As you may know, it's not possible to directly generate a token for an Auth0 SPA by triggering the `{{AUTH0_DOMAIN}}/oauth/token` endpoint from tools like Postman, unless you're using a Machine-to-Machine application. This app provides a simple solution for generating the necessary token, which you can then use in Postman or other tools.

## Features

- Easily retrieve Auth0 tokens for SPAs.
- Directly generate tokens without needing a Machine-to-Machine application.

## Prerequisites

Before using this app, make sure you have the following:

- Access to an Auth0 account and a registered SPA application in the [Auth0 Dashboard](https://manage.auth0.com/).
- A terminal or command line tool to run some basic commands.

## Setup and Usage

1. **Clone the Repository**  
   Clone this repository to your local machine.

2. **Environment Configuration**  
   Copy the `.env.example` file to a new `.env` file in the root directory.
   ```bash
   cp .env.example .env
   ```

3. **Enter Auth0 Credentials**  
   Open the `.env` file and enter the necessary Auth0 values from your Auth0 Dashboard:
   
   - `AUTH0_DOMAIN`: Your Auth0 domain (e.g., `your-tenant.auth0.com`)
   - `AUTH0_CLIENT_ID`: The client ID for your SPA application
   - `AUTH0_CLIENT_SECRET`: The client secret for your SPA application

4. **Generate the `AUTH0_SECRET`**  
   To generate a secure `AUTH0_SECRET`, run the following command in your terminal:

   ```bash
   openssl rand -hex 32
   ```

   This will produce a 32-byte hexadecimal string that you can use as the value for `AUTH0_SECRET` in the `.env` file.

   Example `.env` file:

   ```env
   APP_BASE_URL=your_app_base_url
   
   AUTH0_DOMAIN=your-auth0-domain
   AUTH0_CLIENT_ID=your-client-id
   AUTH0_CLIENT_SECRET=your-client-secret
   AUTH0_SECRET=your-generated-secret
   ```

5. **Run the Application**  
   After configuring the `.env` file, you can run the app. Follow the instructions provided in the repository to start the application (e.g., using `npm` or `yarn`).

6. **Retrieve the Token**  
   Once the app is running, you can generate your Auth0 token. Copy it and paste it into Postman or any other tool you use for making requests.

## Contributing

If you’d like to contribute to this project, feel free to fork the repository and submit a pull request. Any improvements or fixes are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.