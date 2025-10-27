import Tictactoe from "../project/TicTacToe";
import SabKoStationery from "../project/SabKoStationery";
import LandingPage from "../project/LandingPage";
import Twitter from "../project/Twitter";
import MusicPlayer from "../project/MusicPlayer";
import Streamify from "../project/Streamify";

const Work = () => {
  return (
    <section
      id="work"
      className="flex flex-col justify-center items-center bg-[#151229] pt-10 min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 mx-auto"
    >
      <span className="text-gray-500 text-xl font-bold tracking-tight">
        &lt;Work/&gt;
      </span>
      <p className="flex flex-col mt-4 text-center justify-center">
        <span className="text-gray-300 text-2xl md:text-3xl lg:text-4xl font-semibold ">
          Click to view the Demo
        </span>
        <br />
        <span className="text-gray-300/50 text-md md:text-lg lg:text-xl mt-4 font-semibold">
          Some will take to github code and you can view there!!
        </span>
      </p>

      <div className="flex flex-col w-full max-w-7xl">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Streamify />
          {/* Add project 1 cards here */}
          <Tictactoe />
          {/* Add Project 2 card here  */}
          {/* Interactive Vertical Image Container */}
          <SabKoStationery />
          {/* Add Project 3 card here  */}
          {/* Interactive Vertical Image Container */}
          <LandingPage />
          {/* Add Project 4 card here  */}
          <Twitter />
          {/* Add Project 5 card here  */}
          <MusicPlayer />
        </div>
      </div>
    </section>
  );
};

export default Work;
