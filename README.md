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

#### AlumniHub – Project File Structure
 
src/
├── index.css                        ← Global styles & design tokens (replace entirely)
│
├── App.jsx                          ← Router config (add all routes here)
│
├── components/
│   └── BottomNav.jsx                ← Shared bottom navigation bar
│
└── pages/
    │
    ├── ── AUTH ──
    ├── Login.jsx                    ← Entry point / Sign Up view
    ├── ForgotPassword.jsx           ← Password recovery
    ├── RoleSelection.jsx            ← Alumni or Administrator picker
    │
    ├── ── ALUMNI ──
    ├── AlumniHome.jsx               ← Alumni dashboard
    ├── Events.jsx                   ← Calendar + List view
    ├── Donations.jsx                ← Giving & Impact feed
    ├── CampaignDetails.jsx          ← Single campaign story + Donate Now
    ├── Checkout.jsx                 ← Secure donation checkout
    ├── DonationHistory.jsx          ← Giving summary + transactions
    ├── Notifications.jsx            ← Notification center
    ├── Profile.jsx                  ← Account overview
    ├── CertificateVault.jsx         ← Verified donation certificates
    ├── Leaderboard.jsx              ← Batch rankings podium
    │
    └── ── ADMIN ──
        ├── AdminHome.jsx            ← Admin dashboard
        ├── AdminCampaigns.jsx       ← Campaign management list
        ├── CreateCampaign.jsx       ← Step 1: Campaign details form
        └── PublishCampaign.jsx      ← Step 2: Donation options & publish

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

<img width="1863" height="953" alt="image" src="https://github.com/user-attachments/assets/a59a068f-26ae-4285-855b-5ca4ca324688" />

<img width="1857" height="951" alt="image" src="https://github.com/user-attachments/assets/fb63ac49-7597-41f9-8e54-8f184bc34dd7" />

<img width="1860" height="955" alt="image" src="https://github.com/user-attachments/assets/38cf40c4-ffe3-4677-8b40-b24aac39165d" />

<img width="1861" height="948" alt="image" src="https://github.com/user-attachments/assets/bd303aca-1cf8-4778-91e8-13a8d793d446" />

<img width="1858" height="948" alt="image" src="https://github.com/user-attachments/assets/1d0e885b-56ee-4932-a4f9-d1e41419f0f5" />

<img width="1858" height="874" alt="image" src="https://github.com/user-attachments/assets/c1993131-ee48-42b1-956b-a0372a4e44c7" />

<img width="1848" height="580" alt="image" src="https://github.com/user-attachments/assets/2c02704f-7e2f-4e3c-89cb-4886f1291e5e" />

<img width="1858" height="951" alt="image" src="https://github.com/user-attachments/assets/199068ea-5a80-4ea6-97a3-8bb674d780b3" />

<img width="1861" height="877" alt="image" src="https://github.com/user-attachments/assets/e890b398-26b6-4124-a60f-46e4b3178175" />

<img width="1854" height="951" alt="image" src="https://github.com/user-attachments/assets/3d503210-e006-4120-9286-bbb1d4351049" />

<img width="1860" height="958" alt="image" src="https://github.com/user-attachments/assets/a692180f-33d3-48cd-bc4c-b1fe442396c6" />

<img width="1856" height="951" alt="image" src="https://github.com/user-attachments/assets/71c29dc3-4487-47d8-9d9c-252c63761d92" />

<img width="1856" height="948" alt="image" src="https://github.com/user-attachments/assets/f3ebd7cf-1a28-4b34-a016-536d4248179d" />

<img width="1858" height="948" alt="image" src="https://github.com/user-attachments/assets/3278209e-fccd-46ca-b486-391ca8245df9" />


