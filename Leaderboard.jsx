import { For, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { ChevronLeft, Info, Share2, Award, Users, Filter, GraduationCap } from "lucide-solid";
import BottomNav from "../components/BottomNav";

export default function Leaderboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = createSignal("Global Rank");
  const tabs = ["Global Rank", "Your Batch", "Recent Activity"];

  const rankings = [
    { rank: 4, batch: "Class of 2005", participation: "64%", raised: "$28,900", progress: 64, type: "cheer",  isUserBatch: false },
    { rank: 5, batch: "Class of 1998", participation: "58%", raised: "$24,200", progress: 58, type: "cheer",  isUserBatch: false },
    { rank: 6, batch: "Class of 2018", participation: "52%", raised: "$18,500", progress: 52, type: "invite", isUserBatch: true  },
    { rank: 7, batch: "Class of 2021", participation: "45%", raised: "$12,100", progress: 45, type: "cheer",  isUserBatch: false },
  ];

  return (
    <div class="leaderboard-page">

      {/* Header */}
      <div class="leaderboard-header">
        <div class="leaderboard-header__top">
          <button onClick={() => navigate(-1)} style="padding:8px;margin-left:-8px;color:#9CA3AF;display:flex;align-items:center">
            <ChevronLeft size={24} />
          </button>
          <h1 class="leaderboard-header__title">Batch Leaderboard</h1>
          <button style="padding:8px;margin-right:-8px;color:#9CA3AF;display:flex;align-items:center">
            <Info size={20} />
          </button>
        </div>

        <div class="leaderboard-tabs">
          <For each={tabs}>
            {(tab) => (
              <button
                onClick={() => setActiveTab(tab)}
                class={`leaderboard-tab${activeTab() === tab ? " leaderboard-tab--active" : ""}`}
              >
                {tab}
              </button>
            )}
          </For>
        </div>
      </div>

      {/* Podium */}
      <div class="leaderboard-podium">

        {/* Rank 2 */}
        <div class="podium-slot">
          <div class="podium-slot__avatar podium-slot__avatar--other">
            <GraduationCap size={18} style="color:#2D82FF" />
          </div>
          <div class="podium-block podium-block--second">
            <span class="podium-block__year">2008</span>
            <p class="podium-block__rank podium-block__rank--other">2</p>
            <p class="podium-block__stat">78% Participation</p>
          </div>
        </div>

        {/* Rank 1 */}
        <div class="podium-slot" style="margin-bottom:-8px;z-index:10">
          <div class="podium-slot__avatar podium-slot__avatar--first">
            <Award size={24} style="color:#ffffff" />
          </div>
          <div class="podium-block podium-block--first">
            <span class="podium-block__year">2012</span>
            <p class="podium-block__rank podium-block__rank--first">1</p>
            <p class="podium-block__stat podium-block__stat--first">$42.5K RAISED</p>
          </div>
        </div>

        {/* Rank 3 */}
        <div class="podium-slot">
          <div class="podium-slot__avatar podium-slot__avatar--other">
            <Users size={18} style="color:#2D82FF" />
          </div>
          <div class="podium-block podium-block--third">
            <span class="podium-block__year">2015</span>
            <p class="podium-block__rank podium-block__rank--other">3</p>
            <p class="podium-block__stat">72% Goal</p>
          </div>
        </div>

      </div>

      {/* All Rankings */}
      <div class="leaderboard-list">
        <div class="leaderboard-list__header">
          <h2 class="leaderboard-list__title">All Batch Rankings</h2>
          <button class="leaderboard-list__filter">
            <span>Filter by Year</span>
            <Filter size={12} />
          </button>
        </div>

        <div class="leaderboard-list__items">
          <For each={rankings}>
            {(item) => (
              <div class={`leaderboard-item${item.isUserBatch ? " leaderboard-item--user" : " leaderboard-item--default"}`}>
                <span class="leaderboard-item__rank">{item.rank}</span>
                <div class="leaderboard-item__info">
                  <div class="leaderboard-item__title-row">
                    <h3 class="leaderboard-item__batch">{item.batch}</h3>
                    {item.isUserBatch && <span class="leaderboard-item__your-batch">Your Batch</span>}
                  </div>
                  <p class="leaderboard-item__meta">{item.participation} Participation · {item.raised}</p>
                  <div class="leaderboard-item__track">
                    <div class="leaderboard-item__fill" style={`width:${item.progress}%`}></div>
                  </div>
                </div>
                <button class={`leaderboard-item__btn${item.type === "invite" ? " leaderboard-item__btn--invite" : " leaderboard-item__btn--cheer"}`}>
                  {item.type === "invite" ? <Share2 size={12} /> : "📢"}
                  <span style="text-transform:capitalize">{item.type}</span>
                </button>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Stats */}
      <div class="leaderboard-stats">
        <div class="leaderboard-stat-card leaderboard-stat-card--blue">
          <p class="leaderboard-stat-card__label leaderboard-stat-card__label--blue">Total Alumni Raised</p>
          <p class="leaderboard-stat-card__value">$1.2M+</p>
        </div>
        <div class="leaderboard-stat-card leaderboard-stat-card--gray">
          <p class="leaderboard-stat-card__label leaderboard-stat-card__label--gray">Active Batches</p>
          <p class="leaderboard-stat-card__value">42 Classes</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
