import React, { useState, useEffect } from "react";
import "./App.css";
import Quiz from "./Pages/Quiz";
import Layout from "./Components/Layout/Layout";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    const isMobileScreen = window.matchMedia("(min-width: 360px) and (max-width: 480px)").matches;
    setIsMobile(isMobileScreen);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <Layout>
        <Quiz  isMobile={isMobile}/>
    </Layout>
  );
}

export default App;
