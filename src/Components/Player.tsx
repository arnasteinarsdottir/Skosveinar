import { useRef, useState } from "react";

function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }

  const progressPercent =
    duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-[1.69rem]">
      {/* Player */}
      <div className="relative inline-block">
        <img
          className="w-full h-full object-cover"
          src="/src/Pictures/Player-gryla.png"
          alt="Player background"
        />

        <button
          className="absolute top-20 left-1/2 -translate-x-1/2"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <img
              src="/src/Pictures/Stop-button.svg"
              alt="Stop Player"
            />
          ) : (
            <img
              src="/src/Pictures/Player.svg"
              alt="play"
            />
          )}
        </button>

        <button className="bg-[#F4F4F0] w-[265px] h-[61px] absolute left-5 bottom-15">
          <h1>1. Kafli</h1>
          <p className="text-[16px] font-bold">
            13 nætur til jóla
          </p>
        </button>

        {/* Progress bar */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[80%] h-3 bg-gray-300 rounded">
          <div
            className="absolute left-0 top-0 h-full bg-green-900 rounded"
            style={{ width: `${progressPercent}%` }}
          ></div>

          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-darkgreen text-white text-xs flex items-center justify-center"
            style={{ left: `${progressPercent}%` }}
          >
            {Math.floor(currentTime / 60)}
          </div>
        </div>

        {/* Time */}
        <p className="absolute bottom-10 left-1/2 -translate-x-1/2">
          {formatTime(currentTime)}
        </p>

        <audio
          ref={audioRef}
          src="/src/Pictures/christmas-story.mp3"
          onTimeUpdate={(e) =>
            setCurrentTime(e.currentTarget.currentTime)
          }
          onLoadedMetadata={(e) =>
            setDuration(e.currentTarget.duration)
          }
        />
      </div>

      {/* Text under the player – unchanged */}
      <div className="flex flex-col items-center justify-center gap-[1.69rem]">
        <h2>
          Jólasveinarnir er byrjaður að safna gjafa hugmyndum
        </h2>
        <button className="h-12 w-[clamp(295px,60vw,519px)] text-background bg-darkgreen font-quicksand font-bold rounded-2xl">
          Búa til aðgang
        </button>
      </div>
    </div>
  );
}

export default Player;
