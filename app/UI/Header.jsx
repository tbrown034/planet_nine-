"use client";

import React from "react";
import Link from "next/link";
import { Major_Mono_Display, Audiowide } from "next/font/google"; // Import fonts

// Major Mono Display for the title
const majorMono = Major_Mono_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Audiowide for the links and buttons
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Links = () => (
  <div
    className={`hidden gap-6  xl:text-2xl lg:text-xl text-white  sm:flex ${audiowide.className}`}
  ></div>
);

const Header = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      {/* "NASA or Not" with Major Mono Display */}
      <Link
        href="/"
        className={`text-4xl font-bold text-yellow-300 hover:text-gray-400 tracking-wider ${audiowide.className}`}
      >
        Space React Jam
      </Link>

      {/* Middle Links with Audiowide */}
      <Links />

      {/* Profile/Login with Audiowide and improved button styling */}
      <div className="flex gap-4"></div>
    </nav>
  );
};

export default Header;
