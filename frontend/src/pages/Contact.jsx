const Contact = () => {

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6"
    >
      <span className="text-gray-500 text-xl font-bold tracking-tight">
        &lt;Contact/&gt;
      </span>
      <div className="mt-20">
        <p className="flex mb-5 text-2xl font-bold tracking-wide justify-center items-center ">
          Find me on
        </p>
        <div className="grid text-xl gap-8 mb-32 sm:grid-cols-1 lg:grid-cols-2 text-cyan-500">
          <a
            href="https://github.com/Anis-Dangol"
            className="hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/anis_dangol/?hl=en"
            className="hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/anish-dangol-555a13261/"
            className="hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@faith_blink"
            className="hover:text-[#5918df]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
