import ArrowDownIcon from "../Pictures/arrow-down-icon.svg";
import { useState } from "react";


function FancyDropdown () {
    // Is the dropdown menu open or closed?
    const [isOpen, setIsOpen] = useState(false);

    // Which name is currently selected?
    const [nameSelected, setNameSelected] = useState("Veldu barn");

    const selectChild = (name: string) => {
        setNameSelected(name)
    }

    const options = ["Mikki", "Mína", "Kalli", "Kata"];

    const openCloseDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="relative">
                <button
                    onClick={openCloseDropdown}
                >
                    <span className="font-cinzel text-4xl text-darkbrown">{isOpen? "Veldu barn" : nameSelected}</span>
                    <div className="flex flex-col">
                        {isOpen?
                            <>
                                {options.map((option) => {
                                    return (
                                        <span 
                                        onClick = {() => selectChild(option)}
                                        className="font-cinzel text-4xl text-darkbrown">{option}</span>
                                    )
                                })}
                            </>
                        : ""}
                    </div>
                    <img src="" alt="" />
                </button>
            </div>
        </>
    )
}

export default FancyDropdown;