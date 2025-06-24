import { useState, useEffect } from "react";

const words = ["build websites.", "develop games.", "design ui/ux.", "edit Videos.", "other things."];

const Start = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const cursorBlink = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
      },
      deleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="start"
      className="flex flex-col justify-center items-center min-h-screen p-6 py-20 px-6 max-w-5xl mx-auto"
    >
      {/* Section header */}
      <span className="text-gray-500 text-xl font-bold tracking-tight">
        &lt;Start/&gt;
      </span>
      {/* Introduction text */}
      <p className="text-gray-300 text-4xl font-semibold mt-4">
        Hi, my name is{" "}
        <span className="text-cyan-400 font-bold">Anish Dangol</span>
        <span>.</span> <br />
      </p>
      {/* Animated typewriter effect for skills */}
      <p className="text-gray-300 text-4xl font-semibold mt-4">
        I{" "}
        <span className="italic font-light font-handwriting">love coding </span>{" "}
        and {" "}
        <span
          className="glitch text-cyan-400 font-medium"
          style={{
            display: "inline-block",
            minWidth: `${Math.max(...words.map((w) => w.length))}ch`,
            whiteSpace: "pre",
          }}
        >
          {/* Show current word up to subIndex letters */}
          {words[index].substring(0, subIndex)}
          {/* Blinking cursor */}
          <span className="glitch text-cyan-400">{blink ? "|" : " "}</span>
        </span>
        <br />
      </p>
      {/* Footer text */}
      <span className="text-gray-500 pt-3 text-xl tracking-widest">
        Let me show U...
      </span>
    </section>
  );
};

export default Start;
