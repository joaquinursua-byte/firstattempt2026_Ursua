import { createSignal, For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { ChevronLeft, ChevronRight } from "lucide-solid";
import BottomNav from "../components/BottomNav";

export default function CertificateVault() {
  const navigate = useNavigate();
  const [autoShare, setAutoShare] = createSignal(true);

  const certificates = [
    { id: 1, title: "Library Fund 2024",    amount: "$500.00",    date: "Oct 12, 2024", previewBg: "linear-gradient(135deg,#E8F2E3,#CDE0C4)", verified: true },
    { id: 2, title: "Science Lab Expansion",amount: "$1,200.00",  date: "Aug 05, 2024", previewBg: "linear-gradient(135deg,#E0F2FE,#BAE6FD)", verified: true },
    { id: 3, title: "Annual Sports Meet",   amount: "$250.00",    date: "May 20, 2024", previewBg: "linear-gradient(135deg,#FEF3C7,#FDE68A)", verified: true },
  ];

  return (
    <div class="cert-vault-page">

      {/* Header */}
      <div class="cert-vault-header">
        <div class="cert-vault-header__top">
          <button onClick={() => navigate(-1)} class="page-back-btn">
            <ChevronLeft size={22} />
            <span>Profile</span>
          </button>
          <span class="cert-vault-header__title">Certificate Vault</span>
          <div style="width:64px"></div>
        </div>
        <h2 class="cert-vault-header__heading">Your Impact</h2>
      </div>

      <div class="cert-vault-body">

        {/* Auto-share Toggle */}
        <div class="cert-autoshare-card">
          <div>
            <h3 class="cert-autoshare-card__title">Auto-share to Profile</h3>
            <p class="cert-autoshare-card__desc">
              Allow other alumni to see your contributions and inspire the community through your generosity.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setAutoShare(!autoShare())}
            class={`toggle-switch${autoShare() ? " toggle-switch--on" : " toggle-switch--off"}`}
            style="margin-top:4px"
          >
            <div class={`toggle-switch__thumb${autoShare() ? " toggle-switch__thumb--on" : " toggle-switch__thumb--off"}`}></div>
          </button>
        </div>

        {/* Certificates */}
        <div>
          <div class="cert-list-header">
            <span class="cert-list-label">Recent Certificates ({certificates.length})</span>
            <ChevronRight size={12} style="color:#D1D5DB" />
          </div>
          <div class="cert-list">
            <For each={certificates}>
              {(cert) => (
                <div class="cert-card">
                  <div class="cert-card__preview" style={`background:${cert.previewBg}`}>
                    <div class="cert-card__preview-inner">
                      <span class="cert-card__preview-title">Certificate</span>
                      <div class="cert-card__preview-divider"></div>
                      <span class="cert-card__preview-label">In recognition of</span>
                    </div>
                    <span class="cert-card__verified-badge">VERIFIED</span>
                  </div>
                  <div class="cert-card__details">
                    <div>
                      <h4 class="cert-card__title">{cert.title}</h4>
                      <div class="cert-card__meta">
                        <span class="cert-card__amount">{cert.amount}</span>
                        <span class="cert-card__date">{cert.date}</span>
                      </div>
                    </div>
                    <ChevronRight size={18} style="color:#D1D5DB" />
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

      </div>

      <BottomNav />
    </div>
  );
}
