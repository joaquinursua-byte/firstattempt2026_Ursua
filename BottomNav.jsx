import { useLocation, useNavigate } from "@solidjs/router";
import { Home, Calendar, HeartHandshake, Bell, User } from "lucide-solid";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { label: "Home",          icon: Home,          path: "/home"          },
    { label: "Events",        icon: Calendar,       path: "/events"        },
    { label: "Donations",     icon: HeartHandshake, path: "/donations"     },
    { label: "Notifications", icon: Bell,           path: "/notifications", dot: true },
    { label: "Profile",       icon: User,           path: "/profile"       },
  ];

  return (
    <nav class="bottom-nav">
      {items.map((item) => {
        const active = location.pathname === item.path;
        return (
          <button
            onClick={() => navigate(item.path)}
            class={`bottom-nav__item${active ? " bottom-nav__item--active" : ""}`}
          >
            <span style="position:relative;display:flex;align-items:center;justify-content:center">
              <item.icon class="bottom-nav__icon" />
              {item.dot && (
                <span style="position:absolute;top:-2px;right:-3px;width:7px;height:7px;background:#EF4444;border-radius:9999px;border:1.5px solid #ffffff;display:block"></span>
              )}
            </span>
            <span class="bottom-nav__label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
