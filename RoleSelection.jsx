import { useNavigate } from "@solidjs/router";
import { GraduationCap, Shield, HelpCircle, ChevronRight } from "lucide-solid";

export default function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div class="role-page">
      <div class="role-inner">

        {/* Logo */}
        <div class="role-logo-wrap">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Ateneo_de_Davao_University_seal.svg/1200px-Ateneo_de_Davao_University_seal.svg.png"
            alt="AdDU Seal"
            onError={(e) => { e.target.src = "https://i.pravatar.cc/150?img=11"; }}
          />
        </div>
        <h1 class="role-heading">Access Your Portal</h1>
        <p class="role-subheading">Select your role to continue</p>

        {/* Role Cards */}
        <div class="role-cards">

          <button onClick={() => navigate("/home")} class="role-card">
            <div class="role-card__icon-wrap role-card__icon-wrap--alumni">
              <GraduationCap size={24} style="color:#0047AB" />
            </div>
            <div class="role-card__body">
              <h2 class="role-card__title">Alumni</h2>
              <p class="role-card__desc">Add your donations and explore network</p>
            </div>
            <ChevronRight size={20} class="role-card__chevron" />
          </button>

          <button onClick={() => navigate("/admin")} class="role-card">
            <div class="role-card__icon-wrap role-card__icon-wrap--admin">
              <Shield size={22} style="color:#1E3A8A" fill="#1E3A8A" />
            </div>
            <div class="role-card__body">
              <h2 class="role-card__title">Administrator</h2>
              <p class="role-card__desc">Access portal management tools</p>
            </div>
            <ChevronRight size={20} class="role-card__chevron" />
          </button>

        </div>

        {/* Help */}
        <button class="role-help-btn">
          <HelpCircle size={16} />
          <span>Need help or support?</span>
        </button>

        {/* Footer */}
        <div class="role-footer">
          <p class="role-footer__brand">Ateneo de Davao University</p>
          <div class="role-footer__links">
            <a href="#">Data Privacy</a>
            <div class="role-footer__dot"></div>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </div>
  );
}
