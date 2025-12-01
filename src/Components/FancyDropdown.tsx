import ArrowDownIcon from "../Pictures/arrow-down-icon.svg";
import { useState } from "react";

type Props = {
    selectOption: (option: string) => void;
    optionSelected: string;
    options: string[];
};

function FancyDropdown({ selectOption, optionSelected, options }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const openCloseDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* BUTTON */}
            <button
                onClick={openCloseDropdown}
                className="flex items-center justify-between w-full"
            >
                <span className="font-cinzel text-4xl text-darkbrown">
                    {isOpen ? "Veldu barn" : optionSelected}
                </span>

                {/* ARROW ON RIGHT SIDE */}
                <img 
                    src={ArrowDownIcon} 
                    alt="arrow" 
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {/* DROPDOWN MENU */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-full bg-background shadow-md z-10">
                    {options.map((option) => (
                        <span
                            key={option}
                            onClick={() => {
                                selectOption(option);
                                setIsOpen(false);
                            }}
                            className="block px-2 py-1 font-cinzel text-4xl text-darkbrown hover:bg-gray-200 cursor-pointer"
                        >
                            {option}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FancyDropdown;
