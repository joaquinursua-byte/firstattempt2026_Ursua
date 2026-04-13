import { For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { BadgeCheck, GraduationCap, Pencil, FileText, Users, HeartHandshake, ChevronRight, Settings, Lock, HelpCircle, LogOut } from "lucide-solid";
import BottomNav from "../components/BottomNav";

export default function Profile() {
  const navigate = useNavigate();

  const user = {
    name: "Sophia Laforteza",
    program: "AB Communications, Batch 2024",
    university: "Ateneo de Davao University",
    image: "https://i.pravatar.cc/400?img=32",
  };

  const academicRecords = [
    { id: "tor",       title: "Transcript of Records", subtitle: "Official digital copy (e-TOR)", icon: FileText,       iconStyle: "color:#3B82F6", iconBg: "background:#EFF6FF", action: () => console.log("TOR") },
    { id: "orgs",      title: "Committees & Orgs",     subtitle: "SAMAHAN, BKV (Active)",         icon: Users,          iconStyle: "color:#F97316", iconBg: "background:#FFF7ED", action: () => console.log("Orgs") },
    { id: "donations", title: "Past Donations",         subtitle: "Blue Knight Scholars Fund",     icon: HeartHandshake, iconStyle: "color:#10B981", iconBg: "background:#ECFDF5", action: () => navigate("/certificate-vault") },
  ];

  const accountSettings = [
    { id: "settings", title: "App Settings",     icon: Settings,   iconStyle: "color:#4B5563" },
    { id: "password", title: "Change Password",  icon: Lock,       iconStyle: "color:#4B5563" },
    { id: "help",     title: "Help Center",       icon: HelpCircle, iconStyle: "color:#4B5563" },
  ];

  const handleLogout = () => navigate("/");

  return (
    <div class="profile-page">

      {/* Hero */}
      <div class="profile-hero">
        <div class="profile-avatar-wrap">
          <div class="profile-avatar">
            <img src={user.image} alt={user.name} />
          </div>
          <div class="profile-verified-badge">
            <BadgeCheck size={24} style="color:#2D82FF" fill="white" />
          </div>
        </div>
        <h1 class="profile-name">{user.name}</h1>
        <p class="profile-program">{user.program}</p>
        <div class="profile-university">
          <GraduationCap size={14} />
          <span>{user.university}</span>
        </div>
        <button onClick={() => console.log("Edit Profile")} class="profile-edit-btn">
          <Pencil size={16} />
          <span>Edit Profile</span>
        </button>
      </div>

      <div class="profile-body">

        {/* Academic & Records */}
        <div>
          <p class="profile-section-title">Academic & Records</p>
          <div class="profile-menu-card">
            <For each={academicRecords}>
              {(item) => (
                <button onClick={item.action} class="profile-menu-item">
                  <div class="profile-menu-item__left">
                    <div class="profile-menu-item__icon-wrap" style={item.iconBg}>
                      <item.icon size={20} style={item.iconStyle} />
                    </div>
                    <div>
                      <p class="profile-menu-item__title">{item.title}</p>
                      <p class="profile-menu-item__subtitle">{item.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} class="profile-menu-item__chevron" />
                </button>
              )}
            </For>
          </div>
        </div>

        {/* Account Settings */}
        <div>
          <p class="profile-section-title">Account Settings</p>
          <div class="profile-menu-card">
            <For each={accountSettings}>
              {(item) => (
                <button onClick={() => console.log(item.id)} class="profile-menu-item profile-menu-item--settings">
                  <div class="profile-menu-item__left">
                    <item.icon size={20} style={item.iconStyle} />
                    <p class="profile-menu-item__title">{item.title}</p>
                  </div>
                  <ChevronRight size={18} class="profile-menu-item__chevron" />
                </button>
              )}
            </For>
            <button onClick={handleLogout} class="profile-menu-item profile-menu-item--logout">
              <div class="profile-menu-item__left">
                <LogOut size={20} style="color:#EF4444" />
                <p class="profile-menu-item__title">Log Out</p>
              </div>
            </button>
          </div>
        </div>

      </div>

      <BottomNav />
    </div>
  );
}
