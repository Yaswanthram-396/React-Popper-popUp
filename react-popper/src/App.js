import React from "react";
import { useEffect } from "react";
import "./App.css";
// The confetti package from jsdelivr CDN
const App = () => {
  useEffect(() => {
    // Load confetti script dynamically on component mount
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    // Trigger confetti on button click
    window.confetti({
      particleCount: 300,
      spread: 90,
      origin: { x: 1, y: 0.9 },
    });

    window.confetti({
      particleCount: 300,
      spread: 90,
      origin: { x: 0, y: 0.9 },
    });
  };

  return (
    <div className="main-container">
      <button className="fire-btn" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
};

export default App;
