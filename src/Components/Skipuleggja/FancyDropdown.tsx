import ArrowDownIcon from "/src/Pictures/arrow-down-icon.svg";
import { useState, useEffect, useRef } from "react";

type Props = {
    selectOption: (option: string) => void;
    optionSelected: string;
    options: string[];
};

function FancyDropdown({ selectOption, optionSelected, options }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const openCloseDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    // Click-outside-to-close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={wrapperRef} className="relative w-52 pt-2">
            {/* BUTTON */}
            <button
                onClick={openCloseDropdown}
                className="flex items-center w-full gap-3 max-sm:justify-between"
            >
                <span className="whitespace-nowrap font-cinzel text-3xl text-darkbrown">
                    {optionSelected}
                </span>

                {/* ARROW ON RIGHT SIDE, SMOOTH ANIMATION */}
                <img 
                    src={ArrowDownIcon} 
                    alt="arrow" 
                    className={`h-4 w-4 transform transition-transform duration-200 ease-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </button>

            {/* DROPDOWN MENU WITH ANIMATION */}
            <div
                className={`absolute left-0 mt-2 w-full bg-background shadow-md z-10 origin-top transform transition-all duration-200 ease-out
                    ${
                        isOpen
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                    }`}
            >
                {options.map((option) => (
                    <span
                        key={option} 
                        onClick={() => {
                            selectOption(option);
                            setIsOpen(false);
                        }}
                        className="block px-2 py-1 font-cinzel text-4xl text-darkbrown hover:bg-darkred hover:text-background cursor-pointer"
                    >
                        {option}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default FancyDropdown;
