import React, { useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import "./Timeline.css";
import drdoLogo from "../../Assets/logos/drdo.png";
import liverampLogo from "../../Assets/logos/liveramp.webp";
import skilletLogo from "../../Assets/logos/skillet.png";

const BRANDFETCH = "?c=1bfwsmEH20zzEfSNTed";
const bf = (domain, kind = "fallback") =>
  kind === "symbol"
    ? `https://cdn.brandfetch.io/${domain}/symbol/theme/dark/w/400/h/400${BRANDFETCH}`
    : `https://cdn.brandfetch.io/${domain}/fallback/lettermark/theme/dark/h/256/w/256/icon${BRANDFETCH}`;

const EVENTS = [
  {
    id: "stubhub",
    lane: "work",
    company: "StubHub Holdings, Inc.",
    title: "Sr. SWE — GenAI Infra / Marketplace Ops",
    location: "New York, NY",
    start: "2026-01",
    end: null,
    logo: bf("stubhub.com"),
    color: "#a855f7",
  },
  {
    id: "liveramp",
    lane: "work",
    company: "LiveRamp Holdings, Inc.",
    title: "Sr. SWE — GenAI & Identity",
    location: "New York, NY",
    start: "2023-08",
    end: "2025-12",
    logo: liverampLogo,
    color: "#8b5cf6",
  },
  {
    id: "bloomberg",
    lane: "work",
    company: "Bloomberg LP",
    title: "Sr. SWE — Post Trade",
    location: "New York, NY",
    start: "2023-01",
    end: "2023-07",
    logo: bf("bloomberg.com"),
    color: "#f59e0b",
  },
  {
    id: "deshaw",
    lane: "work",
    company: "D. E. Shaw & Co.",
    title: "Tech Lead — Trading Infra",
    location: "New York, NY",
    start: "2016-06",
    end: "2021-08",
    logo: bf("deshaw.com"),
    color: "#7c3aed",
  },
  {
    id: "drdo",
    lane: "work",
    company: "DRDO",
    title: "Research Associate — CV",
    location: "New Delhi, India",
    start: "2015-05",
    end: "2016-05",
    logo: drdoLogo,
    color: "#ef4444",
  },
  {
    id: "nyu",
    lane: "edu",
    company: "NYU Courant",
    title: "M.S. Computer Science",
    location: "New York, NY",
    start: "2021-09",
    end: "2023-05",
    logo: bf("nyu.edu"),
    color: "#d946ef",
  },
  {
    id: "dtu",
    lane: "edu",
    company: "Delhi Technological University",
    title: "B.Tech Math & Computing",
    location: "New Delhi, India",
    start: "2012-08",
    end: "2016-05",
    logo: bf("dtu.ac.in"),
    color: "#c026d3",
  },
  {
    id: "citi",
    lane: "side",
    company: "Citi",
    title: "SWE Intern — Robothon",
    location: "New York, NY",
    start: "2023-06",
    end: "2023-08",
    logo: bf("citi.com"),
    color: "#0ea5e9",
  },
  {
    id: "skillet",
    lane: "side",
    company: "skillet.ai",
    title: "Founding Engineer (Intern)",
    location: "New York, NY",
    start: "2022-09",
    end: "2023-05",
    logo: skilletLogo,
    color: "#10b981",
  },
  {
    id: "nasa",
    lane: "side",
    company: "NASA",
    title: "Cloud Data Eng Intern",
    location: "New York, NY",
    start: "2022-05",
    end: "2022-08",
    logo: bf("nasa.gov"),
    color: "#0b3d91",
  },
  {
    id: "pycon",
    lane: "side",
    kind: "point",
    company: "PyCon India 2020",
    title: "Speaker — HPC in Python",
    location: "Virtual",
    start: "2020-10",
    end: "2020-10",
    logo: bf("python.org"),
    color: "#facc15",
  },
];

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

const fmtRange = (start, end) => {
  const [sy, sm] = start.split("-").map(Number);
  const s = `${MONTH_NAMES[sm - 1]} ${sy}`;
  if (!end) return `${s} – Present`;
  const [ey, em] = end.split("-").map(Number);
  const e = `${MONTH_NAMES[em - 1]} ${ey}`;
  return s === e ? s : `${s} – ${e}`;
};

const fmtDuration = (start, end) => {
  const months =
    (end ? toMonth(end) : toMonth("2026-07")) - toMonth(start) + 1;
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

function Timeline() {
  const [selected, setSelected] = useState(null);

  const layout = useMemo(() => {
    const starts = EVENTS.map((e) => toMonth(e.start));
    const ends = EVENTS.map((e) =>
      e.end ? toMonth(e.end) : toMonth("2026-07")
    );
    // Add 3-month buffer both sides so first/last bars breathe
    const min = Math.min(...starts) - 3;
    const max = Math.max(...ends) + 6;
    const span = max - min;

    const pct = (start, end) => {
      const s = toMonth(start);
      const e = end ? toMonth(end) : toMonth("2026-07");
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
                      <img
                        src={ev.logo}
                        alt=""
                        className="gantt-bar-logo"
                      />
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
          .map((ev) => (
            <li key={ev.id} className="tl-item">
              <div
                className="tl-marker"
                style={{ borderColor: ev.color, background: `${ev.color}22` }}
              >
                <img src={ev.logo} alt="" className="tl-marker-logo" />
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
          ))}
      </ol>

      {selected &&
        (() => {
          const ev = EVENTS.find((e) => e.id === selected);
          if (!ev) return null;
          return (
            <div className="gantt-detail">
              <img
                src={ev.logo}
                alt=""
                className="gantt-detail-logo"
                style={{ borderColor: ev.color }}
              />
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
