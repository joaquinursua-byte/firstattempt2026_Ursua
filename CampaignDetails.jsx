import { For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { ChevronLeft, Share2, GraduationCap, Heart } from "lucide-solid";
import BottomNav from "../components/BottomNav";

export default function CampaignDetails() {
  const navigate = useNavigate();

  const campaign = {
    title: "Scholarship Fund 2024",
    category: "EDUCATION",
    goal: "₱1,000,000.00",
    image: "https://i.pravatar.cc/600?img=11",
    story:
      "Every year, hundreds of bright and deserving students face the risk of dropping out due to financial constraints. The Scholarship Fund 2024 aims to provide full tuition coverage for 50 incoming freshmen from underprivileged backgrounds in Mindanao. Your contribution ensures that the Blue Knight spirit continues to soar, breaking cycles of poverty through quality Jesuit education.",
  };

  const testimonials = [
    {
      id: 1,
      quote: "I was a scholar once, and now it's my turn to pay it forward. ADDU gave me the foundation I needed.",
      author: "CLASS OF '98 ALUMNUS",
      icon: GraduationCap,
      iconStyle: "color:#3B82F6",
      iconBg: "background:#EFF6FF",
    },
    {
      id: 2,
      quote: "Small acts of kindness can transform lives. Happy to support the next generation of leaders.",
      author: "ANONYMOUS DONOR",
      icon: Heart,
      iconStyle: "color:#F87171",
      iconBg: "background:#FEF2F2",
    },
  ];

  return (
    <div class="campaign-details-page">

      {/* Hero */}
      <div class="campaign-details-hero">
        <img src={campaign.image} alt={campaign.title} class="campaign-details-hero__img" />
        <div class="campaign-details-hero__overlay"></div>

        <div class="campaign-details-hero__actions">
          <button onClick={() => navigate(-1)} class="campaign-details-hero__action-btn">
            <ChevronLeft size={24} style="margin-left:-2px" />
          </button>
          <button class="campaign-details-hero__action-btn">
            <Share2 size={20} />
          </button>
        </div>

        <div class="campaign-details-hero__content">
          <span class="campaign-details-hero__badge">{campaign.category}</span>
          <h1 class="campaign-details-hero__title">{campaign.title}</h1>
          <p class="campaign-details-hero__goal">Goal: {campaign.goal}</p>
        </div>
      </div>

      {/* Story */}
      <div class="campaign-details-body">
        <h2 class="campaign-details-section-title">The Story</h2>
        <p class="campaign-details-story">{campaign.story}</p>
      </div>

      {/* Donor Impact */}
      <div class="campaign-details-impact">
        <h2 class="campaign-details-impact__title">Donor Impact</h2>
        <div class="campaign-details-impact__scroll hide-scrollbar">
          <For each={testimonials}>
            {(item) => (
              <div class="impact-card">
                <p class="impact-card__quote">"{item.quote}"</p>
                <div class="impact-card__author">
                  <div class="impact-card__author-icon" style={item.iconBg}>
                    <item.icon size={12} style={item.iconStyle} />
                  </div>
                  <span class="impact-card__author-name">{item.author}</span>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Fixed Donate Button */}
      <div class="campaign-details-donate-fixed">
        <button onClick={() => navigate("/checkout")} class="campaign-details-donate-btn">
          Donate Now
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
