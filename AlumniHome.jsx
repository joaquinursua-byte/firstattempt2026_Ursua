import { For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { Heart, GraduationCap, TrendingUp, BarChart2 } from "lucide-solid";
import BottomNav from "../components/BottomNav";

export default function AlumniHome() {
  const navigate = useNavigate();
  const newsItems = [
    { id: 1, title: "Grand Alumni Homecoming 2024", date: "OCT 24, 2024", colorClass: "news-card__image--teal" },
    { id: 2, title: "Scholarship Goal",             date: "OCT 12, 2024", colorClass: "news-card__image--dark" },
  ];

  return (
    <div class="alumni-home">

      {/* 1. Header */}
      <div class="home-header">
        <div class="home-header__avatar">
          <img src="https://i.pravatar.cc/150?img=32" alt="Sophia" />
        </div>
        <div class="home-header__info">
          <p class="home-header__greeting">Welcome, Atenean!</p>
          <h1 class="home-header__name">Sophia Laforteza</h1>
          <p class="home-header__sub">AB Communications '24</p>
        </div>
      </div>

      {/* 2. Donate Now Button */}
      <div class="home-donate-wrap">
        <button class="home-donate-btn">Donate Now</button>
      </div>

      {/* 3. Stats Grid */}
      <div class="stats-grid">

        <div class="stat-card">
          <Heart class="stat-card__icon stat-card__icon--red" fill="#E8356E" />
          <div>
            <p class="stat-card__label">Total Donated</p>
            <p class="stat-card__value stat-card__value--red">₱12,500.00</p>
          </div>
        </div>

        <div class="stat-card">
          <GraduationCap class="stat-card__icon stat-card__icon--gold" />
          <div>
            <p class="stat-card__label">Scholars Supported</p>
            <p class="stat-card__value stat-card__value--gold">4 Students</p>
          </div>
        </div>

        <div class="stat-card">
          <TrendingUp class="stat-card__icon stat-card__icon--green" />
          <div>
            <p class="stat-card__label" style="line-height:1.4">Progress on the<br />Calamity Fund Drive</p>
            <div class="stat-progress">
              <div class="stat-progress__track">
                <div class="stat-progress__fill" style="width:75%"></div>
              </div>
              <span class="stat-progress__pct">75%</span>
            </div>
          </div>
        </div>

        <button class="stat-card" onClick={() => navigate("/leaderboard")} style="text-align:left;width:100%">
          <BarChart2 class="stat-card__icon stat-card__icon--blue" />
          <div>
            <p class="stat-card__label">Batch Ranking</p>
            <p class="stat-card__value stat-card__value--blue">#3 Top Class</p>
          </div>
        </button>

      </div>

      {/* 4. Latest News */}
      <div class="news-section">
        <div class="news-section__header">
          <h2 class="news-section__title">Latest News</h2>
          <button class="news-section__see-all">See all</button>
        </div>
        <div class="news-scroll hide-scrollbar">
          <For each={newsItems}>
            {(item) => (
              <div class="news-card">
                <div class={`news-card__image ${item.colorClass}`}>
                  <span class="news-card__watermark">NEWS</span>
                </div>
                <div class="news-card__body">
                  <h3 class="news-card__title">{item.title}</h3>
                  <p class="news-card__date">{item.date}</p>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
