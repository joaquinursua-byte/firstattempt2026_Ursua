import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

// --- Import App Shell ---
import App from "./App";

// --- Import Authentication & Entry ---
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import RoleSelection from "./pages/RoleSelection";

// --- Import Alumni Portal Pages ---
import AlumniHome from "./pages/AlumniHome";
import Events from "./pages/Events";
import Donations from "./pages/Donations";
import CampaignDetails from "./pages/CampaignDetails";
import Checkout from "./pages/Checkout";
import DonationHistory from "./pages/DonationHistory";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import CertificateVault from "./pages/CertificateVault";
import Leaderboard from "./pages/Leaderboard";

// --- Import Administrator Pages ---
import AdminHome from "./pages/AdminHome";
import AdminCampaigns from "./pages/AdminCampaigns";
import CreateCampaign from "./pages/CreateCampaign";
import PublishCampaign from "./pages/PublishCampaign";

// --- Import Global Styles ---
import "./index.css"; 

render(
  () => (
    <Router root={App}>
      {/* 1. Authentication & Entry Flow */}
      <Route path="/" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/role" component={RoleSelection} />
      
      {/* 2. Alumni Portal Flow */}
      <Route path="/home" component={AlumniHome} />
      <Route path="/events" component={Events} />
      <Route path="/donations" component={Donations} />
      <Route path="/campaign" component={CampaignDetails} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/history" component={DonationHistory} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/profile" component={Profile} />
      <Route path="/vault" component={CertificateVault} />
      <Route path="/leaderboard" component={Leaderboard} />
      
      {/* 3. Administrator Portal Flow */}
      <Route path="/admin" component={AdminHome} />
      <Route path="/admin-campaigns" component={AdminCampaigns} />
      <Route path="/create-campaign" component={CreateCampaign} />
      <Route path="/publish-campaign" component={PublishCampaign} />
    </Router>
  ),
  document.getElementById("root")
);