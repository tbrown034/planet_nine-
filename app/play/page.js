"use client";
import { useState } from "react";
import Image from "next/image";
import rocketWithBoost from "/public/assets/rockets/rocketWithBoost.png";
import rocketNoBoost from "/public/assets/rockets/rocketNoBoost.png";
import earth from "/public/assets/planets/earth.png";
import moon from "/public/assets/planets/moon.png";
import mars from "/public/assets/planets/mars.png";
import jupiter from "/public/assets/planets/jupiter.png";
import saturn from "/public/assets/planets/saturn.png";
import uranus from "/public/assets/planets/uranus.png";
import neptune from "/public/assets/planets/neptune.png";
import planetNine from "/public/assets/planets/pluto.png"; // Assuming Planet Nine as Pluto for now

export default function PlayPage() {
  const [gameStarted, setGameStarted] = useState(false);
  const [hoveredPlanet, setHoveredPlanet] = useState("");

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const planetData = [
    { name: "Earth", image: earth },
    { name: "Moon", image: moon },
    { name: "Mars", image: mars },
    { name: "Jupiter", image: jupiter },
    { name: "Saturn", image: saturn },
    { name: "Uranus", image: uranus },
    { name: "Neptune", image: neptune },
    { name: "Planet Nine", image: planetNine },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6 font-mono text-white bg-gradient-to-b from-black to-indigo-900">
      {/* Header Section */}
      <header className="w-full mb-8 text-center">
        <h1 className="mb-2 text-5xl font-bold tracking-wide text-yellow-400 drop-shadow-md">
          Destination Planet Nine
        </h1>
        <p className="mb-6 text-lg text-gray-300">
          Can you identify the true space facts and reach Planet Nine? Get ready
          for takeoff!
        </p>
      </header>

      {/* Planets Progress Bar, Timer and Scoreboard */}
      <div className="relative flex items-center justify-end w-full mb-12 space-x-4">
        {/* Planet Progress Bar */}
        <div className="flex space-x-4">
          {planetData.map((planet, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredPlanet(planet.name)}
              onMouseLeave={() => setHoveredPlanet("")}
            >
              <Image
                src={planet.image}
                alt={planet.name}
                width={40}
                height={40}
                className="transition-opacity opacity-50 hover:opacity-100"
              />
              {hoveredPlanet === planet.name && (
                <div className="absolute left-0 p-1 text-xs text-yellow-300 bg-black rounded shadow-lg top-10">
                  {planet.name}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timer */}
        <div className="p-4 text-yellow-300 bg-black rounded-lg shadow-lg bg-opacity-60">
          <p>Time: 00:00</p> {/* Placeholder for timer */}
        </div>

        {/* Scoreboard */}
        <div className="p-4 text-white bg-black rounded-lg shadow-lg bg-opacity-60">
          <h3 className="mb-1 text-sm font-bold">Scoreboard</h3>
          <ul className="text-xs">
            <li>Player 1: Earth</li> {/* Example, will update dynamically */}
            <li>Player 2: Mars</li>
          </ul>
        </div>
      </div>

      {/* Game Area */}
      <div className="relative w-full h-[500px] flex flex-col items-center justify-center">
        {/* Earth below Rocket */}
        <Image
          src={earth}
          alt="Earth"
          width={120}
          height={120}
          className="absolute bottom-16"
        />

        {/* Rocket Display */}
        <div className="flex flex-col items-center justify-center ">
          <Image src={rocketNoBoost} alt="Rocket" width={200} height={200} />
        </div>
      </div>

      {/* Start Button */}
      {!gameStarted && (
        <button
          onClick={handleStartGame}
          className="px-10 py-4 mt-8 text-xl font-semibold text-black transition-all bg-yellow-300 rounded-lg shadow-lg hover:bg-yellow-400 hover:shadow-xl"
        >
          Start Game
        </button>
      )}
    </div>
  );
}
