import { createSignal, Show } from "solid-js";
import { useNavigate, useSearchParams } from "@solidjs/router";
import { Eye, EyeOff, LogIn, CheckCircle2 } from "lucide-solid";

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isLoginView, setIsLoginView] = createSignal(true);
  const [showPassword, setShowPassword] = createSignal(false);
  const [showConfirmPassword, setShowConfirmPassword] = createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/role");
  };

  return (
    <div class="login-page">

      <Show when={searchParams.reset === "success"}>
        <div class="login-banner">
          <CheckCircle2 size={14} />
          Password Successfully Reset
        </div>
      </Show>

      <div class="login-card">

        {/* Logo */}
        <div class="login-logo">
          <img
            src="https://www.addu.edu.ph/wp-content/uploads/2015/05/00-OFFICIAL-AdDU-Seal-500px-300x300.jpg"
            alt="AdDU Seal"
          />
        </div>
        <h1 class="login-heading">Welcome, Blue Knight</h1>
        <p class="login-subheading">AdDU Alumni Portal</p>

        {/* Form */}
        <form onSubmit={handleSubmit} class="login-form">

          <div class="login-field">
            <label class="login-label">Alumni ID or Email</label>
            <input
              type="text"
              placeholder="Enter your ID or email"
              class="login-input"
              required
            />
          </div>

          <div class="login-field">
            <label class="login-label">Password</label>
            <div class="login-input-wrap">
              <input
                type={showPassword() ? "text" : "password"}
                placeholder="Enter your password"
                class="login-input login-input--password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword())}
                class="login-eye-btn"
              >
                {showPassword() ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <Show when={isLoginView()}>
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                class="login-forgot-link"
              >
                Forgot Password?
              </button>
            </Show>
          </div>

          <Show when={!isLoginView()}>
            <div class="login-field">
              <label class="login-label">Confirm Password</label>
              <div class="login-input-wrap">
                <input
                  type={showConfirmPassword() ? "text" : "password"}
                  placeholder="Enter your password"
                  class="login-input login-input--password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword())}
                  class="login-eye-btn"
                >
                  {showConfirmPassword() ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </Show>

          <button type="submit" class="login-submit">
            <span>{isLoginView() ? "Log in" : "Sign up"}</span>
            <LogIn size={20} class={!isLoginView() ? "rotate-180" : ""} />
          </button>

        </form>

        {/* Footer */}
        <div class="login-footer">
          <button
            type="button"
            onClick={() => setIsLoginView(!isLoginView())}
            class="login-toggle-btn"
          >
            {isLoginView() ? "Don't have an account? " : "Already have an account? "}
            <strong>{isLoginView() ? "Sign Up" : "Log In"}</strong>
          </button>
          <p class="login-privacy">
            By {isLoginView() ? "logging in" : "signing up"}, you agree to the
            ADDU Alumni Data Privacy Policy and Terms of Service.
          </p>
        </div>

      </div>
    </div>
  );
}