import BlankSantaCard from "/src/Pictures/santa-card.svg";
import Stekkjastaur from "/src/Pictures/12Stekkjarstaur.png";
import Giljagaur from "/Images/13Giljagaur.png";
import Stúfur from "/Images/14Stufur.png";
import Þvörusleikir from "/Images/15Þvörusleikir.png";
import Pottaskefill from "/Images/16Pottaskefill.png"
import Askasleikir from "/Images/17Askasleikir.png";
import Hurðaskellir from "/Images/18Hurðaskellir.png";
import Skyrgámur from "/Images/19Skyrgámur.png";
import Bjúgnakrækir from "/Images/20Bjúgnakrækir.png";
import Gluggagægir from "/Images/21Gluggagægir.png";
import Gáttaþefur from "/Images/22Gáttaþefur.png";
import Ketkrókur from "/Images/23Ketkrókur.png";
import Kertasníkir from "/Images/24Kertasníkir.png"; 




type Props = {
    date: string;
    santanumber: number;
}

function SantaCard ({ date, santanumber }: Props) {
    console.log(santanumber);
    const SantaClauses = [
        Stekkjastaur,
        Giljagaur,
        Stúfur,
        Þvörusleikir,
        Pottaskefill,
        Askasleikir,
        Hurðaskellir,
        Skyrgámur,
        Bjúgnakrækir,
        Gluggagægir,
        Gáttaþefur,
        Ketkrókur,
        Kertasníkir
    ];


    return (
        <>
            <div
                className="w-[350px] h-60 bg-cover bg-no-repeat flex items-center justify-center"
                style={{ backgroundImage: `url(${BlankSantaCard})` }}
            >
                <div className="flex items-center justify-between w-2/3 gap-6">
                    <div className="flex flex-col items-center">
                        <p className="font-abhaya-libre font-extrabold text-[92px] text-darkred leading-none">{date === "Veldu dag" ? "12" : date[0] + date[1]}</p>
                        <p className="font-abhaya-libre font-extrabold text-5xl text-black leading-none">DES</p>
                    </div>
                    <img 
                        src={SantaClauses[santanumber]} 
                        alt="Jólasveinn"
                        className="w-36 h-auto object-contain" 
                    />
                </div>
            </div>
        </>
    )
}

export default SantaCard; 
