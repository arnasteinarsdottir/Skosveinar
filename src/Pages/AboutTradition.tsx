
import Navbar from "../Components/Navbar.tsx"; 
import Player from "../Components/Player.tsx";
import Carousel from "../Components/carousel";

function AboutTradition() {
    return (
        <>
        <div className="pt-20"></div>
        <Navbar/>
         <div className="flex w-full justify-center">
          <Carousel />
        </div>
        <Player/>

        </>   
         )
}
export default AboutTradition;
