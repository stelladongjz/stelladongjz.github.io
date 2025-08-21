import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "UX/UI Designer",
          "Human-Computer Interaction Researcher",
          "PhD Candidate",
          "Design Systems Specialist",
          "User Experience Researcher",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
