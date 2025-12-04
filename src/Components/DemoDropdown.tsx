import { PiCaretDownBold } from "react-icons/pi";
import { useState } from "react";


function DemoDropdown() {
    
    // Here is our open/close state
    const [isOpen, setIsOpen] = useState(false);

    // Here is our selected option state
    const [selectedOption, setSelectedOption] = useState("Veldu mig");


    // Function to toggle (open/close) dropdown
    // Our light-switch: false = closed, true = open
    const toggleDropdown = () => setIsOpen(!isOpen);



    return (
        <>
 
<div className="relative w-80 ml-10 mt-10">
  {/* Create a button containing default value and icon */} 
    <button
        // Here I am calling the toggle function on click
        onClick={toggleDropdown}
        type="button"
        className="flex items-center justify-between w-full gap-3"
    >
        <span 
            className="whitespace-nowrap font-cinzel text-4xl text-darkbrown">
            {selectedOption}
        </span>

        {/* ARROW ON RIGHT SIDE (CLOSED STATE) */}
        <PiCaretDownBold 
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
    </button>

  {/* DROPDOWN MENU WHICH WILL APPEAR WHEN OPENED */}
    <div
        className={`absolute left-0 mt-2 w-full bg-background shadow-md z-10 origin-top transform transition-all duration-200 ease-out
        ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}`}
    >
        {/* List of options */}
        <span 
            onClick={() => {
                setSelectedOption("Leppalúði");
                setIsOpen(false);
            }}
            className="block px-2 py-2 font-cinzel text-4xl text-darkbrown hover:bg-darkred hover:text-background cursor-pointer">
            Leppalúði
        </span>
        <span 
            onClick={() => {
                setSelectedOption("Grýla");
                setIsOpen(false);
            }}

            className="block px-2 py-2 font-cinzel text-4xl text-darkbrown hover:bg-darkred hover:text-background cursor-pointer">
            Grýla
        </span>
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

export default DemoDropdown;
