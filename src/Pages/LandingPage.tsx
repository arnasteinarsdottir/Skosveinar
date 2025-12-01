
import AboutUs from "@/Components/AboutUs.tsx";
import Navbar from "@/Components/Navbar.tsx";
import { ResponsiveSlider } from "@/Components/responsive-slider";
import LogInLandigPage from "@/Components/LogInLandingPage.tsx";
import Carousel from "@/Components/carousel";

function LandingPage() {


    return (
        <>  
        <div className="pt-20">
        <div className="flex w-full justify-center">
            <Carousel/>
        </div>
        <Navbar/>
        <AboutUs />
        <LogInLandigPage />
        <h1></h1>
        <ResponsiveSlider items={[
            <div key="1" className="bg-blue-500 h-48 flex items-center justify-center text-white text-2xl">Item 1</div>,
            <div key="2" className="bg-blue-500 h-48 flex items-center justify-center text-white text-2xl">Item 2</div>,
            <div key="3" className="bg-blue-500 h-48 flex items-center justify-center text-white text-2xl">Item 3</div>,
            <div key="4" className="bg-blue-500 h-48 flex items-center justify-center text-white text-2xl">Item 3</div>, 
            <div key="5" className="bg-blue-500 h-48 flex items-center justify-center text-white text-2xl">Item 3</div>, 
            <div key="6" className="bg-blue-500 h-48 flex items-center justify-center text-white text-2xl">Item 3</div>


        ]} 
        
        />
    
        </div>
        </>
    );
    }
    export default LandingPage; 