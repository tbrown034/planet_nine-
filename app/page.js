import Link from "next/link";
import { Audiowide } from "next/font/google";
import Image from "next/image";
import rocket from "/public/assets/rockets/rocketWithBoost.png";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Hero Section */}
      <h1
        className={`mb-8 text-center text-yellow-300 tracking-widest text-6xl ${audiowide.className}`}
      >
        Destination Planet Nine
      </h1>
      <Image src={rocket} alt="Rockets" width={200} height={200} />

      {/* Challenge Description */}
      <p
        className={`mb-12 text-xl tracking-wider text-center text-gray-200 ${audiowide.className}`}
      >
        Can you tell the difference between real space facts straight from NASA
        or fake ones created by AI? Take the test and see how
      </p>

      {/* Game Modes Buttons */}
      <div className="flex gap-6 mb-10">
        <Link
          className="px-6 py-3 text-xl font-semibold text-black rounded-lg bg-slate-300 hover:bg-gray-100"
          href="/play"
        >
          Play
        </Link>
      </div>
    </main>
  );
}
