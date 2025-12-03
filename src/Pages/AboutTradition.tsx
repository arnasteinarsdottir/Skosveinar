import { useState } from "react";

import Navbar from "../Components/Navbar"; 
import Player from "../Components/Player";
import Carousel from "../Components/carousel";

const texts = [
    "Stekkjastaur kom fyrstur,\nstinnur eins og tré.\nHann laumaðist í fjárhúsin\nog lék á bóndans fé.\n\nHann vildi sjúga ærnar,\n-þá varð þeim ekki um sel,\nþví greyið hafði staurfætur,\n-það gekk nú ekki vel.",
    "Giljagaur var annar,\nmeð gráa hausinn sinn.\n-Hann skreið ofan úr gili\nog skaust í fjósið inn.\n\nHann faldi sig í básunum\nog froðunni stal,\nmeðan fjósakonan átti\nvið fjósamanninn tal.",
    "Stúfur hét sá þriðji,\nstubburinn sá.\nHann krækti sér í pönnu,\nþegar kostur var á.\n\nHann hljóp með hana í burtu\nog hirti agnirnar,\nsem brunnu stundum fastar\nvið barminn hér og þar.",
    "Sá fjórði, Þvörusleikir,\nvar fjarskalega mjór.\nOg ósköp varð hann glaður,\nþegar eldabuskan fór.\n\nÞá þaut hann eins og elding\nog þvöruna greip,\nog hélt með báðum höndum,\nþví hún var stundum sleip.",
    "Sá fimmti Pottaskefill,\nvar skrítið kuldastrá.\n-Þegar börnin fengu skófir\nhann barði dyrnar á.\n\nÞau ruku upp, til að gá að\nhvort gestur væri á ferð.\nÞá flýtti hann sér að pottinum\nog fékk sér góðan verð.",
    "Sá sjötti Askasleikir,\nvar alveg dæmalaus.\nHann fram undan rúmunum\nrak sinn ljóta haus.\n\nÞegar fólkið setti askana\nfyrir kött og hund,\nhann slunginn var að ná þeim\nog sleikja á ýmsa lund.",
    "Sjöundi var Hurðaskellir,\n-sá var nokkuð klúr,\nef fólkið vildi í rökkrinu\nfá sér vænan dúr.\n\nHann var ekki sérlega\nhnugginn yfir því,\nþó harkalega marraði\nhjörunum í.",
    "Skyrjarmur, sá áttundi,\nvar skelfilegt naut.\nHann hlemminn o’n af sánum\nmeð hnefanum braut.\n\nSvo hámaði hann í sig\nog yfir matnum gein,\nuns stóð hann á blístri\nog stundi og hrein.",
    "Níundi var Bjúgnakrækir,\nbrögðóttur og snar.\nHann hentist upp í rjáfrin\nog hnuplaði þar.\n\nÁ eldhúsbita sat hann\ní sóti og reyk\nog át þar hangið bjúga,\nsem engan sveik.",
    "Tíundi var Gluggagægir,\ngrályndur mann,\nsem laumaðist á skjáinn\nog leit inn um hann.\n\nEf eitthvað var þar inni\nálitlegt að sjá,\nhann oftast nær seinna\ní það reyndi að ná.",
    "Ellefti var Gáttaþefur\n-aldrei fékk sá kvef,\nog hafði þó svo hlálegt\nog heljarstórt nef.\n\nHann ilm af laufabrauði\nupp á heiðar fann,\nog léttur, eins og reykur,\ná lyktina rann.",
    "Ketkrókur, sá tólfti,\nkunni á ýmsu lag. -\nHann þrammaði í sveitina \ná Þorláksmessudag.\n\nHann krækti sér í tutlu,\nþegar kostur var á.\nEn stundum reyndist stuttur\nstauturinn hans þá.",
    "Þrettándi var Kertasníkir,\n-þá var tíðin köld,\nef ekki kom hann síðastur\ná aðfangadagskvöld.\n\nHann elti litlu börnin,\nsem brostu glöð og fín,\nog trítluðu um bæinn\nmeð tólgarkertin sín.",
]

function AboutTradition() {
    const [textIndex, setTextIndex] = useState(0);
    const showText = (number: number) => {
        setTextIndex(number);
        console.log("showing text", number);
    }
    return (
        <>
        <div className="pt-20"></div>
        <Navbar/>
        <div className="flex w-full justify-center mt-[-20px]">
            <Carousel changer={showText}/>
        </div>
        <div className="flex w-full justify-center mt-10">
            <pre className="whitespace-pre-line max-w-xl font-[quicksand] text-[16px] font-medium text-center">
                {texts[textIndex]}
            </pre>
        </div>
        <div className="mt-[-100px]">
            <Player/>
        </div>
        </>   
         )
}
export default AboutTradition;