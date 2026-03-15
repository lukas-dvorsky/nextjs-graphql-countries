"use client";

import { useRouter } from "next/navigation";

interface GameRedirectButtonProps {
  url: string;
  title: string;
  bestTime: string | null;
}

function GameRedirectButton({ title, url, bestTime }: GameRedirectButtonProps) {
  const router = useRouter();
  return (
    <div className="flex flex-row gap-4 lg:flex-col">
      <div
        onClick={() => router.push(url)}
        className="w-44 h-44 shadow shadow-black/40 flex items-center justify-center bg-mist-50 cursor-pointer"
      >
        <span className="text-2xl">{title}</span>
      </div>
      <div className="flex flex-col items-center m-auto">
        <p className="text-xl font-semibold">Best time</p>
        <span>{bestTime ?? "Not set"}</span>
      </div>
    </div>
  );
}

export default GameRedirectButton;
