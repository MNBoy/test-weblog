# Test Project

Welcome to Test Project! This is a Next.js application powered by React and integrated with various tools like React Query, Axios, Zustand, and Tailwind CSS. This README provides instructions on how to run and test the project.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Testing](#testing)
  - [Running Tests](#running-tests)
- [Additional Commands](#additional-commands)
- [Dependencies](#dependencies)
- [License](#license)

## Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (or pnpm, if preferred)
- Git

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/MNBoy/test-weblog
   ```

2. Navigate into the project directory:

   ```bash
   cd test-project
   ```

3. Install dependencies using npm or pnpm:

   ```bash
   # If using npm
   npm install

   # If using pnpm
   pnpm install
   ```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Testing

### Running Tests

This project uses Jest and React Testing Library for unit testing. To run tests:

```bash
npm test
# or
pnpm test
```

This command runs all tests in the project.

## Additional Commands

- **Build the project:** `npm run build` or `pnpm build`
- **Lint the code:** `npm run lint` or `pnpm lint`

## Dependencies

- **Next.js:** React framework for production.
- **@tanstack/react-query:** Hooks for fetching, caching, and updating asynchronous data.
- **axios:** Promise-based HTTP client for the browser and Node.js.
- **clsx:** A tiny utility for constructing className strings conditionally.
- **react, react-dom:** React core and DOM bindings.
- **zustand:** State management library for React.
- **@testing-library/jest-dom, @testing-library/react:** Testing utilities for React components.
- **eslint, eslint-config-next:** ESLint and Next.js specific ESLint configuration.
- **jest, ts-jest:** Testing framework and TypeScript support for Jest.
- **typescript:** TypeScript language support.
