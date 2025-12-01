import { PiCaretDown } from "react-icons/pi";
import { useState } from "react";

type Props = {
    dropdownDates: string[]
}

const ChooseDateDropdown = ({ dropdownDates }: Props) => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    
    const dateDropdownContent = (
        <div className="absolute z-10 w-full bg-amber-50 rounded shadow-xl">
            {dropdownDates.map(date => (
                <div 
                key={date}
                className="px-3 py-2 cursor-pointer hover:bg-pink-300 text-green-400">{date}</div>

            ))}
        </div>
    )
    
    return (
        <>
            <div className="w-full h-full flex justify-center pt-10">
                <div className="relative">
                    <div 
                        onClick={() => setIsDropdownVisible(v => !v)}
                        className="border border-darkbrown px-3 py-2 rounded h-8 w-68 flex items-center text-darkbrown shadow-xl justify-between">
                            Veldu dag <PiCaretDown />
                    </div>
                    {isDropdownVisible && dateDropdownContent}
                </div>
            </div>
        </>
    ) 
}

export default ChooseDateDropdown; 