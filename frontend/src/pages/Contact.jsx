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
        <p className="flex mb-5 text-2xl sm:mb-10 md:text-3xl md:mb-10 lg:text-4xl lg:mb-10 font-bold tracking-wide justify-center items-center text-center">
          Find me on
        </p>
        <div className="grid text-lg md:text-xl gap-4 md:gap-8 mb-20 md:mb-32 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 text-cyan-500 text-center">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
