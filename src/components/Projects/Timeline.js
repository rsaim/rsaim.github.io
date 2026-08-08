import React, { useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import "./Timeline.css";
import profile from "../../config/profile.json";
import assetMap from "../../config/assetMap";

const EVENTS = profile.timeline;

const LANES = [
  { id: "work", label: "Full-time" },
  { id: "edu", label: "Education" },
  { id: "side", label: "Internships & Talks" },
];

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const toMonth = (s) => {
  const [y, m] = s.split("-").map(Number);
  return y * 12 + (m - 1);
};

// "Now", as a "YYYY-MM" string — computed once at module load rather than
// frozen as a literal, so ongoing-role duration/bar-width math never goes
// stale.
const nowMonthString = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
};
const NOW = nowMonthString();

const fmtRange = (start, end) => {
  const [sy, sm] = start.split("-").map(Number);
  const s = `${MONTH_NAMES[sm - 1]} ${sy}`;
  if (!end) return `${s} – Present`;
  const [ey, em] = end.split("-").map(Number);
  const e = `${MONTH_NAMES[em - 1]} ${ey}`;
  return s === e ? s : `${s} – ${e}`;
};

const fmtDuration = (start, end) => {
  const months = (end ? toMonth(end) : toMonth(NOW)) - toMonth(start) + 1;
  if (months < 12) return `${months} mo`;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return m === 0 ? `${y} yr${y > 1 ? "s" : ""}` : `${y}y ${m}m`;
};

const LANE_LABELS = {
  work: "Full-time",
  edu: "Education",
  side: "Internship / Talk",
};

// A timeline entry supplies either a `logoKey` (resolved against the bundled
// local images in assetMap.logos) or a `logoUrl` (an already-resolved CDN
// URL) — never both. Falls back to no logo if neither is present.
const resolveLogo = (ev) => ev.logoUrl || assetMap.logos[ev.logoKey] || undefined;

function Timeline() {
  const [selected, setSelected] = useState(null);

  const layout = useMemo(() => {
    const starts = EVENTS.map((e) => toMonth(e.start));
    const ends = EVENTS.map((e) => (e.end ? toMonth(e.end) : toMonth(NOW)));
    // Add 3-month buffer both sides so first/last bars breathe
    const min = Math.min(...starts) - 3;
    const max = Math.max(...ends) + 6;
    const span = max - min;

    const pct = (start, end) => {
      const s = toMonth(start);
      const e = end ? toMonth(end) : toMonth(NOW);
      return {
        left: ((s - min) / span) * 100,
        width: Math.max(((e - s) / span) * 100, 0.5),
      };
    };

    const startYear = Math.floor(min / 12);
    const endYear = Math.ceil(max / 12);
    const yearTicks = [];
    for (let y = startYear; y <= endYear; y++) {
      const pos = ((y * 12 - min) / span) * 100;
      if (pos >= 0 && pos <= 100) yearTicks.push({ year: y, pos });
    }

    return { pct, yearTicks };
  }, []);

  return (
    <Container fluid className="timeline-section" id="timeline">
      <div className="timeline-header">
        <h2 className="timeline-title">
          Career <strong className="purple">Timeline</strong>
        </h2>
        <p className="timeline-subtitle">
          Full-time • Education • Internships & Talks
          <br />
          <span className="timeline-hint">
            Bar length = tenure · click for details
          </span>
        </p>
      </div>

      <div className="gantt-scroll-wrap" data-scrollable="true">
        <div className="gantt-scroll-hint" aria-hidden="true">
          swipe →
        </div>
        <div className="gantt-scroll">
        <div className="gantt-viewport">
          <div className="gantt-axis">
            {layout.yearTicks.map((t) => (
              <div
                key={t.year}
                className="gantt-year"
                style={{ left: `${t.pos}%` }}
              >
                <span className="gantt-year-label">{t.year}</span>
                <span className="gantt-year-tick" />
              </div>
            ))}
          </div>

          {LANES.map((lane) => (
            <div key={lane.id} className="gantt-lane">
              <div className="gantt-lane-label">{lane.label}</div>
              <div className="gantt-lane-track">
                {layout.yearTicks.map((t) => (
                  <div
                    key={t.year}
                    className="gantt-gridline"
                    style={{ left: `${t.pos}%` }}
                  />
                ))}
                {EVENTS.filter((ev) => ev.lane === lane.id).map((ev) => {
                  const { left, width } = layout.pct(ev.start, ev.end);
                  const isPoint = ev.kind === "point";
                  const isNarrow = !isPoint && width < 10;
                  const isActive = selected === ev.id;
                  const logo = resolveLogo(ev);
                  return (
                    <button
                      key={ev.id}
                      className={`gantt-bar${
                        isPoint ? " gantt-bar--point" : ""
                      }${isNarrow ? " gantt-bar--narrow" : ""}${
                        isActive ? " gantt-bar--active" : ""
                      }`}
                      style={{
                        left: `${left}%`,
                        width: isPoint ? "auto" : `${width}%`,
                        background: `linear-gradient(135deg, ${ev.color}cc, ${ev.color}66)`,
                        borderColor: ev.color,
                      }}
                      onClick={() => setSelected(isActive ? null : ev.id)}
                      aria-label={`${ev.title} at ${ev.company}`}
                      title={`${ev.company} — ${ev.title} · ${fmtRange(
                        ev.start,
                        ev.end
                      )}`}
                    >
                      {logo && (
                        <img src={logo} alt="" className="gantt-bar-logo" />
                      )}
                      {!isPoint && !isNarrow && (
                        <span className="gantt-bar-text">
                          <span className="gantt-bar-title">
                            {ev.company}
                          </span>
                          <span className="gantt-bar-sub">{ev.title}</span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      <ol className="tl-vertical">
        {[...EVENTS]
          .sort((a, b) => toMonth(b.start) - toMonth(a.start))
          .map((ev) => {
            const logo = resolveLogo(ev);
            return (
              <li key={ev.id} className="tl-item">
                <div
                  className="tl-marker"
                  style={{ borderColor: ev.color, background: `${ev.color}22` }}
                >
                  {logo && <img src={logo} alt="" className="tl-marker-logo" />}
                </div>
                <div className="tl-body">
                  <span
                    className="tl-lane"
                    style={{ color: ev.color, borderColor: `${ev.color}55` }}
                  >
                    {LANE_LABELS[ev.lane]}
                  </span>
                  <h3 className="tl-title">{ev.title}</h3>
                  <div className="tl-company">{ev.company}</div>
                  <div className="tl-meta">
                    <span>{fmtRange(ev.start, ev.end)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{fmtDuration(ev.start, ev.end)}</span>
                  </div>
                </div>
              </li>
            );
          })}
      </ol>

      {selected &&
        (() => {
          const ev = EVENTS.find((e) => e.id === selected);
          if (!ev) return null;
          const logo = resolveLogo(ev);
          return (
            <div className="gantt-detail">
              {logo && (
                <img
                  src={logo}
                  alt=""
                  className="gantt-detail-logo"
                  style={{ borderColor: ev.color }}
                />
              )}
              <div className="gantt-detail-body">
                <h3 className="gantt-detail-title">{ev.title}</h3>
                <div className="gantt-detail-company">{ev.company}</div>
                <div className="gantt-detail-meta">
                  <span>{fmtRange(ev.start, ev.end)}</span>
                </div>
              </div>
              <button
                className="gantt-detail-close"
                onClick={() => setSelected(null)}
                aria-label="Close details"
              >
                ×
              </button>
            </div>
          );
        })()}
    </Container>
  );
}

export default Timeline;
