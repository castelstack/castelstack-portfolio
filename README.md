<!-- @format -->

markdown

## Portfolio Website

Welcome to my personal portfolio website built using Next.js, AOS (Animate On Scroll), Tailwind CSS, and Axios. This website showcases my projects, skills, and provides information about me.

## Live Demo

Check out the live demo of the portfolio website: [https://castelstack-portfolio.vercel.app](https://castelstack-portfolio.vercel.app)

## Technologies Used

Next.js: Next.js is a powerful React framework that allows for server-side rendering and easy creation of fast and scalable web applications.

AOS (Animate On Scroll): AOS is a lightweight library for animating elements on scroll. It adds beautiful fade-in and slide-up animations to make the user experience more engaging.

Tailwind CSS: Tailwind CSS is a utility-first CSS framework that helps in rapid UI development. It provides a set of utility classes that allow for easy styling and customization.

Axios: Axios is a popular promise-based HTTP client used for making API requests. It enables seamless communication with external APIs.

## Features

Responsive Design: The website is designed to provide an optimal viewing experience across different devices and screen sizes.

Animated Transitions: AOS adds smooth animations to various sections of the website, creating an attractive and user-friendly interface.

GitHub Repositories: The website consumes the GitHub API to display a list of my repositories, providing visitors with insights into my coding projects.

About Me: A dedicated section provides visitors with a brief introduction to myself, my background, and my passion for web development.

Project Showcase: I showcase my personal and professional projects with details, descriptions, and live links (if applicable).

Skills & Technologies: I list the programming languages, frameworks, and tools I am proficient in, emphasizing my expertise to potential employers or collaborators.

Contact Form: The contact form allows visitors to get in touch with me directly, making it easy for potential clients or employers to reach out.

## Getting Started

Follow the steps below to set up the project on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/castelstack/castelstack-portfolio.git

cd castelstack-portfolio
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

For the most up-to-date information and documentation about the GitHub API, you can visit the GitHub Developer documentation at: [https://developer.github.com/v3/](https://developer.github.com/v3/). This documentation provides detailed information on how to interact with the GitHub API and what endpoints are available.

```bash
NEXT_PUBLIC_GIT_KEY="your_public_key"
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
