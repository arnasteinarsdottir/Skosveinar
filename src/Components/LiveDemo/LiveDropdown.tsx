import { PiCaretDownBold } from "react-icons/pi";
import { useState } from "react";

function LiveDropdown() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const [selectedOption, setSelectedOption] = useState("Veldu mig");

    return (
        <>
            <div className="relative w-80 ml-10 mt-10">
                {/* Button */}
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className="flex items-center justify-between w-full gap-3"
                >
                    <span 
                        className="whitespace-nowrap font-cinzel text-4xl text-darkbrown">
                            {selectedOption}
                    </span>

                    {/* Caret arrow*/}
                    <PiCaretDownBold
                        src="../Pictures/arrow-down-icon.svg"
                        className={`h-4 w-4 transform transition-transform duration-200 ease-out rotate-0
                                ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                </button>

                {/* Dropdown menu (always visible since JS has not been added) */}
                <div 
                    className={`absolute left-0 mt-2 w-full bg-background shadow-md z-10 origin-top transform transition-all duration-200 ease-out
                                ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}`}
                    >
                   {/* Option 1 */}
                   <span 
                        onClick={() => {
                            setSelectedOption("Leppalúði");
                            setIsOpen(false);
                        }}
                        className="block px-2 py-2 font-cinzel text-4xl text-darkbrown hover:bg-darkred hover:text-background cursor-pointer">
                            Leppalúði
                    </span>
                    {/* Option 2 */}
                    <span 
                        onClick ={() => {
                            setSelectedOption("Grýla");
                            setIsOpen(false);
                        }}
                        className="block px-2 py-2 font-cinzel text-4xl text-darkbrown hover:bg-darkred hover:text-background cursor-pointer">
                            Grýla
                    </span>
                    {/* Option 3 */}
                    <span 
                        onClick={() => {
                            setSelectedOption("Jólakötturinn");
                            setIsOpen(false);
                        }}
                        className="block px-2 py-2 font-cinzel text-4xl text-darkbrown hover:bg-darkred hover:text-background cursor-pointer">
                            Jólakötturinn
                    </span>
                </div>
            </div>
        </>
    )
}

export default LiveDropdown;