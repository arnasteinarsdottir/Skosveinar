import { PiCaretDown } from "react-icons/pi";
import { useState, useRef, useEffect } from "react";

type Props = {
    dropdownDates: string[]
}

const ChooseDateDropdown = ({ dropdownDates }: Props) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    // Click-outside-to-close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelectDate = (date: string) => {
        setSelectedDate(date);
        setIsDropdownVisible(false);
    };

    const dateDropdownContent = (
        <div className="absolute z-10 w-full bg-amber-50 rounded shadow-xl">
            {dropdownDates.map(date => (
                <div
                    key={date}
                    onClick={() => handleSelectDate(date)}
                    className="px-3 py-2 cursor-pointer font-quicksand font-medium text-darkbrown hover:bg-darkbrown hover:text-background"
                >
                    {date}
                </div>
            ))}
        </div>
    );
    
    return (
        <div className="w-full h-full flex justify-center pt-10">
            <div ref={wrapperRef} className="relative">
                <div
                    onClick={() => setIsDropdownVisible(v => !v)}
                    className="border border-darkbrown px-3 py-2 rounded h-8 w-68 flex items-center font-quicksand font-medium text-darkbrown shadow-xl justify-between cursor-pointer"
                >
                    {selectedDate ?? "Veldu dag"}
                    <PiCaretDown
                        className={`transition-transform duration-200 ${
                            isDropdownVisible ? "rotate-180" : ""
                        }`}
                    />
                </div>

                {isDropdownVisible && dateDropdownContent}
            </div>
        </div>
    ); 
}

export default ChooseDateDropdown;
