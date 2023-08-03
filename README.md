<!-- @format -->

markdown

# My Portfolio Website

This is my personal portfolio website built with Next.js v13. It showcases my projects, skills, and provides information about me.

## Live Demo

Check out the live demo of the portfolio website: [https://www.myportfolio.com](https://www.myportfolio.com)

## Features

- Responsive design for all devices.
- Animated page transitions using Next.js v13 built-in features.
- Interactive project gallery with details and links to GitHub repositories.
- Contact form for easy communication.

## Technologies Used

- Next.js v13: For server-rendered React applications.
- React: JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for rapid UI development.
- Email.js: Service for sending emails from the contact form.
- Axios: Promise-based HTTP client for API interactions.
- Framer Motion: For creating smooth animations.

## Getting Started

Follow the steps below to set up the project on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/castelstack/portfolio-v1.git

cd portfolio-v1
```

2. Install dependencies:

```bash
yarn install
```

if downloaded as zip file

```bash
git init
# to make sure husky is installed
yarn install
```

3. Set environment variables:


Create a .env.local file in the root of the project and add the following:
Replace NEXT_PUBLIC_GIT_KEY with your own.

```bash
NEXT_PUBLIC_GIT_KEY="your-public-key"
```
4. Run the development server:

```bash
yarn dev
```

Open your browser and navigate to http://localhost:3000 to see the portfolio website.

Project Structure

```bash
|-- src/
|  |-- app/
|   |-- pages.tsx
|   |-- ...tsx
|-- components/
|   |-- Card.tsx
|   |-- Tab.tsx
|   |-- ...tsx
|-- public/
|   |-- images/
|-- styles/
|   |-- globals.css
|   |-- Home.module.css
|   |-- ...css
|-- fonts/
|   |-- ...
|-- assets/
|   |-- icons
|   |-- ...tsx
|-- constants/
|   |-- data.ts
|-- types/
|   |-- index.ts
...
```

Adding New Projects
To change content in the project to the portfolio, simply locate the constants/data.ts and create a new object or change content directly as it would reflect the change with information provided. Background text can be changed in the app/global.css file line 127 and line 229.

## Husky and Commitlint Rules

In our project, we use Husky and Commitlint to enforce consistent commit message formats. The following rules are applied to commit messages:
```bash
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
```

By following these rules, we ensure that commit messages are consistent and provide clear information about the changes made in each commit.

Please ensure that your commit messages adhere to these rules when making commits to the repository.

For more details about the configuration and customization of these rules, refer to the `commitlint.config.js` file in the root of the project.

## Contributions
Contributions are welcome! If you find any bugs or have suggestions for improvement, feel free to open an issue or create a pull request.

## License
This project is licensed under the MIT License.

Thank you for checking out my portfolio project! If you have any questions or feedback, feel free to contact me through the contact form on the website.

Happy coding! 🚀
