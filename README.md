# SynergyFlow

Welcome to **SynergyFlow**, an AI-powered collaboration tool designed to streamline workflows for remote teams. This application provides a centralized platform for team communication, task management, and file sharing, enhanced with intelligent features to boost productivity.

## Key Features

-   **Collaborative Workspaces**: Each project or team can have its own dedicated channel.
-   **Real-time Editor**: A collaborative document editor for live note-taking and brainstorming.
-   **Task Management**: Track tasks within each channel, with clear ownership and status.
-   **File Sharing**: Easily share documents, images, and other assets.
-   **AI-Powered Summaries**: Generate concise summaries of long discussions with a single click.
-   **Intelligent Task Prioritization**: Let AI help you organize and prioritize your team's workload based on project goals and deadlines.
-   **Work Timer**: A built-in Pomodoro-style timer to help you focus on deep work.
-   **Responsive Design**: A seamless experience across both desktop and mobile devices.

## Getting Started

The application is built with a modern tech stack:

-   **Framework**: Next.js (with App Router)
-   **UI**: React, ShadCN UI, Tailwind CSS
-   **AI**: Genkit (with Google's Gemini models)
-   **Styling**: CSS variables for easy theme customization.
-   **State Management**: React Hooks and Server Actions.

To get started with development:

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Run the development server**:
    ```bash
    npm run dev
    ```
    This will start the Next.js application, typically on `http://localhost:9002`.

3.  **Run the Genkit development server**:
    In a separate terminal, run:
    ```bash
    npm run genkit:watch
    ```
    This starts the Genkit AI flows and will reload them as you make changes.

## Project Structure Highlights

-   `src/app/`: Contains the main application pages and layouts.
-   `src/components/`: Reusable React components, including UI components from ShadCN.
-   `src/ai/flows/`: Genkit flows that define the AI-powered features.
-   `src/app/actions.ts`: Next.js Server Actions that handle form submissions and call Genkit flows.
-   `src/lib/`: Contains data, type definitions, and utility functions.
-   `src/app/globals.css`: Global styles and theme (CSS variables) for the application.
-   `public/`: Static assets.

## Customization Guide

-   **Theming**: To change the color scheme, you can modify the HSL color variables in `src/app/globals.css`.
-   **Adding AI Features**: Create new flow files in `src/ai/flows/`, define your Zod schemas for input/output, and write your prompt. Then, create a server action in `src/app/actions.ts` to call your new flow from the UI.
-   **UI Components**: You can add new ShadCN UI components using the ShadCN CLI or create your own custom components in the `src/components/` directory.

We hope you enjoy using SynergyFlow to enhance your team's collaboration!
