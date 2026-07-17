import React from "react";
import Typewriter from "typewriter-effect";

function TypewriterIntro() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Software Engineer @ StubHub — GenAI Infra / Marketplace Ops",
          "Multi-Agent Systems, MCP, LangGraph, Claude Code",
          "Real-time Voice Agents • Hybrid RAG • LLM-as-judge",
          "Core Python Expert • C#/.NET 8 • Go",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        cursor: "|",
      }}
    />
  );
}

export default TypewriterIntro;
