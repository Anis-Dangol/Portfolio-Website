const Lab = () => {
  return (
    <section
      id="lab"
      className="flex flex-col justify-center items-center bg-[#151229] pt-10 min-h-screen px-4 md:px-6 lg:px-10 mx-auto"
    >
      <span className="text-gray-500 text-lg md:text-xl font-bold tracking-tight">
        &lt;Lab/&gt;
      </span>
      <p className="text-gray-300 text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 text-center">
        Click for Code Link.
      </p>
      <div className="grid mt-10 md:mt-20 gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {/* Add lab experiments or links here */}
        <div className="bg-[#100e17] rounded shadow hover:shadow-lg transition p-4 m-2 md:m-4 lg:m-8">
          <h3 className="text-cyan-400 mb-2 font-semibold">Website</h3>
          <a
            href="https://github.com/Anis-Dangol/Stationery-Ecommerce-Website"
            className="text-gray-400 text-sm hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sab Ko Stationary (E-commerce Website)
          </a>
          <br />
          <a
            href="https://github.com/Anis-Dangol/Twitter-Clone"
            className="text-gray-400 text-sm hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter Clone
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
        </div>{" "}
        <div className="bg-[#100e17] rounded shadow hover:shadow-lg transition p-4 m-2 md:m-4 lg:m-8">
          <h3 className="text-cyan-400 mb-2 font-semibold">Games</h3>
          <a
            href="https://github.com/Anis-Dangol/Tic-Tac-Toe"
            className="text-gray-400 text-sm hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Endless-Tic Tac Toe
          </a>
        </div>{" "}
        <div className="bg-[#100e17] rounded shadow hover:shadow-lg transition p-4 m-2 md:m-4 lg:m-8">
          <h3 className="text-cyan-400 mb-2 font-semibold">Random</h3>
          <a
            href="https://github.com/Anis-Dangol/50-Projects"
            className="text-gray-400 text-sm hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            50 - Small Project (HTML, CSS, JS)
          </a>
          <br />
          <a
            href="https://github.com/Anis-Dangol/HTML-Landing-Pages-Project"
            className="text-gray-400 text-sm hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML Landing Pages Project
          </a>
          <br />
        </div>
      </div>{" "}
    </section>
  );
};

export default Lab;
