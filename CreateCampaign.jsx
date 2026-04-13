import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { ChevronLeft, Upload, ArrowRight, X } from "lucide-solid";

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [step, setStep] = createSignal(1);
  const [imagePreview, setImagePreview] = createSignal(null);

  const categories = ["Education", "Calamity Relief", "Sports", "Infrastructure", "Alumni Events"];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div class="create-campaign-page">

      {/* Header */}
      <div class="create-campaign-header">
        <div class="create-campaign-header__top">
          <button onClick={() => navigate(-1)} class="create-campaign-header__back">
            <ChevronLeft size={24} />
          </button>
          <h1 class="create-campaign-header__title">Create Campaign/Donation</h1>
        </div>
        <div class="create-campaign-progress">
          <div class="create-campaign-progress__seg" style={`width:${step() >= 1 ? "50%" : "0"}`}></div>
          <div class="create-campaign-progress__seg" style={`width:${step() >= 2 ? "50%" : "0"}`}></div>
        </div>
      </div>

      <div class="create-campaign-body">

        {/* Campaign Title */}
        <div>
          <label class="create-campaign-field-label">Campaign Title</label>
          <input
            type="text"
            placeholder="e.g., Scholarship Fund for Batch 2024"
            class="create-campaign-input"
          />
          <p class="create-campaign-hint">Make it catchy and descriptive to attract more donors.</p>
        </div>

        {/* Category */}
        <div class="create-campaign-select-wrap">
          <select class="create-campaign-select">
            <option value="" disabled selected>Select a category</option>
            {categories.map((cat) => <option value={cat}>{cat}</option>)}
          </select>
          <div class="create-campaign-select-icon">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Full Story */}
        <div>
          <label class="create-campaign-field-label">Full Story / Details</label>
          <textarea
            rows="6"
            placeholder="Share why this campaign is important. Tell your story..."
            class="create-campaign-textarea"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label class="create-campaign-field-label">Campaign Image / Banner</label>
          <div class="create-campaign-upload">
            {imagePreview() ? (
              <div class="create-campaign-upload__preview">
                <img src={imagePreview()} alt="Preview" />
                <button onClick={() => setImagePreview(null)} class="create-campaign-upload__remove">
                  <X size={16} />
                </button>
              </div>
            ) : (
              <>
                <div class="create-campaign-upload__icon-wrap">
                  <Upload size={20} />
                </div>
                <p class="create-campaign-upload__label">Upload Header Image</p>
                <p class="create-campaign-upload__hint">JPEG, PNG or JPG (Recommended: 1200×630)</p>
                <input
                  type="file"
                  accept="image/*"
                  style="position:absolute;inset:0;opacity:0;cursor:pointer"
                  onInput={handleImageUpload}
                />
              </>
            )}
          </div>
        </div>

        {/* Next Step */}
        <button
          onClick={() => navigate("/publish-campaign")}
          class="create-campaign-next-btn"
        >
          <span>Next Step</span>
          <ArrowRight size={18} />
        </button>

      </div>
    </div>
  );
}
