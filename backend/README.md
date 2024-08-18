# Help Center API

This repository provides a RESTful API for managing "Help Center" cards. The application is developed using Node.js, Express.js, TypeScript, Prisma, and MongoDB.

## Features

- **Create a Card**: Allows the addition of new cards to the help center.
- **Retrieve All Cards**: Fetches a list of all cards.
- **Retrieve a Specific Card**: Retrieves detailed information for a specific card by its title.

## Prerequisites

Ensure that the following software is installed on your system:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or a local MongoDB server

## Installation

### 1. Clone the Repository

To get started, clone the repository to your local machine:

```bash
# Clone the repository
git clone https://github.com/your-username/help-center-api.git

# Navigate into backend folder
cd backend

```

### 2 . Add Database URL in .env file (MongoDB Database URL)

```bash
DATABASE_URL="url"
```

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```
