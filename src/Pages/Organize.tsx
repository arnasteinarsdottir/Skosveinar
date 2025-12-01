import FancyDropdown from "../Components/FancyDropdown";
import OrganizingInput from "../Components/OrganizingInput";
import SantaCard from "../Components/SantaCard";
import Navbar from "../Components/Navbar";
import ChooseDateDropdown from "../Components/ChooseDateDropdown";
import { useState } from "react";

function Organize () {

      // Creating a array of dates I want displayed as options in ChooseDateDropdown
    const dropdownDates = [
          "12. des", 
          "13. des", 
          "14. des", 
          "15. des", 
          "16. des", 
          "17. des", 
          "18. des", 
          "19. des", 
          "20. des", 
          "21. des", 
          "22. des", 
          "23. des", 
          "24. des"
    ];

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
        const changedArray = arrayOfChildren.map ((child) => {
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
/*
    const setToLocalStorage = () => {
        const getChildName = localStorage.getItem("children") || "[]";
        const arrayOfChildren = JSON.parse(getChildName);
        const changedArray = arrayOfChildren.map ((child) => {
            if (child.name === nameSelected) {
                return (
                    {
                        name: nameSelected,
                        gifts: {[dateSelected]: {
                            ideas: inputGiftIdeas,
                            price: inputGiftPrice
                        }}
                    }
                ) 
            }
            return child
        }) 
        

        localStorage.setItem("children", JSON.stringify(changedArray));
    }
        */
    

    const dateOptions = ["12. des", "13. des", "14. des", "15. des", "16. des", "17. des", "18. des", "19. des", "20. des", "21. des", "22. des", "23. des", "24. des"]

    const childrenSTR = localStorage.getItem("children");
    const options = JSON.parse(childrenSTR)?.map((child) => {
        return (
            child.name
        )
    });

    return (

        <>
            <Navbar />
            <div className="mt-40"></div>
            <div className="flex flex-col items-center mt-14">
                <div className="flex flex-col items-start md:items-center">
                    <p className="font-cinzel text-2xl md:text-4xl text-darkbrown">
                        Hugmyndabanki <br />
                        jólasveinsins
                    </p>
                    <div className="mt-14">
                        <div className="flex justify-between">
                            <FancyDropdown selectOption = {selectChild} optionSelected = {nameSelected} options = {options} />
                            <FancyDropdown selectOption ={selectDate} optionSelected = {dateSelected} options = {dateOptions} />
                        </div>
                        <ChooseDateDropdown dropdownDates={dropdownDates} />
                        <div className="mt-8 md:gap-6 md:flex">
                            <div className="pb-6 md:pb-0">
                                <SantaCard 
                                    date = {dateSelected}
                                />
                            </div>
                            <OrganizingInput setToLocalStorage={setToLocalStorage} inputGiftIdeas = {inputGiftIdeas} inputGiftPrice = {inputGiftPrice} updateGiftIdeas = {updateGiftIdeas} updateGiftPrice = {updateGiftPrice}  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Organize;
