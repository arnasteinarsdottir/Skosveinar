import BlankSantaCard from "../Pictures/santa-card.svg";

function SantaCard () {
    return (
        <>
            <div
                className="w-[350px] h-60 bg-cover bg-no-repeat flex items-center justify-center"
                style={{ backgroundImage: `url(${BlankSantaCard})` }}
            >
                <div className="flex items-center justify-between w-2/3">
                    <div className="flex flex-col items-center">
                        <p className="font-abhaya-libre font-extrabold text-[92px] text-darkred leading-none">12</p>
                        <p className="font-abhaya-libre font-extrabold text-5xl text-black leading-none">DES</p>
                    </div>
                    <div className="h-36 w-[127px] bg-blue-500">Placeholder box</div>
                </div>
            </div>
        </>
    )
}

export default SantaCard; 
