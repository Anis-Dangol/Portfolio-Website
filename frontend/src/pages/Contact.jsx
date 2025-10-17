import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6"
    >
      <span className="text-gray-500 text-lg md:text-xl font-bold tracking-tight">
        &lt;Contact/&gt;
      </span>
      <div className="mt-10 md:mt-10">
        <p className="flex mb-5 text-4xl sm:mb-10 md:text-3xl md:mb-10 lg:text-4xl lg:mb-10 font-bold tracking-wide justify-center items-center text-center">
          Find me on
        </p>
        <div className="grid text-lg md:text-xl lg:text-2xl gap-4 sm:gap-4 md:gap-6 lg:gap-8  md:mb-32 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-cyan-500 text-center">
          <a
            href="mailto:anis.dangol121@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-[#5918df] transition-colors"
          >
            <MdEmail className="text-2xl group-hover:text-[#5918df] transition-colors mt-1" />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/anish-dangol-555a13261/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-[#5918df] transition-colors"
          >
            <FaLinkedin className="text-2xl mt-1" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Anis-Dangol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-[#5918df] transition-colors"
          >
            <FaGithub className="text-2xl mt-1" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/anis_dangol/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-[#5918df] transition-colors"
          >
            <FaInstagram className="text-2xl mt-1" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
