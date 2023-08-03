<!-- @format -->

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Husky and Commitlint Rules

In our project, we use Husky and Commitlint to enforce consistent commit message formats. The following rules are applied to commit messages:

- **type-enum** or **type-case**: Specifies the allowed commit types and their case. The commit types should be one of the following:

  - feat: A new feature
  - fix: A bug fix
  - chore: Maintenance or build-related changes
  - docs: Documentation changes
  - style: Code style changes
  - refactor: Code refactoring
  - test: Testing-related changes

- **scope-enum**: Specifies the allowed commit scopes. The commit scopes should be one of the following:

  - app: Application-specific changes
  - server: Server-specific changes
  - docs: Documentation-related changes
  - config: Configuration changes

- **subject-max-length**: The maximum length for the commit subject is 50 characters.

- **body-max-line-length**: Each line in the commit body should not exceed 72 characters.

- **subject-empty**: The commit subject should not be empty.

- **footer-max-line-length**: Each line in the commit footer should not exceed 72 characters.

By following these rules, we ensure that commit messages are consistent and provide clear information about the changes made in each commit.

Please ensure that your commit messages adhere to these rules when making commits to the repository.

For more details about the configuration and customization of these rules, refer to the `commitlint.config.js` file in the root of the project.

markdown
Copy code

# Getting Started with a Next.js Project using Husky, Prettier, and ESLint

This guide will help you set up a new Next.js project with Husky, Prettier, and ESLint for consistent code formatting and early issue detection.

## Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system. If not, you can download and install them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/).

## Step 1: Initialize Next.js Project

```bash

Step 2: Install Dependencies
Change into your project directory:


cd my-next-project
Now, install the required dependencies:


npm install husky lint-staged prettier eslint eslint-config-next react-hooks -D

husky: Enables us to run scripts before committing changes.

lint-staged: Allows us to run linters only on staged files before committing.

prettier: Code formatter to maintain consistent code style.

eslint: JavaScript linter for identifying and reporting on patterns in code.

eslint-config-next: Official ESLint configuration for Next.js projects.

react-hooks: ESLint plugin for enforcing React Hooks rules (recommended for React projects).


Step 3: Configure ESLint and Prettier
Create a .eslintrc file in the root of your project:


{
  "extends": ["next", "next/core-web-vitals"]
}
Create a .prettierrc file in the root of your project:


{
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5"
}
These configurations will extend the official Next.js ESLint configuration and set up Prettier with some basic rules. Customize them as needed.

Step 4: Set Up Husky and lint-staged
Add the following to your package.json file:


"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.js": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.json": "prettier --write",
  "*.css": "prettier --write"
}

This configuration will run ESLint and Prettier on staged files before allowing a commit.

Step 5: Start Developing
Your Next.js project is now set up with Husky, Prettier, and ESLint. Begin development:


npm run dev
Husky will enforce pre-commit checks for consistent code and early issue detection.

Conclusion
With Husky, Prettier, and ESLint in place, your Next.js project will have automated code formatting and static code analysis. Follow consistent coding standards and catch issues early in development.

Happy coding! 🚀

```
