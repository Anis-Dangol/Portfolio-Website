import { useState, useEffect } from "react";
import axios from "axios";
import { LoadingScreen } from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Start from "./pages/Start";
import Work from "./pages/Work";
import Lab from "./pages/Lab";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";

function App() {
  const fetchApi = async () => {
    const response = await axios.get("http://localhost:5000/api");
    console.log(response.data.message);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className="relative">
        <Navbar />
        <main className="w-full min-h-screen">
          {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
          <div
            className={`min-h-screen transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } bg-[#100e17] text-gray-100`}
          >
            <Start />
          </div>
          <Work className="vertical-line" />
          <Lab />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
