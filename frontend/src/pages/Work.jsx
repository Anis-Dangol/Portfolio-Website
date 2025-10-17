import Endless_tictactoe from "../assets/Endless-tictactoe.jpg";
import Music_player from "../assets/Music-player.jpg";
import Coffee from "../assets/Coffee Landing Page.jpg";
import Art from "../assets/Art Landing Page.png";
import Chairs from "../assets/Chairs Landing Page.png";
import Photography from "../assets/Photography Landing Page.png";
import Twitter from "../assets/Twitter-clone.jpg";
import Login_Register from "../assets/S_Login & Register Page.jpg";
import Home from "../assets/S_Home Page.png";
import Cart from "../assets/S_My Cart Slidebar.png";
import Checkout from "../assets/S_Checkout Page.png";
import Tilt from "react-parallax-tilt";

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
          {/* Add project 1 cards here */}
          <a
            href="https://endless-tictactoe.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            id="endless-tictactoe"
            className="mx-auto pt-0 flex justify-center col-sm-10 col-md-5"
            style={{ textDecoration: "none" }}
          >
            <Tilt
              tiltEnable={true}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              perspective={700}
              gyroscope={false}
              className="project-box h relative"
            >
              {/* Spinner Placeholder */}
              <div className="spinner-border-wrp">
                <span role="status" className="spinner-border">
                  <span className="sr-only">Spinning</span>
                </span>
              </div>

              {/* Image Block Reveal */}
              <div className="block-reveal projects block-reveal--active">
                <span className="block-reveal__block white"></span>
                <span className="block-reveal__text">
                  <div
                    className="project-image"
                    style={{
                      backgroundImage: `url(${Endless_tictactoe})`,
                    }}
                  />
                </span>
              </div>

              {/* Metadata */}
              <div className="project-meta">
                <div className="project-nav block-reveal block-reveal--active">
                  <span className="block-reveal__block"></span>
                  <span className="block-reveal__text font-bold">01</span>
                </div>
                <div className="block-reveal projects block-reveal--active bg-transparent">
                  <span className="block-reveal__block white"></span>
                  <span className="block-reveal__text font-bold">
                    Endless - Tic Tac Toe
                  </span>
                  <br />
                  <span className="arr italic text-sm">
                    → An endless Tic Tac Toe game where players keep playing
                    until one winner is declared.
                  </span>
                </div>

                <div className="divider"></div>
              </div>
            </Tilt>
          </a>
          {/* Add Project 2 card here  */}
          {/* Interactive Vertical Image Container */}
          <a
            href="https://github.com/Anis-Dangol/Stationery-Ecommerce-Website"
            target="_blank"
            rel="noopener noreferrer"
            id="Stationery-Ecommerce-Website"
            className="mx-auto pt-0 flex justify-center col-sm-10 col-md-5"
            style={{ textDecoration: "none" }}
          >
            <div className="mx-auto pt-0 flex justify-center col-sm-10 col-md-5">
              <Tilt
                tiltEnable={false}
                glareEnable={false}
                glareMaxOpacity={0.2}
                scale={1.05}
                perspective={700}
                gyroscope={false}
                className="project-box h relative"
              >
                {/* Spinner Placeholder */}
                <div className="spinner-border-wrp">
                  <span role="status" className="spinner-border">
                    <span className="sr-only">Spinning</span>
                  </span>
                </div>

                {/* Image Block Reveal - Interactive Container */}
                <div className="block-reveal projects block-reveal--active">
                  <span className="block-reveal__block white"></span>
                  <span className="block-reveal__text">
                    <div className="project-image relative overflow-hidden">
                      {/* Login & Register Page */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500 hover:z-10 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-[#ffffff]"
                        style={{
                          backgroundImage: `url(${Login_Register})`,
                          height: "25%",
                          top: "0%",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.height = "100%";
                          e.currentTarget.style.top = "0%";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.height = "25%";
                          e.currentTarget.style.top = "0%";
                        }}
                      >
                        <div className="w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Login Page
                          </span>
                        </div>
                      </div>

                      {/* Home Page */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500 hover:z-10 cursor-pointer border-t-2 border-b-2 border-[#ffffff]"
                        style={{
                          backgroundImage: `url(${Home})`,
                          height: "25%",
                          top: "25%",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.height = "100%";
                          e.currentTarget.style.top = "0%";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.height = "25%";
                          e.currentTarget.style.top = "25%";
                        }}
                      >
                        <div className="w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Home Page
                          </span>
                        </div>
                      </div>

                      {/* My Cart Slidebar Page */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500 hover:z-10 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-[#ffffff]"
                        style={{
                          backgroundImage: `url(${Cart})`,
                          height: "25%",
                          top: "50%",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.height = "100%";
                          e.currentTarget.style.top = "0%";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.height = "25%";
                          e.currentTarget.style.top = "50%";
                        }}
                      >
                        <div className="w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                            My Cart Slidebar
                          </span>
                        </div>
                      </div>

                      {/* Checkout Page */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500 hover:z-10 cursor-pointer border-t-2 border-[#ffffff]"
                        style={{
                          backgroundImage: `url(${Checkout})`,
                          height: "25%",
                          top: "75%",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.height = "100%";
                          e.currentTarget.style.top = "0%";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.height = "25%";
                          e.currentTarget.style.top = "75%";
                        }}
                      >
                        <div className="w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Checkout Page
                          </span>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>

                {/* Metadata */}
                <div className="project-meta">
                  <div className="project-nav block-reveal block-reveal--active">
                    <span className="block-reveal__block"></span>
                    <span className="block-reveal__text font-bold">02</span>
                  </div>
                  <div className="block-reveal projects block-reveal--active bg-transparent">
                    <span className="block-reveal__block white"></span>
                    <span className="block-reveal__text font-bold">
                      Sab Ko Stationery - Ecommerce Website
                    </span>
                    <br />
                    <span className="arr italic text-sm">
                      → A stationery ecommerce website built using MERN stack
                      with a modern design and user-friendly interface.
                    </span>
                  </div>

                  <div className="divider"></div>
                </div>
              </Tilt>
            </div>
          </a>
          {/* Add Project 3 card here  */}
          {/* Interactive Vertical Image Container */}
          <a
            href="https://github.com/Anis-Dangol/HTML-Landing-Pages-Project"
            target="_blank"
            rel="noopener noreferrer"
            id="HTML-landing-pages-project"
            className="mx-auto pt-0 flex justify-center col-sm-10 col-md-5"
            style={{ textDecoration: "none" }}
          >
            <div className="mx-auto pt-0 flex justify-center col-sm-10 col-md-5">
              <Tilt
                tiltEnable={false}
                glareEnable={false}
                glareMaxOpacity={0.2}
                scale={1.05}
                perspective={700}
                gyroscope={false}
                className="project-box h relative"
              >
                {/* Spinner Placeholder */}
                <div className="spinner-border-wrp">
                  <span role="status" className="spinner-border">
                    <span className="sr-only">Spinning</span>
                  </span>
                </div>

                {/* Image Block Reveal - Interactive Container */}
                <div className="block-reveal projects block-reveal--active">
                  <span className="block-reveal__block white"></span>
                  <span className="block-reveal__text">
                    <div className="project-image relative overflow-hidden">
                      {/* Coffee Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500 hover:z-10 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-[#ffffff]"
                        style={{
                          backgroundImage: `url(${Coffee})`,
                          height: "25%",
                          top: "0%",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.height = "100%";
                          e.currentTarget.style.top = "0%";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.height = "25%";
                          e.currentTarget.style.top = "0%";
                        }}
                      >
                        <div className="w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Coffee Landing
                          </span>
                        </div>
                      </div>

                      {/* Art Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500 hover:z-10 cursor-pointer border-t-2 border-b-2 border-[#ffffff]"
                        style={{
                          backgroundImage: `url(${Art})`,
                          height: "25%",
                          top: "25%",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.height = "100%";
                          e.currentTarget.style.top = "0%";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.height = "25%";
                          e.currentTarget.style.top = "25%";
                        }}
                      >
                        <div className="w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Art Landing
                          </span>
                        </div>
                      </div>

                      {/* Chairs Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500 hover:z-10 cursor-pointer hover:border-t-2 hover:border-b-2 hover:border-[#ffffff]"
                        style={{
                          backgroundImage: `url(${Chairs})`,
                          height: "25%",
                          top: "50%",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.height = "100%";
                          e.currentTarget.style.top = "0%";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.height = "25%";
                          e.currentTarget.style.top = "50%";
                        }}
                      >
                        <div className="w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Chairs Landing
                          </span>
                        </div>
                      </div>

                      {/* Photography Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500 hover:z-10 cursor-pointer border-t-2 border-[#ffffff] hover:border-b-2 hover:border-[#ffffff]"
                        style={{
                          backgroundImage: `url(${Photography})`,
                          height: "25%",
                          top: "75%",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.height = "100%";
                          e.currentTarget.style.top = "0%";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.height = "25%";
                          e.currentTarget.style.top = "75%";
                        }}
                      >
                        <div className="w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Photography Landing
                          </span>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>

                {/* Metadata */}
                <div className="project-meta">
                  <div className="project-nav block-reveal block-reveal--active">
                    <span className="block-reveal__block"></span>
                    <span className="block-reveal__text font-bold">03</span>
                  </div>
                  <div className="block-reveal projects block-reveal--active bg-transparent">
                    <span className="block-reveal__block white"></span>
                    <span className="block-reveal__text font-bold">
                      HTML Landing Pages Project
                    </span>
                    <br />
                    <span className="arr italic text-sm">
                      → Interactive showcase of various landing page designs.
                    </span>
                  </div>

                  <div className="divider"></div>
                </div>
              </Tilt>
            </div>
          </a>
          {/* Add Project 4 card here  */}
          <a
            href="https://github.com/Anis-Dangol/Twitter-Clone"
            target="_blank"
            rel="noopener noreferrer"
            id="twitter-clone"
            className="mx-auto pt-0 flex justify-center col-sm-10 col-md-5"
            style={{ textDecoration: "none" }}
          >
            <Tilt
              tiltEnable={true}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              perspective={700}
              gyroscope={false}
              className="project-box h relative"
            >
              {/* Spinner Placeholder */}
              <div className="spinner-border-wrp">
                <span role="status" className="spinner-border">
                  <span className="sr-only">Spinning</span>
                </span>
              </div>

              {/* Image Block Reveal */}
              <div className="block-reveal projects block-reveal--active">
                <span className="block-reveal__block white"></span>
                <span className="block-reveal__text">
                  <div
                    className="project-image"
                    style={{
                      backgroundImage: `url(${Twitter})`,
                    }}
                  />
                </span>
              </div>

              {/* Metadata */}
              <div className="project-meta">
                <div className="project-nav block-reveal block-reveal--active">
                  <span className="block-reveal__block"></span>
                  <span className="block-reveal__text font-bold">04</span>
                </div>
                <div className="block-reveal projects block-reveal--active bg-transparent">
                  <span className="block-reveal__block white"></span>
                  <span className="block-reveal__text font-bold">
                    Twitter Clone
                  </span>
                  <br />
                  <span className="arr italic text-sm">
                    → A Twitter clone built with MERRN stack that allows users
                    to post tweets, follow others, and interact with content.
                  </span>
                </div>

                <div className="divider"></div>
              </div>
            </Tilt>
          </a>{" "}
          {/* Add Project 5 card here  */}
          <a
            href="https://music-player54321.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            id="music-player"
            className="mx-auto pt-0 flex justify-center col-sm-10 col-md-5"
            style={{ textDecoration: "none" }}
          >
            <Tilt
              tiltEnable={true}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              perspective={700}
              gyroscope={false}
              className="project-box h relative"
            >
              {/* Spinner Placeholder */}
              <div className="spinner-border-wrp">
                <span role="status" className="spinner-border">
                  <span className="sr-only">Spinning</span>
                </span>
              </div>

              {/* Image Block Reveal */}
              <div className="block-reveal projects block-reveal--active">
                <span className="block-reveal__block white"></span>
                <span className="block-reveal__text">
                  <div
                    className="project-image"
                    style={{
                      backgroundImage: `url(${Music_player})`,
                    }}
                  />
                </span>
              </div>

              {/* Metadata */}
              <div className="project-meta">
                <div className="project-nav block-reveal block-reveal--active">
                  <span className="block-reveal__block"></span>
                  <span className="block-reveal__text font-bold">05</span>
                </div>
                <div className="block-reveal projects block-reveal--active bg-transparent">
                  <span className="block-reveal__block white"></span>
                  <span className="block-reveal__text font-bold">
                    Music Player
                  </span>
                  <br />
                  <span className="arr italic text-sm">
                    → A modern music player web app with playlist support and
                    smooth UI.
                  </span>
                </div>

                <div className="divider"></div>
              </div>
            </Tilt>
          </a>{" "}
        </div>
      </div>
    </section>
  );
};

export default Work;
