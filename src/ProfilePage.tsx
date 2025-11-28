import GiftOverviewBox from "./Components/GiftOverviewBox";
import TotalPriceCalculator from "./Components/TotalPriceCalculator";
import FancyDropdown from "./Components/FancyDropdown";
import BrownFilledButton from "./Components/BrownFilledButton";
import AddChildModal from "./Components/AddChildModal";


function ProfilePage() {

     const GetFromLocalStorage = () => {
      let trueData: any[] = []
      const storedJsonString = localStorage.getItem("data")
      if (!storedJsonString) return trueData

      try {
        const retrievedArrayOfObjects = JSON.parse(storedJsonString)
        if (Array.isArray(retrievedArrayOfObjects)) {
          trueData = retrievedArrayOfObjects
        }
      } catch (e) {
        console.error("Failed to parse localStorage data:", e)
      }

      return trueData;
    }

  const CalculateTotalPrice = () => {
    let Total = 0;
    for (let i = 0; i < GetFromLocalStorage().length; i++){
      Total += GetFromLocalStorage()[i].price;
    }
    return Total;
  }

  return (
    <>
      <div className=" flex flex-col items-center">
        <div className="flex justify-between items-center w-98 mt-14">
          <FancyDropdown />
        </div>
        <div className="w-98 flex justify-end pt-12 md:flex md:justify-center">
          <TotalPriceCalculator TotalPrice={CalculateTotalPrice()}/>
        </div>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {GetFromLocalStorage().map((gift, key) => {
            return (
              <div key={gift.id}>
                <GiftOverviewBox date={gift.date} gift={gift.gift} price={gift.price} />
              </div>
            )
          })}
        </div>
        <AddChildModal />
      </div>
    </>
  )
}

export default ProfilePage;
