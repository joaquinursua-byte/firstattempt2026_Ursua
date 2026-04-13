import { For, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { History, GraduationCap, Waves } from "lucide-solid";
import BottomNav from "../components/BottomNav";

export default function Donations() {
  const navigate = useNavigate();
  const featuredCampaigns = [
    { id: 1, title: "Scholarship Fund 2024", fundedPercent: 75, raised: "₱750K", goal: "₱1M",   bgClass: "bg-gray-800"  },
    { id: 2, title: "Library Renovation",    fundedPercent: 40, raised: "₱400K", goal: "₱1M",   bgClass: "bg-teal-900" },
  ];

  const recentDrives = [
    { id: 1, title: "Calamity Relief: Davao", desc: "Urgent support for flood victims.",    amounts: [500, 1000, 2000] },
    { id: 2, title: "Animal Shelter",          desc: "Urgent support for animals in shelter.", amounts: [500, 1000, 2000] },
  ];

  const historyLog = [
    { id: 1, title: "Scholarship Fund", date: "Oct 24, 2024", amount: "₱2,500", icon: GraduationCap, color: "color:#3B82F6", bg: "background:#EFF6FF" },
    { id: 2, title: "Calamity Relief",  date: "Sep 12, 2024", amount: "₱1,500", icon: Waves,         color: "color:#14B8A6", bg: "background:#F0FDFA" },
  ];

  const [selectedAmounts, setSelectedAmounts] = createSignal({});
  const toggleAmount = (driveId, amount) =>
    setSelectedAmounts((prev) => ({ ...prev, [driveId]: amount }));

  return (
    <div class="donations-page">

      {/* Header */}
      <div class="donations-header">
        <h1 class="donations-header__title">Giving & Impact</h1>
        <p class="donations-header__subtitle">Empowering the next generation of Ateneans.</p>
      </div>

      {/* Featured Campaigns */}
      <div class="donations-section" style="margin-top:24px">
        <div class="donations-section-header">
          <h2 class="donations-section-title">Featured Campaigns</h2>
          <span class="donations-section-hint">Slide to view</span>
        </div>
        <div class="donations-featured-scroll hide-scrollbar">
          <For each={featuredCampaigns}>
            {(c) => (
              <div class="campaign-featured-card">
                <div class="campaign-featured-card__bg" style={`background:${c.bgClass === "bg-gray-800" ? "#1F2937" : "#134e4a"}`}>
                  <img src="https://i.pravatar.cc/400?img=11" alt="Campaign" />
                </div>
                <div class="campaign-featured-card__overlay"></div>
                <div class="campaign-featured-card__content">
                  <h3 class="campaign-featured-card__title">{c.title}</h3>
                  <div class="campaign-featured-card__progress-label">
                    <span>{c.fundedPercent}% Funded</span>
                    <span>{c.raised} / {c.goal}</span>
                  </div>
                  <div class="campaign-featured-card__track">
                    <div class="campaign-featured-card__fill" style={`width:${c.fundedPercent}%`}></div>
                  </div>
                  <button class="campaign-featured-card__btn" onClick={() => navigate("/campaign-details")}>View Campaign</button>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Recent Drives */}
      <div class="donations-section" style="margin-top:16px">
        <div class="donations-section-header">
          <h2 class="donations-section-title">Recent Donation Drives</h2>
        </div>
        <div class="donations-drives-scroll hide-scrollbar">
          <For each={recentDrives}>
            {(drive) => (
              <div class="drive-card">
                <h3 class="drive-card__title">{drive.title}</h3>
                <p class="drive-card__desc">{drive.desc}</p>
                <div class="drive-card__amounts">
                  <For each={drive.amounts}>
                    {(amount) => (
                      <button
                        onClick={() => toggleAmount(drive.id, amount)}
                        class={`drive-card__amount-btn${selectedAmounts()[drive.id] === amount ? " drive-card__amount-btn--selected" : ""}`}
                      >
                        ₱{amount}
                      </button>
                    )}
                  </For>
                </div>
                <button class="drive-card__donate-btn">Donate</button>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Donation History */}
      <div class="donations-history">
        <div class="donations-history__header">
          <h2 class="donations-history__title">My Donation History</h2>
          <button onClick={() => navigate("/donation-history")} style="display:flex;align-items:center">
            <History style="width:16px;height:16px;color:#9CA3AF" />
          </button>
        </div>

        <div class="donations-history__summaries">
          <div class="donations-history__summary donations-history__summary--blue">
            <p class="donations-history__summary-label">Total Contributed</p>
            <p class="donations-history__summary-value donations-history__summary-value--blue">₱5,000</p>
          </div>
          <div class="donations-history__summary donations-history__summary--white">
            <p class="donations-history__summary-label">Campaigns Supported</p>
            <p class="donations-history__summary-value donations-history__summary-value--dark">3</p>
          </div>
        </div>

        <div class="donations-history__log">
          <For each={historyLog}>
            {(log) => (
              <div class="donations-history__log-item">
                <div class="donations-history__log-left">
                  <div class="donations-history__log-icon" style={log.bg}>
                    <log.icon style={`${log.color};width:20px;height:20px`} />
                  </div>
                  <div>
                    <p class="donations-history__log-name">{log.title}</p>
                    <p class="donations-history__log-date">{log.date}</p>
                  </div>
                </div>
                <span class="donations-history__log-amount">{log.amount}</span>
              </div>
            )}
          </For>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
