import { createSignal, For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { ChevronLeft, Rocket } from "lucide-solid";

export default function PublishCampaign() {
  const navigate = useNavigate();
  const [selectedAmounts, setSelectedAmounts] = createSignal([500, 1000, 5000]);
  const [monthlyEnabled, setMonthlyEnabled] = createSignal(false);

  const presetOptions = [500, 1000, 2000, 5000];

  const handleToggleAmount = (amt) => {
    if (selectedAmounts().includes(amt)) {
      setSelectedAmounts(selectedAmounts().filter((a) => a !== amt));
    } else {
      setSelectedAmounts([...selectedAmounts(), amt]);
    }
  };

  const handlePublish = () => {
    alert("🚀 Campaign Published Successfully!");
    navigate("/admin-campaigns");
  };

  return (
    <div class="publish-campaign-page">

      {/* Header */}
      <div class="publish-campaign-header">
        <div class="publish-campaign-header__top">
          <button onClick={() => navigate(-1)} style="padding:8px;margin-left:-8px;color:#202875;display:flex;align-items:center">
            <ChevronLeft size={24} />
          </button>
          <h1 class="publish-campaign-header__title">Donation Options & Review</h1>
        </div>
        <div class="publish-campaign-progress"></div>
      </div>

      <div class="publish-campaign-body">

        {/* Suggested Amounts */}
        <div>
          <label class="create-campaign-field-label">Suggested Donation Amounts</label>
          <div class="publish-amounts-grid">
            <For each={presetOptions}>
              {(amt) => (
                <button
                  onClick={() => handleToggleAmount(amt)}
                  class={`publish-amount-btn${selectedAmounts().includes(amt) ? " publish-amount-btn--selected" : ""}`}
                >
                  ₱{amt.toLocaleString()}
                </button>
              )}
            </For>
          </div>
        </div>

        {/* Custom Amount */}
        <div>
          <label class="create-campaign-field-label">Custom Amount</label>
          <div class="publish-custom-wrap">
            <span class="publish-custom-prefix">₱</span>
            <input
              type="text"
              placeholder="0.00"
              class="publish-custom-input"
            />
          </div>
        </div>

        {/* Monthly Toggle */}
        <div class="publish-toggle-card">
          <div>
            <h3 class="publish-toggle-card__title">Enable monthly donations</h3>
            <p class="publish-toggle-card__hint">Donors can choose to give automatically every month</p>
          </div>
          <button
            onClick={() => setMonthlyEnabled(!monthlyEnabled())}
            class={`toggle-switch${monthlyEnabled() ? " toggle-switch--on" : " toggle-switch--off"}`}
            style="background-color:${monthlyEnabled() ? '#202875' : '#D1D5DB'}"
          >
            <div class={`toggle-switch__thumb${monthlyEnabled() ? " toggle-switch__thumb--on" : " toggle-switch__thumb--off"}`}></div>
          </button>
        </div>

        {/* Campaign Preview */}
        <div>
          <label class="create-campaign-field-label">Campaign Preview</label>
          <div class="publish-preview-card">
            <div class="publish-preview-card__banner">
              <span class="publish-preview-card__banner-badge">Scholarship</span>
              <div class="publish-preview-card__banner-content">
                <div class="publish-preview-card__banner-line"></div>
              </div>
            </div>
            <div class="publish-preview-card__body">
              <h4 class="publish-preview-card__title">Scholarship Fund for Batch 2024</h4>
              <p class="publish-preview-card__desc">
                Providing educational support for underprivileged and deserving students from the Davao region for the ne...
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div class="publish-actions">
          <button onClick={handlePublish} class="publish-btn--primary">
            <span>Publish Campaign</span>
            <Rocket size={18} />
          </button>
          <button onClick={() => navigate(-1)} class="publish-btn--secondary">
            Edit / Back
          </button>
        </div>

      </div>
    </div>
  );
}
