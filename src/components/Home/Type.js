import React from "react";
import Typewriter from "typewriter-effect";

function TypewriterIntro() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer focussed on Backend and GenAI systems",
          "Core Python Expert",
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
