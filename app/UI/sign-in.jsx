"use client";

import { useRouter } from "next/navigation"; // Import the useRouter hook
import { Audiowide } from "next/font/google"; // Import the Audiowide font

// Apply the Audiowide font for the button
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function StartGame() {
  const router = useRouter(); // Initialize useRouter for client-side navigation

  const handleStart = () => {
    // Redirect the user to the main game page
    router.push("/play");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <button
        onClick={handleStart}
        className={`p-16 text-xl font-semibold text-black bg-yellow-300 rounded-lg hover:bg-yellow-400 ${audiowide.className}`}
      >
        Start Game
      </button>
    </div>
  );
}
