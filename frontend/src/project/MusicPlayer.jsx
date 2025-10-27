import React from 'react'
import Tilt from "react-parallax-tilt";
import Music_player from "../assets/Music-player.jpg";

const MusicPlayer = () => {
  return (
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
                <div className="project-nav block-reveal block-reveal--active mb-10">
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
          </a>
  )
}

export default MusicPlayer