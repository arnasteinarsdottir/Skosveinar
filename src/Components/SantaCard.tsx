import BlankSantaCard from "../Pictures/santa-card.svg";
import Stekkjastaur from "../Pictures/12Stekkjarstaur.png";

type Props = {
    date: string;
}

function SantaCard ({ date }: Props) {
    return (
        <>
            <div
                className="w-[350px] h-60 bg-cover bg-no-repeat flex items-center justify-center"
                style={{ backgroundImage: `url(${BlankSantaCard})` }}
            >
                <div className="flex items-center justify-between w-2/3">
                    <div className="flex flex-col items-center">
                        <p className="font-abhaya-libre font-extrabold text-[92px] text-darkred leading-none">{date === "Veldu dag" ? "12" : date[0] + date[1]}</p>
                        <p className="font-abhaya-libre font-extrabold text-5xl text-black leading-none">DES</p>
                    </div>
                    <img src={Stekkjastaur} alt="Stekkjastaur" />
                </div>
            </div>
        </>
    )
}

export default SantaCard; 
