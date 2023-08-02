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
