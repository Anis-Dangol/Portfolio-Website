import React, { useState, useEffect } from "react";

const words = ["websites", "games", "ui/ux", "things", "other"];

const Start = () => {
  const [index, setIndex] = useState(0); // Which word in list
  const [subIndex, setSubIndex] = useState(0); // How many letters of that word are shown
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    // blinking cursor toggle
    const cursorBlink = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), 1000); // pause before deleting
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
      <span className="text-gray-500 text-xl font-bold tracking-tight">
        &lt;Start/&gt;
      </span>
      <p className="text-gray-300 text-4xl font-semibold mt-4">
        Hi, my name is{" "}
        <span className="text-cyan-400 font-bold">Anish Dangol</span>{" "}
        <span>.</span> <br />
      </p>
      <p className="text-gray-300 text-4xl font-semibold mt-4">
        I{" "}
        <span className="italic font-light font-handwriting">edit videos </span>{" "}
        and develop{" "}
        <span
          className="glitch text-cyan-400 font-medium"
          style={{
            display: "inline-block",
            minWidth: `${Math.max(...words.map((w) => w.length))}ch`,
            whiteSpace: "pre",
          }}
        >
          {words[index].substring(0, subIndex)}
          <span className="glitch text-cyan-400">{blink ? "|" : " "}</span>
        </span>
        <br />
      </p>
      <span className="text-gray-500 pt-3 text-xl tracking-widest">
        Let me show U...
      </span>
    </section>
  );
};

export default Start;
