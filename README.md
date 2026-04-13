## Ursua

#### Framework: Solid JS

#### Module: Alumni Donation

#### Installation

To replicate and run this project follow the following steps using Windows Powershell:

```bash
# Install Node.js LTS via winget (if not installed)
winget install OpenJS.NodeJS.LTS

# Use NVM to manage versioning
nvm install lts
nvm use lts

# Scaffold the SolidJS project
npm init solid@latest

# Move into the project directory
cd <your-project-name>

# Install dependencies
npm install

# Start the development server
npm run dev
```

### AI Tools:

1. Chat GPT
2. Gemini Pro
3. Claude Pro

### Prompt:

I am building a frontend-only Alumni Donation Web Application using SolidJS, and I need you to generate a clean, modular, and interactive codebase. The application will not use any backend or database; instead, all data should be simulated using local state, mock data, or static JSON files. The goal is to create a high-fidelity, fully interactive prototype that demonstrates the complete user experience and interface behavior.

Use SolidJS with a component-based architecture and implement routing (e.g., Solid Router) for navigation between pages. The application should include the following screens: Login, Role Selection, Home Dashboard, Events (Calendar and List View), Donation Campaigns, Campaign Details, Secure Checkout, Donation History, Notifications, Profile, Certificate Vault, and Admin Dashboard. Each page should be responsive, mobile-first, and follow a consistent layout with a reusable navigation system (such as a bottom navigation bar or sidebar depending on the user role).

Since there is no backend, simulate all functionalities using local state (signals/stores). This includes authentication (mock login), campaign data, donation transactions, event listings, and notifications. Implement realistic UI interactions such as form inputs, dropdowns, toggles, modals, and page transitions. Donation flows should simulate selecting a campaign, choosing preset or custom amounts, selecting a payment method (e.g., GCash, Maya, Card), and confirming a transaction with a mock success state and generated receipt.

For the events module, implement both calendar and list views with a toggle feature. Events should display complete details such as date, time, location, and category, along with RSVP buttons that update local state. Include search and filter functionality for better usability.

For the admin interface, create a dashboard that displays mock analytics such as total donations, campaign progress, and donor activity. Implement campaign management features such as creating, editing, and previewing campaigns using multi-step forms, all handled through local state. Include a batch leaderboard feature that ranks alumni groups based on simulated donation data.

Ensure the UI is clean, modern, and user-friendly, with reusable components (cards, buttons, inputs, modals, charts). Use mock charts or simple visualizations for analytics. Maintain a well-structured folder architecture and clean code practices. The final output should behave like a real application, even without backend integration, focusing on interactivity, usability, and design accuracy.

#### Screenshots

"Create an image folder in your root directory and place all screenshots their. You can use the image tag to show the image. Follow this [link]("https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images")"
