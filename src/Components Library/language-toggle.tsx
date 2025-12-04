import { useState } from "react"

export default function LanguageToggle() {
  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <div className="flex flex-col items-center mr-[1.81rem] mt-18">
      {/* Label */}
      <div className="text-center">
        <p className="font-cinzel text-[0.75rem] uppercase text-background pb-1 ">
          {isEnabled ? "ENGLISH" : "ICELANDIC"}
        </p>
      </div>

      {/* Toggle Switch */}
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        className="relative w-[3.18rem] h-[1.9rem] font-[quicksand] rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 bg-[#5c3d2e]"
        aria-label="Language toggle"
        aria-pressed={isEnabled}
      >
        {/* Toggle Knob */}
        <div
          className={`
            absolute top-1 w-[1.6rem] h-[1.6rem] rounded-full bg-white shadow-lg 
            transition-transform duration-300
            ${isEnabled ? "translate-x-6" : "translate-x-1"}
          `}
        />
      </button>
    </div>
  )
}
