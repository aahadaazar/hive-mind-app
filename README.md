# Hive Mind Frontend Engineer Test - Aurorah Account Page

This project is a submission for the Hive Mind Frontend Engineer position. It replicates the "Create Aurorah Account" page with a strict focus on the provided design, functionality, and coding standards.

## Project Overview

The goal was to build a responsive, interactive, and visually faithful implementation of the provided design using Next.js and SCSS Modules.

**Live Preview**: Run the project locally to view the result at `/register`.

### Key Features

*   **UI Implementation**: Pixel-perfect replication of the design using SCSS Modules (No Tailwind, as per requirements).
*   **Responsive Layout**: Fully responsive Sidebar and Main Content area.
*   **Sidebar Interaction**:
    *   Collapsible sidebar with smooth transitions.
    *   Clicking the logo toggles the sidebar state.
    *   Collapse button hides when the sidebar is minimized.
*   **Form Validation**: Robust validation using `joi` and `react-hook-form`.
    *   Real-time feedback for all fields.
    *   Specific validation for Phone Number (digits only).
*   **Styling**:
    *   Dark mode aesthetic matching the mock.
    *   Glassmorphism effects on the auth card.
    *   Custom styled inputs and buttons.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: TypeScript
*   **Styling**: SCSS Modules
*   **Form Handling**: `react-hook-form`
*   **Validation**: `joi` + `@hookform/resolvers`
*   **Icons**: `react-icons` (Lucide React & FontAwesome)

## Getting Started

1.  **Install Dependencies**:

    ```bash
    npm install
    ```

2.  **Run Development Server**:

    ```bash
    npm run dev
    ```

3.  **Open the Application**:
    Visit [http://localhost:3000/register](http://localhost:3000/register) to see the implementation.

## Project Structure

```
app/
├── globals.css         # Global styles (Dark theme setup)
└── register/           # Registration Page Module
    ├── page.tsx        # Server Component (Layout wrapper)
    ├── page.client.tsx # Client Component (Form logic, Sidebar state)
    ├── page.actions.ts # Server Actions (Mock account creation)
    └── page.module.scss # SCSS Styles (Scoped styling)
```
