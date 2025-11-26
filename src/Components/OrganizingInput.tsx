import BrownFilledButton from "./BrownFilledButton";
import { useState } from "react"

function OrganizingInput () {
    const [descrption, setDescription] = useState("")
      const DummyGifts = [
    { id: 1, date: "12. DES", gift: "Lego sett", price: 5000 },
    { id: 2, date: "15. DES", gift: "Bók", price: 3000 },
    { id: 3, date: "20. DES", gift: "Föt", price: 4000 },
    { id: 4, date: "18. DES", gift: "bíll", price: 2000 },
    { id: 5, date: "14. DES", gift: "console", price: 22000 }
    ];

    const SetToLocalStorage = () => {
        localStorage.setItem("data", JSON.stringify(DummyGifts));
    }

    return (
        <form>
            <div className="flex flex-col w-[350px]">
                <textarea
                    value={<div>Halló</div>}
                    placeholder="Skrá skógjafahugmyndir..."
                    className="h-44 md:h-[173px] bg-[#F4F4F0] border-[1.5px] border-darkbrown font-normal rounded-lg p-2 text-[#3E4140] font-quicksand resize-none focus:border-2 focus:border-[#6D726B] focus:outline-none focus:ring-0"
                />
                <div className="flex justify-between pt-6 gap-6">
                    <input 
                        type="text"
                        placeholder="Verð"
                        className="h-12 md:h-9 w-[70%] bg-[#F4F4F0] border-[1.5px] border-darkbrown font-normal rounded-lg pl-2 text-[#3E4140] font-quicksand focus:border-2 focus:border-[#6D726B] focus:outline-none focus:ring-0"
                    />
                    <BrownFilledButton onClick={SetToLocalStorage} />
                </div>
            </div>
        </form>
    )
}

export default OrganizingInput;
