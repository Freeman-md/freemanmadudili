# Freeman Madudili Nuxt App

## Introduction

This is the main application repository for Freeman Madudili's portfolio. It is built with Nuxt.js and is designed to showcase various projects and skills.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)

- npm (v6 or higher)

### Installation

1\. **Clone the repository**

 ```bash
 git clone https://github.com/Freeman-md/freemanmadudili.git
 cd freemanmadudili
 ```

2\. **Install dependencies**

 ```bash
 npm install
 ```

3\. **Copy environment variables**

 ```bash
 cp .env.example .env
 ```

4\. **Update environment variables**

   - Open the `.env` file and set the `API_URL` to your local server's URL. 

5\. **Customize Colors and Fonts**

   - Update the primary and secondary color hex codes in `tailwind.config.ts` to match your brand.

   - To change the font, add it under the Google Fonts families config option in `nuxt.config.ts` and update `assets/main.css`.

6\. **Run the application**

 ```bash
 npm run dev
 ```

## Deployment

1\. **Build the application**

 ```bash
 npm run build
 ```

2\. **Start the application**

 ```bash
 npm run preview
 ```

3\. **Deploy to a hosting service (e.g., Render)**

   - Follow the hosting service's instructions to deploy your Nuxt.js application.

   - Make sure to set the environment variables in your hosting environment.


## Contributing

Contributions are welcomed!
