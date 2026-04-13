import { createSignal, For, Show } from "solid-js";
import { Asterisk, Heart, Calendar, FileText, Handshake, MapPin, UserCheck } from "lucide-solid";
import BottomNav from "../components/BottomNav";

export default function Notifications() {
  const [activeTab, setActiveTab] = createSignal("All");
  const tabs = ["All", "Donations", "Admin", "Events"];

  const urgentUpdate = {
    title: "Emergency Fund: Typhoon Relief",
    time: "2m ago",
    desc: "Immediate assistance needed for students affected by the recent flooding in Davao City.",
  };

  const recentNotifications = [
    { id: 1, title: "Campaign Milestone",           time: "45m ago",   desc: "Scholarship Fund for 2024 has reached 90% of its funding goal! Thank you for your support.", icon: Heart,     iconStyle: "color:#3B82F6", iconBg: "background:#EFF6FF", category: "Donations" },
    { id: 2, title: "Homecoming Tomorrow",           time: "2h ago",    desc: "Don't forget the Batch 2024 Grand Homecoming at Martin Hall starts at 6:00 PM tomorrow.",    icon: Calendar,  iconStyle: "color:#F59E0B", iconBg: "background:#FFFBEB", category: "Events"    },
    { id: 3, title: "Transparency Report Released",  time: "5h ago",    desc: "The Annual Alumni Financial Transparency Report for FY 2023-2024 is now available.",         icon: FileText,  iconStyle: "color:#6B7280", iconBg: "background:#F3F4F6", category: "Admin"     },
    { id: 4, title: "Donation Processed",            time: "Yesterday", desc: "Your donation of ₱1,500 to the 'Books for Mindanao' drive has been successfully processed.",   icon: Handshake, iconStyle: "color:#2563EB", iconBg: "background:#EFF6FF", category: "Donations" },
    { id: 5, title: "Venue Change: Networking Night",time: "Yesterday", desc: "The Networking Night has been moved to the Arrupe Hall Rooftop. Same time, same date.",       icon: MapPin,    iconStyle: "color:#F59E0B", iconBg: "background:#FFFBEB", category: "Events"    },
  ];

  const earlierNotifications = [
    { id: 6, title: "Profile Verified", time: "3d ago", desc: "Your alumni identity has been verified by the ADDU Alumni Office. Welcome back!", icon: UserCheck, iconStyle: "color:#9CA3AF", iconBg: "background:#F3F4F6", category: "Admin" },
  ];

  const handleMarkAllRead = () => alert("All notifications marked as read!");

  return (
    <div class="notifications-page">

      {/* Header */}
      <div class="notifications-header">
        <div class="notifications-header__top">
          <h1 class="notifications-header__title">Notifications</h1>
          <button onClick={handleMarkAllRead} class="notifications-header__mark-btn">
            Mark all as read
          </button>
        </div>
        <div class="notifications-filter-scroll hide-scrollbar">
          <For each={tabs}>
            {(tab) => (
              <button
                onClick={() => setActiveTab(tab)}
                class={`notifications-filter-chip${activeTab() === tab ? " notifications-filter-chip--active" : " notifications-filter-chip--default"}`}
              >
                {tab}
              </button>
            )}
          </For>
        </div>
      </div>

      <div class="notifications-body">

        {/* Urgent */}
        <Show when={activeTab() === "All" || activeTab() === "Donations"}>
          <div>
            <p class="notifications-group-label">Urgent Updates</p>
            <div class="notifications-urgent">
              <div class="notifications-urgent__icon-wrap">
                <Asterisk size={18} />
              </div>
              <div style="flex:1">
                <div class="notifications-urgent__header">
                  <h3 class="notifications-urgent__title">{urgentUpdate.title}</h3>
                  <span class="notifications-urgent__time">{urgentUpdate.time}</span>
                </div>
                <p class="notifications-urgent__desc">{urgentUpdate.desc}</p>
              </div>
            </div>
          </div>
        </Show>

        {/* Recent */}
        <div>
          <For each={recentNotifications.filter((n) => activeTab() === "All" || n.category === activeTab())}>
            {(notif) => (
              <div class="notif-item">
                <div class="notif-item__icon-wrap" style={notif.iconBg}>
                  <notif.icon size={18} style={notif.iconStyle} />
                </div>
                <div style="flex:1">
                  <div class="notif-item__header">
                    <h3 class="notif-item__title">{notif.title}</h3>
                    <span class="notif-item__time">{notif.time}</span>
                  </div>
                  <p class="notif-item__desc">{notif.desc}</p>
                </div>
              </div>
            )}
          </For>
        </div>

        {/* Earlier */}
        <Show when={activeTab() === "All" || activeTab() === "Admin"}>
          <div>
            <p class="notifications-group-label">Earlier This Week</p>
            <For each={earlierNotifications}>
              {(notif) => (
                <div class="notif-item">
                  <div class="notif-item__icon-wrap" style={notif.iconBg}>
                    <notif.icon size={18} style={notif.iconStyle} />
                  </div>
                  <div style="flex:1">
                    <div class="notif-item__header">
                      <h3 class="notif-item__title">{notif.title}</h3>
                      <span class="notif-item__time">{notif.time}</span>
                    </div>
                    <p class="notif-item__desc">{notif.desc}</p>
                  </div>
                </div>
              )}
            </For>
          </div>
        </Show>

      </div>

      <BottomNav />
    </div>
  );
}
