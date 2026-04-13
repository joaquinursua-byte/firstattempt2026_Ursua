import { For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { Heart, GraduationCap, TrendingUp, BarChart2, Home, Bell } from "lucide-solid";

export default function AdminHome() {
  const navigate = useNavigate();

  const newsItems = [
    { id: 1, title: "Grand Alumni Homecoming 2024", date: "OCT 24, 2024", colorClass: "news-card__image--teal" },
    { id: 2, title: "Scholarship Goal",             date: "OCT 12, 2024", colorClass: "news-card__image--dark" },
  ];

  return (
    <div class="admin-home-page">

      {/* Header */}
      <div class="admin-header">
        <div class="admin-header__avatar">
          <img src="https://i.pravatar.cc/150?img=47" alt="Admin" />
        </div>
        <div>
          <p class="admin-header__greeting">Welcome, Admin!</p>
          <h1 class="admin-header__name">Manon Bannerman</h1>
        </div>
      </div>

      {/* Create Donation Button */}
      <div class="admin-create-btn-wrap admin-create-btn-wrap--compact">
        <button class="admin-create-btn">
          <span>Create Donation</span>
        </button>
      </div>

      {/* Metrics Grid */}
      <div class="admin-metrics-grid">

        <div class="admin-metric-card">
          <Heart style="color:#E8356E;width:20px;height:20px" fill="#E8356E" />
          <div>
            <p class="admin-metric-card__value admin-metric-card__value--red">₱12,500.00</p>
            <p class="admin-metric-card__label">Total Funds Raised</p>
          </div>
        </div>

        <div class="admin-metric-card">
          <GraduationCap style="color:#2D82FF;width:24px;height:24px" />
          <div>
            <p class="admin-metric-card__value admin-metric-card__value--blue">400 Students</p>
            <p class="admin-metric-card__label">Scholar Supported</p>
          </div>
        </div>

        <div class="admin-metric-card">
          <TrendingUp style="color:#22C55E;width:20px;height:20px" />
          <div>
            <div class="admin-metric-card__progress-label">
              <p class="admin-metric-card__label" style="margin:0">Active Campaigns</p>
              <span style="font-size:10px;font-weight:700;color:#374151">75%</span>
            </div>
            <div class="progress-track" style="height:6px;margin-top:4px">
              <div class="progress-fill" style="width:75%;background-color:#22C55E;height:6px"></div>
            </div>
          </div>
        </div>

        <div class="admin-metric-card">
          <BarChart2 style="color:#202875;width:20px;height:20px" />
          <div>
            <p class="admin-metric-card__value admin-metric-card__value--navy">#3 Top Class</p>
            <p class="admin-metric-card__label">Batch Ranking</p>
          </div>
        </div>

      </div>

      {/* Latest News */}
      <div class="news-section" style="margin-top:32px">
        <div class="news-section__header">
          <h2 class="news-section__title news-section__title--white">Latest News</h2>
          <button class="news-section__see-all news-section__see-all--white">See all</button>
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

      {/* Admin Nav */}
      <div class="admin-nav">
        <div class="admin-nav__item admin-nav__item--active">
          <div class="admin-nav__icon-wrap">
            <Home style="color:#ffffff;width:20px;height:20px" />
          </div>
          <span class="admin-nav__label admin-nav__label--active">Home</span>
        </div>
        <button onClick={() => navigate("/admin-campaigns")} class="admin-nav__item">
          <Heart style="color:#374151;width:20px;height:20px" />
          <span class="admin-nav__label">Donation</span>
        </button>
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
