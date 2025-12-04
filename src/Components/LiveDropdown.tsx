import { useState } from "react";

function LiveDropdown() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    
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
                            Veldu mig
                    </span>

                    {/* Caret arrow*/}
                    <img
                        src="../Pictures/arrow-down-icon.svg"
                        alt="arrow"
                        className="h-4 w-4 transform transition-transform duration-200 ease-out rotate-0"
                    />
                </button>

                {/* Dropdown menu (always visible since JS has not been added) */}
                {/* <div className="absolute left-0 mt-2 w-full bg-background shadow-md z-10 origin-top transform transition-all duration-200 ease out">
                    
                    <span 
                        className="block px-2 py-2 font-cinzel text-4xl text-darkbrown hover:bg-darkred hover:text-background cursor-pointer">
                            Leppalúði
                    </span>
               
                    <span 
                        className="block px-2 py-2 font-cinzel text-4xl text-darkbrown hover:bg-darkred hover:text-background cursor-pointer">
                            Grýla
                    </span>
                   
                    <span 
                        className="block px-2 py-2 font-cinzel text-4xl text-darkbrown hover:bg-darkred hover:text-background cursor-pointer">
                            Jólakötturinn
                    </span>
                </div> */}
            </div>
        </>
    )
}

export default LiveDropdown;