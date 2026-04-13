import { For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { PlusCircle, MoreHorizontal, Search, Heart, Bell, Home } from "lucide-solid";

export default function AdminCampaigns() {
  const navigate = useNavigate();

  const campaigns = [
    { id: 1, title: "Scholarship Fund 2024",          raised: "₱45,000",  goal: "₱60,000",  progress: 75, status: "ACTIVE",      image: "https://i.pravatar.cc/100?img=11" },
    { id: 2, title: "Library Renovation Project",     raised: "₱110,000", goal: "₱120,000", progress: 92, status: "ENDING SOON", image: "https://i.pravatar.cc/100?img=12" },
    { id: 3, title: "Grand Alumni Homecoming...",     raised: "₱25,000",  goal: "₱100,000", progress: 25, status: "ACTIVE",      image: "https://i.pravatar.cc/100?img=13" },
    { id: 4, title: "Annual Health & Medical Mis...", raised: "₱5,000",   goal: "₱20,000",  progress: 25, status: "PAUSED",      image: "https://i.pravatar.cc/100?img=14" },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "ACTIVE":      return "admin-campaign-card__status--active";
      case "ENDING SOON": return "admin-campaign-card__status--ending";
      case "PAUSED":      return "admin-campaign-card__status--paused";
      default:            return "admin-campaign-card__status--active";
    }
  };

  return (
    <div class="admin-campaigns-page">

      {/* Header */}
      <div class="admin-campaigns-header">
        <div style="display:flex;align-items:center;gap:12px">
          <div style="width:48px;height:48px;border-radius:9999px;border:2px solid rgba(255,255,255,0.3);overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.12)">
            <img src="https://i.pravatar.cc/150?img=47" alt="Admin" style="width:100%;height:100%;object-fit:cover" />
          </div>
          <div style="color:#ffffff">
            <p style="font-size:9px;font-weight:700;opacity:0.8;text-transform:uppercase;letter-spacing:0.1em">Welcome, Admin!</p>
            <h1 style="font-size:16px;font-weight:700;line-height:1.25">Manon Bannerman</h1>
          </div>
        </div>
        <button style="padding:8px;background:rgba(255,255,255,0.15);border-radius:9999px;color:#ffffff;display:flex;align-items:center;backdrop-filter:blur(4px)"
          onClick={() => navigate("/create-campaign")}>
          <Search size={20} />
        </button>
      </div>

      {/* Create Donation */}
      <div class="admin-create-btn-wrap">
        <button class="admin-create-btn admin-create-btn--white" onClick={() => navigate("/create-campaign")}>
          <PlusCircle size={20} />
          <span>Create Donation</span>
        </button>
      </div>

      {/* Campaign List */}
      <div class="admin-campaigns-section">
        <div class="admin-campaigns-section__header">
          <h2 class="admin-campaigns-section__title">Current Donation Campaigns</h2>
          <button class="admin-campaigns-section__see-all">See all</button>
        </div>

        <div class="admin-campaign-list">
          <For each={campaigns}>
            {(item) => (
              <div class="admin-campaign-card">
                <div class="admin-campaign-card__img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div class="admin-campaign-card__body">
                  <span class={`admin-campaign-card__status ${getStatusClass(item.status)}`}>
                    {item.status}
                  </span>
                  <h3 class="admin-campaign-card__title">{item.title}</h3>
                  <div class="admin-campaign-card__amounts">
                    <p class="admin-campaign-card__raised">
                      {item.raised} <span class="admin-campaign-card__goal">/ {item.goal}</span>
                    </p>
                    <span class={`admin-campaign-card__pct${item.status === "PAUSED" ? " admin-campaign-card__pct--paused" : " admin-campaign-card__pct--active"}`}>
                      {item.progress}%
                    </span>
                  </div>
                  <div class="admin-campaign-card__track">
                    <div
                      class={item.status === "PAUSED" ? "admin-campaign-card__fill--paused" : "admin-campaign-card__fill--active"}
                      style={`width:${item.progress}%`}
                    ></div>
                  </div>
                </div>
                <button class="admin-campaign-card__more">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Admin Nav */}
      <div class="admin-nav">
        <button onClick={() => navigate("/admin")} class="admin-nav__item">
          <Home style="color:#374151;width:20px;height:20px" />
          <span class="admin-nav__label">Home</span>
        </button>
        <div class="admin-nav__item admin-nav__item--active">
          <div class="admin-nav__icon-wrap">
            <Heart style="color:#ffffff;width:20px;height:20px" fill="white" />
          </div>
          <span class="admin-nav__label admin-nav__label--active">Donation</span>
        </div>
        <div class="admin-nav__item" style="position:relative">
          <div style="position:relative;display:flex">
            <Bell style="color:#374151;width:20px;height:20px" />
            <div style="position:absolute;top:-2px;right:-2px;width:8px;height:8px;background:#EF4444;border-radius:9999px;border:2px solid #fff"></div>
          </div>
          <span class="admin-nav__label">Notifications</span>
        </div>
      </div>

    </div>
  );
}
