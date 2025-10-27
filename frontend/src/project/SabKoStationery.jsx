import React from "react";
import Tilt from "react-parallax-tilt";
import Home from "../assets/S_Home Page.png";
import Cart from "../assets/S_My Cart Slidebar.png";
import Login_Register from "../assets/S_Login & Register Page.jpg";
import Checkout from "../assets/S_Checkout Page.png";

const SabKoStationery = () => {
  return (
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
            <div className="project-nav block-reveal block-reveal--active mb-10">
            </div>
            <div className="block-reveal projects block-reveal--active bg-transparent">
              <span className="block-reveal__block white"></span>
              <span className="block-reveal__text font-bold">
                Sab Ko Stationery - Ecommerce Website
              </span>
              <br />
              <span className="arr italic text-sm">
                → A stationery ecommerce website built using MERN stack with a
                modern design and user-friendly interface.
              </span>
            </div>

            <div className="divider"></div>
          </div>
        </Tilt>
      </div>
    </a>
  );
};

export default SabKoStationery;
