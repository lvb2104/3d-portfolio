# 3D Portfolio Website

This is a personal portfolio website built with React, Three.js, and Tailwind CSS, showcasing projects, skills, and experience in an interactive 3D environment.

## Technologies Used

-   **Frontend:** React, TypeScript
-   **3D Rendering:** Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
-   **Styling:** Tailwind CSS
-   **Animation:** Framer Motion
-   **Build Tool:** Vite
-   **Routing:** React Router (`react-router-dom`)
-   **Email Service:** EmailJS (`@emailjs/browser`)
-   **Analytics:** Vercel Speed Insights
-   **Linting/Formatting:** ESLint

## Getting Started

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd 3d-portfolio
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

1.  Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

3.  To run on your local network (useful for testing on other devices):
    ```bash
    npm run dev:network
    # or
    yarn dev:network
    ```

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run dev:network`: Runs the app in development mode, exposing it to your local network.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the project files using ESLint.
-   `npm run preview`: Serves the production build locally for preview.

## Project Structure

The main components are located in the `src/components` directory:

-   `Navbar.tsx`: Navigation bar.
-   `Hero.tsx`: Hero section with 3D elements.
-   `About.tsx`: About me section.
-   `Experience.tsx`: Work experience timeline.
-   `Tech.tsx`: Technologies/skills section.
-   `Works.tsx`: Project showcase.
-   `Feedbacks.tsx`: Testimonials section.
-   `Contact.tsx`: Contact form.
-   `canvas/`: Contains reusable 3D canvas components (e.g., `StarsCanvas.tsx`).

## Deployment

This project can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages. Vercel Speed Insights is integrated for performance monitoring.
