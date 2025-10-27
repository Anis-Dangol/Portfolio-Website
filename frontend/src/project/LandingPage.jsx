import React from 'react'
import Tilt from "react-parallax-tilt";
import Coffee from "../assets/Coffee Landing Page.jpg";
import Art from "../assets/Art Landing Page.png";
import Chairs from "../assets/Chairs Landing Page.png";
import Photography from "../assets/Photography Landing Page.png";

const LandingPage = () => {
  return (
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
                  <div className="project-nav block-reveal block-reveal--active mb-10">
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
  )
}

export default LandingPage