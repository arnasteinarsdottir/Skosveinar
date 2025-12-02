import GiftOverviewBox from "../Components/GiftOverviewBox";
import TotalPriceCalculator from "../Components/TotalPriceCalculator";
import FancyDropdown from "../Components/FancyDropdown";
import BrownFilledButton from "../Components/BrownFilledButton";
import AddChildModal from "../Components/AddChildModal";
import Navbar from "../Components/Navbar"; 
import {useState} from "react"; 

type Gift = {
    [key: string]: {
        ideas: string;
        price: number;
    };
}

type Child = {
    name: string;
    gifts: Gift;
}


function ProfilePage() {

    // State put on BrownFilledButton to open AddChildModal
    const [isModalOpen, setIsModalOpen] = useState(false);

      const [nameSelected, setNameSelected] = useState("Veldu barn");
      const selectChild = (name: string) => {
          setNameSelected(name)
      }

      const childrenSTR = localStorage.getItem("children") || "[]";
      const options = JSON.parse(childrenSTR)?.map((child: Child) => {
        return (
            child.name
        )
      });
     const GetFromLocalStorage = (): Gift => {
      let trueData: Child[] = []
      const storedJsonString = childrenSTR
      if (!storedJsonString) return trueData [0].gifts

      try {
        const retrievedArrayOfObjects = JSON.parse(storedJsonString)
        if (Array.isArray(retrievedArrayOfObjects)) {
          trueData = retrievedArrayOfObjects.filter(child => {
            return child.name === nameSelected
          }) 
        }
      } catch (e) {
        console.error("Failed to parse localStorage data:", e)
      }
      if (trueData[0]) {
        return trueData[0].gifts;
      } else {
        return {}
      }
    }
  const dateOptions = ["12. des", "13. des", "14. des", "15. des", "16. des", "17. des", "18. des", "19. des", "20. des", "21. des", "22. des", "23. des", "24. des"]

  const selectedChildGifts = GetFromLocalStorage()
  const CalculateTotalPrice = () => {
    let Total = 0;
    for (let i = 0; i < dateOptions.length; i++){
      Total += selectedChildGifts[dateOptions[i]]?.price || 0;
    }
    return Total;
  }

  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className=" flex flex-col items-center">
        <div className ="mb-30">
        <Navbar />
        </div>
        <div className="flex justify-between items-start w-98 mt-14">
          <FancyDropdown selectOption = {selectChild} optionSelected = {nameSelected} options = {options} />
          <BrownFilledButton 
            onClick = {() => setIsModalOpen(true)}
          />
        </div>
        <div className="w-98 flex justify-end pt-12 md:flex md:justify-center">
          <TotalPriceCalculator TotalPrice={CalculateTotalPrice()}/>
        </div>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {dateOptions.map((date) => {
            return (
              <div key={date}>
                <GiftOverviewBox date={date} gift={GetFromLocalStorage()[date]?.ideas} price={GetFromLocalStorage()[date]?.price} />
              </div>
            )
          })}
        </div>
        {isModalOpen && (
          <AddChildModal 
            onClose = {closeModal}
          />
        )}
      </div>
    </>
  )
}

export default ProfilePage;
