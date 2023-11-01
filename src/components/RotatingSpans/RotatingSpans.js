import React, { useState, useEffect } from "react";
import "./RotatingSpans.scss"
function RotatingSpans() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const spans = [
    { text: "Collaborate", opacity: currentIndex === 0 ? 1 : 0 },
    { text: "Coach", opacity: currentIndex === 1 ? 1 : 0 },
    { text: "Compete", opacity: currentIndex === 2 ? 1 : 0 },
  ];

  return (
    <span id="rotate" className="text-blue-600">
      {spans.map((span, index) => (
        <span
          key={index}
          style={{ opacity: span.opacity, transition: "opacity 1s ease" }}
        >
          {span.text}
        </span>
      ))}
    </span>
  );
}

export default RotatingSpans;
