import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
  BackgroundVariant,
  Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./Timeline.css";

// Custom Node Component
const TimelineNode = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    // Add haptic feedback on supported devices
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "work":
        return "💼";
      case "education":
        return "🎓";
      case "achievement":
        return "🏆";
      default:
        return "📍";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return "#a855f7";
      case "education":
        return "#d946ef";
      case "achievement":
        return "#f59e0b";
      default:
        return "#6b7280";
    }
  };

  return (
    <div
      className={`timeline-flow-node ${isExpanded ? "expanded" : ""}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${data.title} at ${data.company}`}
      aria-expanded={isExpanded}
    >
      <div className="timeline-flow-content">
        <div
          className="timeline-flow-icon"
          style={{ backgroundColor: getTypeColor(data.type) }}
          aria-hidden="true"
        >
          {data.icon.startsWith("http") ? (
            <img
              src={data.icon}
              alt="Timeline icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          ) : (
            data.icon
          )}
        </div>

        <div className="timeline-flow-card">
          <div className="timeline-flow-header">
            <div
              className="timeline-flow-year"
              aria-label={`Year: ${data.year}`}
            >
              {data.year}
            </div>
            <div
              className="timeline-flow-type"
              aria-label={`Type: ${data.type}`}
            >
              {getTypeIcon(data.type)}{" "}
              {data.type.charAt(0).toUpperCase() + data.type.slice(1)}
            </div>
          </div>

          <h3 className="timeline-flow-title">{data.title}</h3>
          <h4 className="timeline-flow-company">{data.company}</h4>
          <p className="timeline-flow-location">📍 {data.location}</p>

          {isExpanded && (
            <div className="timeline-flow-expanded">
              <p className="timeline-flow-description">{data.description}</p>
              <div
                className="timeline-flow-skills"
                role="list"
                aria-label="Skills"
              >
                {data.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="timeline-flow-skill"
                    role="listitem"
                    aria-label={`Skill: ${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const nodeTypes = {
  timelineNode: TimelineNode,
};

function Timeline() {
  const timelineData = [
    {
      id: 1,
      year: "2024 - Present",
      type: "work",
      title: "Senior Software Engineer",
      company: "LiveRamp Holdings, Inc.",
      location: "New York, NY",
      description: "Backend and GenAI",
      skills: [
        "GenAI",
        "RAG",
        "Kubernetes",
        "GCP",
        "SingleStore",
        "Python",
        "Golang",
      ],
      icon: "https://cdn.brandfetch.io/arbor.io/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed",
      color: "#a855f7",
    },
    {
      id: 2,
      year: "2024",
      type: "work",
      title: "Senior Software Engineer",
      company: "BloomBerg LP",
      location: "New York, NY",
      description: "Trading Infra and Market Data",
      skills: ["Kubernetes", "Python", "C/C++", "React"],
      icon: "https://data.bloomberglp.com/company/sites/51/2019/08/og-image-generic-lp.png",
      color: "#a855f7",
    },
    {
      id: 3,
      year: "2023",
      type: "education",
      title: "M.S. in Computer Science",
      company: "New York University (Courant)",
      location: "New York, NY",
      description: "ML/AI",
      skills: ["Algorithms", "Distributed Systems", "ML", "AI", "DL"],
      icon: "https://yt3.ggpht.com/-RZYi5isxH_M/AAAAAAAAAAI/AAAAAAAAAAA/rmWpoe2qZzI/s900-c-k-no/photo.jpg",
      color: "#d946ef",
    },
    {
      id: 4,
      year: "2023",
      type: "work",
      title: "Founding Engineer",
      company: "skillet.ai",
      location: "San Francisco, CA",
      description: "DeFi and NFT Marketplace",
      skills: ["Ethereum", "Smart Contracts", "Decentralized Finance"],
      icon: "https://uploads-ssl.webflow.com/63823d9415bbb64cd877f3ce/63d18fbc316c63162855c2d0_Frame%201.png",
      color: "#d946ef",
    },
    {
      id: 5,
      year: "2022",
      type: "work",
      title: "Research Intern",
      company: "NASA",
      location: "California, USA",
      description: "Peta-Byte scale Data Engineering using Zarr and Dask",
      skills: [
        "Research",
        "Algorithms",
        "Space Systems",
        "Data Engineering",
        "AWS",
      ],
      icon: "https://e7.pngegg.com/pngimages/28/842/png-clipart-logo-nasa-insignia-design-brand-nasa-miscellaneous-blue.png",
      color: "#d946ef",
    },
    {
      id: 6,
      year: "2016 - 2021",
      type: "work",
      title: "Tech Lead",
      company: "D. E. Shaw & Co.",
      location: "New York, NY",
      description: "Trading Infrastructure",
      skills: ["Python", "Trading Systems", "Leadership", "Serialization"],
      icon: "https://media.licdn.com/dms/image/v2/D5622AQEmnR_mX_RsZQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1720354826664?e=2147483647&v=beta&t=K6q76GPfKW-jhw5k9S_yRQeKIipWtQNxmtbLwF73V7o",
      color: "#a855f7",
    },
    {
      id: 7,
      year: "2020",
      type: "achievement",
      title: "PyCon India 2020 Speaker",
      company: "Python Community",
      location: "Virtual",
      description: "National Talk on HPC in Python/C++",
      skills: ["Public Speaking", "Python", "Parallel Computing", "Community"],
      icon: "https://www.citypng.com/public/uploads/preview/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png",
      color: "#d946ef",
    },
    {
      id: 8,
      year: "2015 - 2016",
      type: "work",
      title: "Research Associate",
      company: "DRDO (Defence Research and Development Organisation)",
      location: "New Delhi, India",
      description: "Object Tracking and Computer Vision Research",
      skills: ["ML", "AI", "CV", "Research", "Publications"],
      icon: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Defence_Research_and_Development_Organisation.svg/1200px-Defence_Research_and_Development_Organisation.svg.png",
      color: "#a855f7",
    },
    {
      id: 9,
      year: "2012 - 2016",
      type: "education",
      title: "Bachelor of Technology",
      company: "Delhi Technological University (DTU)",
      location: "New Delhi, India",
      description: "CS and Applied Mathematics",
      skills: ["CS", "Applied Mathematics", "Algorithms"],
      icon: "https://upload.wikimedia.org/wikipedia/en/b/b5/DTU%2C_Delhi_official_logo.png",
      color: "#d946ef",
    },
  ];

  // Convert timeline data to React Flow nodes and edges
  const createNodesAndEdges = useCallback(() => {
    const nodes = timelineData.map((item, index) => ({
      id: item.id.toString(),
      type: "timelineNode",
      position: {
        x: index * 380, // Single row with horizontal spacing
        y: 0, // All at the same vertical level
      },
      data: item,
      draggable: true,
    }));

    const edges = [];
    for (let i = 0; i < timelineData.length - 1; i++) {
      edges.push({
        id: `e${timelineData[i].id}-${timelineData[i + 1].id}`,
        source: timelineData[i].id.toString(),
        target: timelineData[i + 1].id.toString(),
        animated: true,
        style: {
          stroke: "#a855f7",
          strokeWidth: 3,
          filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))",
        },
        type: "smoothstep",
        markerEnd: {
          type: "arrowclosed",
          color: "#d946ef",
          width: 25,
          height: 25,
        },
        label: "→",
        labelStyle: {
          fontSize: "16px",
          fontWeight: "bold",
          color: "#ffffff",
          background: "rgba(168, 85, 247, 0.8)",
          padding: "4px 8px",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
        labelBgStyle: {
          fill: "transparent",
        },
      });
    }

    return { nodes, edges };
  }, []);

  const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <Container fluid className="timeline-section" id="timeline">
      <div className="timeline-header">
        <h2 className="timeline-title">
          Professional <strong className="purple">Journey</strong>
        </h2>
        <p className="timeline-subtitle">
          A comprehensive overview of my career milestones and achievements
        </p>
      </div>

      <div className="timeline-flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="top-right"
          style={{
            background: "transparent",
          }}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1}
            color="#a855f7"
          />
          <Controls
            style={{
              button: {
                backgroundColor: "#1a1a1a",
                border: "1px solid #a855f7",
                color: "#ffffff",
              },
            }}
          />
          <Panel position="bottom-center">
            <div className="timeline-interaction-hint">
              <p>
                Click on nodes to expand details • Drag to rearrange • Use
                controls to navigate
              </p>
            </div>
          </Panel>
        </ReactFlow>
      </div>
    </Container>
  );
}

export default Timeline;
