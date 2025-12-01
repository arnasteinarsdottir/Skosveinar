type Props = {
    TotalPrice: number
}

function TotalPriceCalculator ({TotalPrice}: Props) {
    return (
        <>
            <div className="flex flex-col">
                <p className="font-quicksand font-semibold text-darkbrown text-base pb-0.5">Heildarkostnaður</p>
                <div 
                    className="h-12 w-64  bg-lightbackground border-[1.5px] border-darkbrown font-normal rounded-lg p-2 text-[#3E4140] font-quicksand resize-none focus:border-2 focus:border-[#6D726B] focus:outline-none focus:ring-0"
                >
                    {TotalPrice}
                </div>
            </div>
        </>
    )
}

export default TotalPriceCalculator;