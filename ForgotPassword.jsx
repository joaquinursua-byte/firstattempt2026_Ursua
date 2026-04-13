import { createSignal, Show } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { ArrowLeft, Mail, User, AtSign, Headphones, RefreshCcw } from "lucide-solid";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [method, setMethod] = createSignal("email");
  const [inputValue, setInputValue] = createSignal("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${inputValue()}!`);
    navigate("/");
  };

  return (
    <div class="forgot-page">

      <div class="forgot-card">

        {/* Back */}
        <button onClick={() => navigate("/")} class="forgot-back-btn">
          <ArrowLeft size={16} />
          <span>Back to Login</span>
        </button>

        {/* Header */}
        <div class="forgot-header">
          <div class="forgot-icon-wrap">
            <RefreshCcw size={20} />
          </div>
          <h1 class="forgot-heading">Forgot Password?</h1>
          <p class="forgot-description">
            Select a method to verify your identity and recover your account access.
          </p>
        </div>

        {/* Method Toggle */}
        <div class="forgot-tab-group">
          <button
            type="button"
            onClick={() => { setMethod("email"); setInputValue(""); }}
            class={`forgot-tab${method() === "email" ? " forgot-tab--active" : ""}`}
          >
            <Mail size={14} />
            <span>Email Address</span>
          </button>
          <button
            type="button"
            onClick={() => { setMethod("id"); setInputValue(""); }}
            class={`forgot-tab${method() === "id" ? " forgot-tab--active" : ""}`}
          >
            <User size={14} />
            <span>Student ID</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} class="forgot-form">
          <div>
            <label class="forgot-label">
              {method() === "email" ? "School Email Address" : "Student ID Number"}
            </label>
            <div class="forgot-input-wrap">
              <span class="forgot-input-icon">
                <Show when={method() === "email"} fallback={<User size={16} />}>
                  <AtSign size={16} />
                </Show>
              </span>
              <input
                type={method() === "email" ? "email" : "text"}
                placeholder={method() === "email" ? "e.g. student@university.edu.ph" : "e.g. 202112345"}
                value={inputValue()}
                onInput={(e) => setInputValue(e.target.value)}
                class="forgot-input"
                required
              />
            </div>
            <p class="forgot-hint">
              We'll send a password reset link to this{" "}
              {method() === "email" ? "address" : "ID's registered email"}.
            </p>
          </div>
          <button type="submit" class="forgot-submit">Continue</button>
        </form>

        {/* Support */}
        <div class="forgot-support">
          <p class="forgot-support-text">Can't access your email or don't know your ID?</p>
          <button class="forgot-support-btn">
            <Headphones size={14} />
            <span>Contact Support</span>
          </button>
        </div>

      </div>

      <p class="forgot-copyright">© 2026 ADDU alumni. All rights reserved.</p>

    </div>
  );
}
