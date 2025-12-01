import BrownFilledButton from "./BrownFilledButton";

type Props = {
    inputGiftIdeas: string,
    inputGiftPrice: number
    updateGiftIdeas: (gift: string) => void
    updateGiftPrice: (price: string) => void  
    setToLocalStorage: () => void
}

function OrganizingInput ({inputGiftIdeas, inputGiftPrice, updateGiftIdeas, updateGiftPrice, setToLocalStorage}: Props) {

    return (
        <form>
            <div className="flex flex-col w-[350px]">
                <textarea
                    value = {inputGiftIdeas}
                    onChange = {(e) => updateGiftIdeas(e.target.value)}
                    placeholder="Skrá skógjafahugmyndir..."
                    className="h-44 md:h-[173px] bg-[#F4F4F0] border-[1.5px] border-darkbrown font-normal rounded-lg p-2 text-[#3E4140] font-quicksand resize-none focus:border-2 focus:border-[#6D726B] focus:outline-none focus:ring-0"
                />
                <div className="flex justify-between pt-6 gap-6">
                    <input
                        value = {inputGiftPrice} 
                        onChange = {(e) => updateGiftPrice(e.target.value)}
                        type="text"
                        placeholder="Verð"
                        className="h-12 md:h-9 w-[70%] bg-[#F4F4F0] border-[1.5px] border-darkbrown font-normal rounded-lg pl-2 text-[#3E4140] font-quicksand focus:border-2 focus:border-[#6D726B] focus:outline-none focus:ring-0"
                    />
                    <BrownFilledButton onClick={setToLocalStorage} />
                </div>
            </div>
        </form>
    )
}

export default OrganizingInput;
