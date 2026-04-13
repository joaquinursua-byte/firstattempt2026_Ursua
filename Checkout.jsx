import { createSignal, For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { ChevronLeft, ShieldCheck, CreditCard, Smartphone, Lock } from "lucide-solid";

export default function Checkout() {
  const navigate = useNavigate();

  const campaign = {
    title: "Scholarship Fund 2024",
    subtitle: "CAMPAIGN DONATION",
    image: "https://i.pravatar.cc/400?img=11",
  };

  const [selectedAmount, setSelectedAmount] = createSignal(1000);
  const [customAmount, setCustomAmount] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [isAnonymous, setIsAnonymous] = createSignal(false);
  const [paymentMethod, setPaymentMethod] = createSignal("GCash");
  const [message, setMessage] = createSignal("");

  const presetAmounts = [500, 1000, 5000];
  const paymentOptions = [
    { id: "GCash", icon: Smartphone, label: "GCash" },
    { id: "Maya",  icon: Smartphone, label: "Maya"  },
    { id: "Card",  icon: CreditCard, label: "Credit / Debit Card" },
  ];

  const handleAmountSelect = (amount) => { setSelectedAmount(amount); setCustomAmount(""); };
  const handleCustomAmount = (e) => { setCustomAmount(e.target.value); setSelectedAmount(null); };

  const handleSubmit = (e) => {
    e.preventDefault();
    const final = customAmount() || selectedAmount();
    alert(`Successfully donated ₱${final} via ${paymentMethod()}!`);
    navigate("/home");
  };

  const canSubmit = () => selectedAmount() || customAmount();

  return (
    <div class="checkout-page">

      {/* Header */}
      <div class="checkout-header">
        <button onClick={() => navigate(-1)} class="checkout-header__back">
          <ChevronLeft size={20} />
        </button>
        <h1 class="checkout-header__title">Secure Checkout</h1>
        <div style="width:32px"></div>
      </div>

      <form onSubmit={handleSubmit} class="checkout-form">

        {/* Campaign Summary */}
        <div class="checkout-campaign-card">
          <div class="checkout-campaign-card__img">
            <img src={campaign.image} alt="Campaign" />
          </div>
          <div>
            <p class="checkout-campaign-card__title">{campaign.title}</p>
            <p class="checkout-campaign-card__subtitle">{campaign.subtitle}</p>
          </div>
        </div>

        {/* Amount */}
        <div>
          <p class="checkout-section-title">Select Amount</p>
          <div class="checkout-amounts">
            <For each={presetAmounts}>
              {(amount) => (
                <button
                  type="button"
                  onClick={() => handleAmountSelect(amount)}
                  class={`checkout-amount-btn${selectedAmount() === amount && !customAmount() ? " checkout-amount-btn--selected" : ""}`}
                >
                  ₱{amount.toLocaleString()}
                </button>
              )}
            </For>
          </div>
          <div class="checkout-custom-wrap">
            <span class="checkout-custom-prefix">₱</span>
            <input
              type="number"
              placeholder="Custom Amount"
              value={customAmount()}
              onInput={handleCustomAmount}
              class={`checkout-custom-input${customAmount() ? " checkout-custom-input--active" : ""}`}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <p class="checkout-section-title">Email Receipt</p>
          <input
            type="email"
            placeholder="Email Address"
            value={email()}
            onInput={(e) => setEmail(e.target.value)}
            class="checkout-email-input"
          />
          <p class="checkout-input-hint">Required for your digital donation receipt.</p>
        </div>

        {/* Anonymous */}
        <div class="checkout-anon-row">
          <div>
            <p class="checkout-anon-label">Donate Anonymously</p>
            <p class="checkout-anon-hint">Your name won't be shown publicly.</p>
          </div>
          <button
            type="button"
            onClick={() => setIsAnonymous(!isAnonymous())}
            class={`toggle-switch${isAnonymous() ? " toggle-switch--on" : " toggle-switch--off"}`}
          >
            <div class={`toggle-switch__thumb${isAnonymous() ? " toggle-switch__thumb--on" : " toggle-switch__thumb--off"}`}></div>
          </button>
        </div>

        {/* Payment Method */}
        <div>
          <div class="checkout-payment-header">
            <p class="checkout-section-title" style="margin-bottom:0">Payment Method</p>
            <span class="checkout-payment-secure">
              <ShieldCheck size={12} /> Verified & Secure
            </span>
          </div>
          <div class="checkout-payment-options">
            <For each={paymentOptions}>
              {(option) => (
                <button
                  type="button"
                  onClick={() => setPaymentMethod(option.id)}
                  class={`checkout-payment-option${paymentMethod() === option.id ? " checkout-payment-option--selected" : ""}`}
                >
                  <div class="checkout-payment-option__left">
                    <option.icon size={18} style={paymentMethod() === option.id ? "color:#2D82FF" : "color:#9CA3AF"} />
                    <span class={`checkout-payment-option__label${paymentMethod() === option.id ? " checkout-payment-option__label--selected" : ""}`}>
                      {option.label}
                    </span>
                  </div>
                  <div class={`checkout-payment-radio${paymentMethod() === option.id ? " checkout-payment-radio--selected" : ""}`}>
                    {paymentMethod() === option.id && <div class="checkout-payment-radio__dot"></div>}
                  </div>
                </button>
              )}
            </For>
          </div>
          <div class="checkout-payment-icons">
            <Lock size={16} />
            <CreditCard size={16} />
          </div>
        </div>

        {/* Message */}
        <div>
          <p class="checkout-section-title">
            Message for Receivers <span style="font-weight:400;color:#9CA3AF">(Optional)</span>
          </p>
          <textarea
            rows="3"
            placeholder="Leave a word of encouragement..."
            value={message()}
            onInput={(e) => setMessage(e.target.value)}
            class="checkout-message-input"
          ></textarea>
        </div>

        {/* Fixed Submit */}
        <div class="checkout-submit-fixed">
          <button
            type="submit"
            disabled={!canSubmit()}
            class={`checkout-submit-btn${canSubmit() ? " checkout-submit-btn--active" : " checkout-submit-btn--disabled"}`}
          >
            Complete Donation
          </button>
        </div>

      </form>
    </div>
  );
}
