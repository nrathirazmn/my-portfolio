import { useEffect, useState } from "react";

export default function RainbowBar() {
  const [position, setPosition] = useState(-200); // start off screen

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev > window.innerWidth ? -200 : prev + 5));
    }, 30); // speed of movement
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-4 bg-gradient-to-r from-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 overflow-hidden">
      <img
        src="/nyan-cat.gif"
        alt="Nyan Cat"
        className="absolute top-[-20px] h-12"
        style={{ left: position }}
      />
    </div>
  );
}
