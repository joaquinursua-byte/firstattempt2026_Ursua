import { For, createSignal, createMemo, Show } from "solid-js";
import { ChevronLeft, Filter, ChevronRight, Bookmark, Search, Clock, MapPin } from "lucide-solid";
import BottomNav from "../components/BottomNav";

export default function Events() {
  const [view, setView] = createSignal("list");
  const [searchQuery, setSearchQuery] = createSignal("");
  const [activeFilter, setActiveFilter] = createSignal("All");

  const categories = ["All", "Reunions", "Outreach", "Donations", "Sports"];

  const calendarDays = [
    { day: 29, faded: true }, { day: 30, faded: true },
    { day: 1 }, { day: 2, dots: ["event"] }, { day: 3 }, { day: 4 }, { day: 5 },
    { day: 6 }, { day: 7, dots: ["donation"] }, { day: 8, selected: true }, { day: 9 }, { day: 10 }, { day: 11, dots: ["outreach"] }, { day: 12 },
    { day: 13 }, { day: 14 }, { day: 15, dots: ["event", "donation"] }, { day: 16 }, { day: 17 }, { day: 18 }, { day: 19 },
    { day: 20 }, { day: 21 }, { day: 22 }, { day: 23 }, { day: 24 }, { day: 25, dots: ["outreach"] }, { day: 26 },
  ];

  const upcomingItems = [
    { id: 1, month: "OCT", day: "08", title: "Blue Knights Reach Out", desc: "Reach Out program for Barangay...", rsvp: true },
    { id: 2, month: "OCT", day: "11", title: "Davao River Cleanup",     desc: "Community service outreach at...", rsvp: false },
  ];

  const activityFeed = [
    { id: 1, text: "Manon Bannerman RSVP'd to the Networking Night event.", time: "2 hours ago" },
    { id: 2, text: "Alumni Board added a new outreach activity for Nov 2024.", time: "Yesterday" },
  ];

  const [events, setEvents] = createSignal([
    {
      id: 1, month: "OCT", day: "08",
      title: "Blue Knights Reach Out Program",
      time: "6:00 PM - 9:00 PM", location: "Barangay Vicente Hizon",
      description: "Reach Out program for Barangay...",
      type: "Outreach", attendees: 12, rsvp: false, saved: false,
    },
    {
      id: 2, month: "OCT", day: "12",
      title: "Coastal Clean-up Drive",
      time: "7:00 AM - 11:00 AM", location: "Times Beach, Matina",
      description: "Join Arrupe Volunteers in our monthly environmental stewardship activity. Bring your own water bottles!",
      type: "Outreach", attendees: 45, rsvp: false, saved: false,
    },
    {
      id: 3, month: "OCT", day: "15",
      title: "Alumni Homecoming Gala",
      time: "7:00 PM Onwards", location: "Martin Hall Auditorium",
      description: "A grand celebration for all ADDU graduates. Buffet dinner, live music, and special batch presentations.",
      type: "Reunions", attendees: 120, rsvp: false, saved: true,
    },
  ]);

  const filteredEvents = createMemo(() =>
    events().filter((e) => {
      const matchSearch = e.title.toLowerCase().includes(searchQuery().toLowerCase()) ||
                          e.description.toLowerCase().includes(searchQuery().toLowerCase());
      const matchFilter = activeFilter() === "All" || e.type === activeFilter();
      return matchSearch && matchFilter;
    })
  );

  const toggleRSVP = (id) => setEvents(events().map((e) => e.id === id ? { ...e, rsvp: !e.rsvp } : e));
  const toggleSave = (id) => setEvents(events().map((e) => e.id === id ? { ...e, saved: !e.saved } : e));

  return (
    <div class="events-page">

      {/* Header */}
      <div class="events-header">
        <div class="events-header__top">
          <button class="events-header__icon-btn"><ChevronLeft size={24} /></button>
          <h1 class="events-header__title">{view() === "calendar" ? "Events Calendar" : "All Events"}</h1>
          <button class="events-header__icon-btn"><Filter size={20} /></button>
        </div>

        <div class="events-view-toggle">
          <button
            class={`events-view-toggle__btn${view() === "calendar" ? " events-view-toggle__btn--active" : ""}`}
            onClick={() => setView("calendar")}
          >
            Calendar
          </button>
          <button
            class={`events-view-toggle__btn${view() === "list" ? " events-view-toggle__btn--active" : ""}`}
            onClick={() => setView("list")}
          >
            List View
          </button>
        </div>

        <Show when={view() === "list"}>
          <div class="events-search-wrap">
            <span class="events-search-icon"><Search size={20} /></span>
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery()}
              onInput={(e) => setSearchQuery(e.target.value)}
              class="events-search-input"
            />
          </div>
        </Show>
      </div>

      {/* LIST VIEW */}
      <Show when={view() === "list"}>
        <div class="events-filters">
          <div class="events-filter-scroll hide-scrollbar">
            <For each={categories}>
              {(cat) => (
                <button
                  onClick={() => setActiveFilter(cat)}
                  class={`events-filter-chip${activeFilter() === cat ? " events-filter-chip--active" : ""}`}
                >
                  {cat}
                </button>
              )}
            </For>
          </div>
        </div>

        <div class="events-list">
          <For each={filteredEvents()}>
            {(event) => (
              <div class="event-card">
                <button onClick={() => toggleSave(event.id)} class="event-card__save-btn">
                  <Bookmark
                    size={20}
                    style={event.saved ? "fill:#2D82FF;color:#2D82FF" : ""}
                  />
                </button>

                <div class="event-card__top">
                  <div class="event-card__date-block">
                    <span class="event-card__date-month">{event.month}</span>
                    <span class="event-card__date-day">{event.day}</span>
                  </div>
                  <div class="event-card__info">
                    <h3 class="event-card__title">{event.title}</h3>
                    <div class="event-card__meta">
                      <div class="event-card__meta-row">
                        <Clock size={14} style="flex-shrink:0" />
                        <span>{event.time}</span>
                      </div>
                      <div class="event-card__meta-row">
                        <MapPin size={14} style="flex-shrink:0" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p class="event-card__desc">{event.description}</p>

                <div class="event-card__bottom">
                  <div class="event-card__attendees">
                    <div class="event-card__avatar-stack">
                      <div class="event-card__avatar"><img src="https://i.pravatar.cc/100?img=11" alt="" /></div>
                      <div class="event-card__avatar"><img src="https://i.pravatar.cc/100?img=12" alt="" /></div>
                    </div>
                    <span class="event-card__attendee-count">+{event.attendees}</span>
                  </div>
                  <button
                    onClick={() => toggleRSVP(event.id)}
                    class={`event-card__rsvp-btn ${event.rsvp ? "event-card__rsvp-btn--going" : "event-card__rsvp-btn--default"}`}
                  >
                    {event.rsvp ? "Going ✓" : "RSVP"}
                  </button>
                </div>
              </div>
            )}
          </For>
        </div>
      </Show>

      {/* CALENDAR VIEW */}
      <Show when={view() === "calendar"}>
        <div class="events-calendar">

          <div class="events-calendar__header">
            <h2 class="events-calendar__month">October 2024</h2>
            <div class="events-calendar__nav">
              <button><ChevronLeft size={20} /></button>
              <button><ChevronRight size={20} /></button>
            </div>
          </div>

          <div class="events-calendar__grid-header" style="padding:0 16px;margin-bottom:8px">
            {["SUN","MON","TUE","WED","THU","FRI","SAT"].map((d) => (
              <div class="events-calendar__day-label">{d}</div>
            ))}
          </div>

          <div class="events-calendar__grid">
            <For each={calendarDays}>
              {(item) => (
                <div class="events-calendar__cell">
                  <button class={`events-calendar__day-btn${item.selected ? " events-calendar__day-btn--selected" : ""}${item.faded ? " events-calendar__day-btn--faded" : ""}`}>
                    {item.day}
                  </button>
                  {item.dots && (
                    <div class="events-calendar__dots">
                      <For each={item.dots}>
                        {(dot) => <span class={`events-calendar__dot events-calendar__dot--${dot}`}></span>}
                      </For>
                    </div>
                  )}
                </div>
              )}
            </For>
          </div>

          {/* Legend */}
          <div style="display:flex;gap:16px;padding:12px 24px;font-size:10px;font-weight:700;color:#6B7280;border-bottom:1px solid #F3F4F6">
            <span style="display:flex;align-items:center;gap:4px"><span class="events-calendar__dot events-calendar__dot--event" style="display:inline-block"></span> EVENTS</span>
            <span style="display:flex;align-items:center;gap:4px"><span class="events-calendar__dot events-calendar__dot--donation" style="display:inline-block"></span> DONATIONS</span>
            <span style="display:flex;align-items:center;gap:4px"><span class="events-calendar__dot events-calendar__dot--outreach" style="display:inline-block"></span> OUTREACH</span>
          </div>

        </div>

        {/* Upcoming This Week */}
        <div class="events-upcoming">
          <div class="events-upcoming__header">
            <h2 class="events-upcoming__title">Upcoming This Week</h2>
            <button class="events-upcoming__see-all">View All</button>
          </div>
          <For each={upcomingItems}>
            {(item) => (
              <div class="events-upcoming-card">
                <div class="events-upcoming-card__date">
                  <span class="events-upcoming-card__date-month">{item.month}</span>
                  <span class="events-upcoming-card__date-day">{item.day}</span>
                </div>
                <div class="events-upcoming-card__info">
                  <p class="events-upcoming-card__title">{item.title}</p>
                  <p class="events-upcoming-card__desc">{item.desc}</p>
                </div>
                {item.rsvp
                  ? <button class="events-upcoming-card__rsvp">RSVP</button>
                  : <button class="events-upcoming-card__view">View</button>
                }
              </div>
            )}
          </For>
        </div>

        {/* Activity Feed */}
        <div class="events-activity">
          <For each={activityFeed}>
            {(item) => (
              <div class="events-activity-item">
                <div class="events-activity-dot"></div>
                <div>
                  <p class="events-activity-text">{item.text}</p>
                  <p class="events-activity-time">{item.time}</p>
                </div>
              </div>
            )}
          </For>
        </div>
      </Show>

      <BottomNav />
    </div>
  );
}
