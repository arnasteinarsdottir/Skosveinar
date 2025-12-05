import FancyDropdown from "../Components/Skipuleggja/FancyDropdown.tsx";
import OrganizingInput from "../Components/Skipuleggja/OrganizingInput.tsx";
import SantaCard from "../Components/Skipuleggja/SantaCard.tsx";
import Navbar from ".././Components/Navbar/Navbar.tsx"; 
import { useState } from "react";

type Child = {
    name: string;
    gifts: {
        [key: string]: {
            ideas: string;
            price: number;
        };
    };
}

function Organize () {

    const [nameSelected, setNameSelected] = useState("Veldu barn"); 
    const [dateSelected, setDateSelected] = useState("Veldu dag");
    const [inputGiftIdeas, setInputGiftIdeas] = useState("");
    const [inputGiftPrice, setInputGiftPrice] = useState(0);

    const selectChild = (name: string) => {
        setNameSelected(name)
    }

    const selectDate = (date: string) => {
        setDateSelected(date)
    }

    const updateGiftIdeas = (gift: string) => {
        setInputGiftIdeas(gift)
    }

    const updateGiftPrice = (price: string) => {
        setInputGiftPrice(Number(price))
    }

    console.log(nameSelected);

    const setToLocalStorage = () => {
        const getChildName = localStorage.getItem("children") || "[]";
        const arrayOfChildren = JSON.parse(getChildName);
        const changedArray = arrayOfChildren.map ((child: Child) => {
            if (child.name === nameSelected) {
                return (
                    {
                        ...child,
                        gifts: {
                            ...child.gifts,
                            [dateSelected]: {
                                ideas: inputGiftIdeas,
                                price: inputGiftPrice
                            }
                        }
                    }
                ) 
            }
            return child
        }) 
        

        localStorage.setItem("children", JSON.stringify(changedArray));
    }

    const dateOptions = ["12. des", "13. des", "14. des", "15. des", "16. des", "17. des", "18. des", "19. des", "20. des", "21. des", "22. des", "23. des", "24. des"]

    const childrenSTR = localStorage.getItem("children") || "[]";
    const options = JSON.parse(childrenSTR)?.map((child: Child) => {
        return (
            child.name
        )
    });

    return (

        <>
            <Navbar />
            <div className="mt-40"></div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-start md:items-center">
                    <p className="font-cinzel text-4xl text-darkbrown">
                        Hugmyndabanki <br />
                        jólasveinsins
                    </p>
                    <div className="mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                            {/* 1) Veldu barn (stays above SantaCard on md) */}
                            <FancyDropdown
                            selectOption={selectChild}
                            optionSelected={nameSelected}
                            options={options}
                            />

                            {/* 2) Veldu dag (will be above OrganizingInput on md) */}
                            <FancyDropdown
                            selectOption={selectDate}
                            optionSelected={dateSelected}
                            options={dateOptions}
                            />

                            {/* 3) SantaCard – under Veldu barn */}
                            <div className="mt-8 md:mt-4 pb-6 md:pb-0">
                            <SantaCard
                                date={dateSelected}
                                santanumber={
                                dateSelected !== "Veldu dag"
                                    ? dateOptions.indexOf(dateSelected)
                                    : 0
                                }
                            />
                            </div>

                            {/* 4) OrganizingInput – under Veldu dag */}
                            <div className="mt-2 md:mt-4">
                            <OrganizingInput
                                setToLocalStorage={setToLocalStorage}
                                inputGiftIdeas={inputGiftIdeas}
                                inputGiftPrice={inputGiftPrice}
                                updateGiftIdeas={updateGiftIdeas}
                                updateGiftPrice={updateGiftPrice}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Organize;
