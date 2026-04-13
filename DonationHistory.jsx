import { For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { ChevronLeft, Download, GraduationCap, Waves, Building, Award, Medal, Trophy } from "lucide-solid";
import BottomNav from "../components/BottomNav";

export default function DonationHistory() {
  const navigate = useNavigate();

  const chartData = [20, 30, 40, 25, 60, 80, 50, 40, 70, 90, 60, 45];

  const transactions = [
    { id: 1, title: "Scholarship Fund", date: "Oct 24, 2024", method: "GCash", amount: "₱2,500", icon: GraduationCap, iconStyle: "color:#2D82FF", iconBg: "background:#E5F0FF" },
    { id: 2, title: "Calamity Relief",  date: "Sep 12, 2024", method: "Maya",  amount: "₱1,500", icon: Waves,         iconStyle: "color:#06B6D4", iconBg: "background:#CFFAFE" },
    { id: 3, title: "Chapel Renovation",date: "Aug 05, 2024", method: "Visa",  amount: "₱5,000", icon: Building,      iconStyle: "color:#8B5CF6", iconBg: "background:#EDE9FE" },
  ];

  const impacts = [
    { id: 1, title: "Supported 5\nCampaigns", icon: Trophy, active: true  },
    { id: 2, title: "₱100k Milestone",         icon: Medal,  active: false },
    { id: 3, title: "Monthly Sustainer",        icon: Award,  active: false },
  ];

  const recommendations = [
    { id: 1, title: "Digital Media Equipment Fund", image: "https://i.pravatar.cc/400?img=11", progress: 65 },
    { id: 2, title: "New Broadcasting Studio",       image: "https://i.pravatar.cc/400?img=12", progress: 30 },
  ];

  return (
    <div class="donation-history-page">

      {/* Header */}
      <div class="donation-history-header">
        <button onClick={() => navigate(-1)} class="donation-history-header__back">
          <ChevronLeft size={24} />
        </button>
        <h1 class="donation-history-header__title">Donation History</h1>
        <div style="width:32px"></div>
      </div>

      <div class="donation-history-body">

        {/* Giving Summary */}
        <div class="giving-summary">
          <p class="giving-summary__label">Giving Summary</p>
          <div class="giving-summary__stats">
            <div>
              <p class="giving-summary__stat-value giving-summary__stat-value--blue">₱12,500</p>
              <p class="giving-summary__stat-label">Total Donated</p>
            </div>
            <div>
              <p class="giving-summary__stat-value giving-summary__stat-value--dark">8</p>
              <p class="giving-summary__stat-label">Campaigns Supported</p>
            </div>
          </div>
          <div class="giving-summary__chart">
            <For each={chartData}>
              {(height, index) => (
                <div
                  class={`giving-summary__bar${index() >= 8 ? " giving-summary__bar--dark" : " giving-summary__bar--light"}`}
                  style={`height:${height}%`}
                ></div>
              )}
            </For>
          </div>
          <div class="giving-summary__chart-labels">
            <span>JAN</span><span>JUN</span><span>DEC</span>
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h2 class="recent-transactions__title">Recent Transactions</h2>
          <div class="recent-transactions__list">
            <For each={transactions}>
              {(tx) => (
                <div class="transaction-item">
                  <div class="transaction-item__left">
                    <div class="transaction-item__icon" style={tx.iconBg}>
                      <tx.icon size={18} style={tx.iconStyle} />
                    </div>
                    <div>
                      <p class="transaction-item__title">{tx.title}</p>
                      <p class="transaction-item__meta">{tx.date} · {tx.method}</p>
                    </div>
                  </div>
                  <div class="transaction-item__right">
                    <span class="transaction-item__amount">{tx.amount}</span>
                    <button class="transaction-item__download"><Download size={16} /></button>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Your Impact */}
        <div class="impact-badges">
          <h2 class="impact-badges__title">Your Impact</h2>
          <div class="impact-badges__scroll hide-scrollbar">
            <For each={impacts}>
              {(impact) => (
                <div class={`impact-badge${impact.active ? " impact-badge--active" : " impact-badge--locked"}`}>
                  <div class="impact-badge__icon-wrap">
                    <impact.icon size={28} style={impact.active ? "color:#FBBF24" : "color:#D1D5DB"} />
                    {impact.active && <div class="impact-badge__active-dot"></div>}
                  </div>
                  <p class={`impact-badge__label${impact.active ? " impact-badge__label--active" : " impact-badge__label--locked"}`}>
                    {impact.title}
                  </p>
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Recommended */}
        <div class="dh-recommended">
          <h2 class="dh-recommended__title">Recommended for You</h2>
          <p class="dh-recommended__subtitle">Based on AB COMM / BATCH '24</p>
          <div class="dh-recommended__scroll hide-scrollbar">
            <For each={recommendations}>
              {(rec) => (
                <div class="dh-rec-card">
                  <div class="dh-rec-card__img">
                    <img src={rec.image} alt={rec.title} />
                  </div>
                  <div class="dh-rec-card__body">
                    <p class="dh-rec-card__title">{rec.title}</p>
                    <div class="dh-rec-card__track">
                      <div class="dh-rec-card__fill" style={`width:${rec.progress}%`}></div>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

      </div>

      <BottomNav />
    </div>
  );
}
