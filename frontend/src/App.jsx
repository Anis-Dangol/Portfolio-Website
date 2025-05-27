import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
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
      <main>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      </main>
    </>
  );
}

export default App;
