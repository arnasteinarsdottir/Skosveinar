import ArrowDownIcon from "../Pictures/arrow-down-icon.svg";
import { useState } from "react";
type Props = {
    selectOption: (option:string) => void,
    optionSelected: string,
    options: string []
}


function FancyDropdown ({selectOption, optionSelected, options}: Props) {
    // Is the dropdown menu open or closed?
    const [isOpen, setIsOpen] = useState(false);

    const openCloseDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="relative">
                <button
                    onClick={openCloseDropdown}
                >
                    <span className="font-cinzel text-4xl text-darkbrown">{isOpen? "Veldu barn" : optionSelected}</span>
                    <div className="flex flex-col absolute left-1 mt-1 w-56 text-left bg-background">
                        {isOpen?
                            <>
                                {options.map((option) => {
                                    return (
                                        <span 
                                        onClick = {() => selectOption(option)}
                                        className="block px-0 py-1 text-left font-cinzel text-4xl text-darkbrown">{option}</span>
                                    )
                                })}
                            </>
                        : ""}
                    </div>
                    <img src={ArrowDownIcon} alt="" />
                </button>
            </div>
        </>
    )
}

export default FancyDropdown;