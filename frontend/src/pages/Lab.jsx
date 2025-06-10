// client/src/pages/Lab.js
import React from "react";

const Lab = () => {
  return (
    <section
      id="lab"
      className="flex flex-col justify-center items-center bg-[#151229] pt-10 min-h-screen pr-10 mx-auto"
    >
      <span className="text-gray-500 text-xl font-bold tracking-tight">
        &lt;Lab/&gt;
      </span>
      <p className="text-gray-300 text-4xl font-semibold mt-4">
        Click for Code Link.
      </p>
      <div className="grid mt-20 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Add lab experiments or links here */}
        <div className="bg-[#100e17] rounded shadow hover:shadow-lg transition p-4 m-8">
          <h3 className="text-cyan-400 mb-2 font-semibold">Website</h3>
          <a
            href="https://github.com/Anis-Dangol/HTML-Landing-Pages-Project"
            className="text-gray-400 text-sm hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML Landing Pages Project
          </a>
          <br />
          <a
            href="https://github.com/Anis-Dangol/Music-Player-App"
            className="text-gray-400 text-sm hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Music Player App
          </a>
        </div>

        <div className="bg-[#100e17] rounded shadow hover:shadow-lg transition p-4 m-8">
          <h3 className="text-cyan-400 mb-2 font-semibold">Games</h3>
          <a
            href="https://github.com/Anis-Dangol/Tic-Tac-Toe"
            className="text-gray-400 text-sm hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Endless-Tic Tac Toe
          </a>
        </div>

        <div className="bg-[#100e17] rounded shadow hover:shadow-lg transition p-4 m-8">
          <h3 className="text-cyan-400 mb-2 font-semibold">Videos</h3>
          <a
            href="https://www.youtube.com/watch?v=EQ8XEN0qs4Q&ab_channel=AnishDangol"
            className="text-gray-400 text-sm hover:text-[#5918df]"
          >
            By My Side - AMV
          </a>
          <br />
          <a
            href="https://www.youtube.com/watch?v=Ga_B8W8gwC4&ab_channel=AnishDangol"
            className="text-gray-400 text-sm hover:text-[#5918df]"
          >
            Where We Started - AMV
          </a>
        </div>
      </div>
      <div className="grid mt-8 gap-8 sm:grid-cols-2 md:grid-cols-1">
        <div className="bg-[#100e17] rounded shadow hover:shadow-lg transition p-4 m-8">
          <h3 className="text-cyan-400 mb-2 font-semibold">Random</h3>
          <a
            href="https://github.com/Anis-Dangol/50-Projects"
            className="text-gray-400 text-sm hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            50 - Small Project (HTML, CSS, JS)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Lab;
