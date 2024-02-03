# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Non_Coach Training App

## Description

This is a simple React-based web application for creating and managing your own training plan. The app allows users to select exercises from various categories, add them to their training plan, and view a personalized training schedule.

## Getting Started

To run the application, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone git@github.com:AleksanderOwsianik/Training-App.git
   cd non-coach-training-app
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Start the development server.

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## Dependencies

The application uses React for the frontend. It also includes supabase SDK for potential integration with a backend .

## Usage

1. Choose a category from the available buttons (e.g., Chest, Shoulders, Biceps, etc.).
2. Select an exercise from the dropdown list.
3. Click the "Add Exercise" button to add the selected exercise to your training plan.
4. Repeat the process to customize your training plan.
5. View your personalized training plan in the "Your Own Training Plan For Today" section.

## Project Structure

- `src/TrainingApp.js`: Main component for the training app, handling category and exercise selection.
- `src/main.scss`: Stylesheet for the application.
- `src/main.jsx`: main component
- `src/components/ExerciseList.js`: Component to display the user's training plan.
- `src/components/AllContacts`: is designed to fetch and display data from the Supabase database. It utilizes the Supabase JavaScript client library for interaction with the database.
- `src/components/ContactForm`: component is a React functional component designed to capture user input, submit it to the Supabase database, and provide feedback to the user. It integrates with the Supabase JavaScript client library for database interaction.
- `src/components/FAQ`: component is a React functional component designed to provide a collapsible Frequently Asked Questions (FAQ) section. Users can click on the "FAQ" heading to expand or collapse the content. The component covers various exercise-related questions and answers.
- Other files and directories: Standard React project structure.

## Additional Information

- Logo: The application uses a logo located at `/src/assets/Logo_Ród.png`.

Feel free to customize and extend the application based on your needs. Happy training! 🏋️‍♂️🏋️‍♀️
