import React from "react";
import Typewriter from "typewriter-effect";
import profile from "../../config/profile.json";

function TypewriterIntro() {
  return (
    <Typewriter
      options={{
        strings: profile.home.typewriterStrings,
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        cursor: "|",
      }}
    />
  );
}

export default TypewriterIntro;
