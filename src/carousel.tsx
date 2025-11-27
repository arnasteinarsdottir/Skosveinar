import {useState} from 'react';

const images = [
    'Images/12Stekkjarstaur.png',
    'Images/13Giljagaur.png',
    'Images/14Stufur.png',
    'Images/15Þvörusleikir.png',
    'Images/16Pottaskefill.png',
    'Images/17Askasleikir.png',
    'Images/18Hurðaskellir.png',
    'Images/19Skyrgámur.png',
    'Images/20Bjúgnakrækir.png',
    'Images/21Gluggagægir.png',
    'Images/22Gáttaþefur.png',
    'Images/23Ketkrókur.png',
    'Images/24Kertasníkir.png',
]

const santas =[
    "Stekkjastaur",
    "Giljagaur",
    "Stúfur",
    "Þvörusleikir",
    "Pottaskefill",
    "Askasleikir",
    "Hurðaskellir",
    "Skyrgámur",
    "Bjúgnakrækir",
    "Gluggagægir",
    "Gáttaþefur",
    "Ketkrókur",
    "Kertasníkir",
]

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    //const [santaName, setSantaName] = useState(santas[0]);
    const totalImages = images.length;

    const [isMovingLeft, setIsMovingLeft] = useState(false);
    const [isMovingRight, setIsMovingRight] = useState(false);

    const goToPrevious = () => {
        setIsMovingRight(true);
        setTimeout(() => {
            setIsMovingRight(false);
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
        }, 400);
    };
    const goToNext = () => {
        setIsMovingLeft(true);
        setTimeout(() => {
            setIsMovingLeft(false);
            setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
        }, 400);
        //setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
    }
 // Helper to get image index with wrapping
    const getImageIndex = (offset: number) => {
        const index = currentIndex + offset;
        if (index < 0) return index + totalImages;
        if (index >= totalImages) return index % totalImages;
        return index;
    };

    console.log((currentIndex +2) % totalImages)
    return (
        <div>
            <div className='grid grid-rows-8 grid-cols-7 gap-2 mt-8 w-[672px] overflow-x-hidden overflow-y-visible pt-8'>
                
                {/* Outside left */}
                <img 
                    src={images[getImageIndex(-3)]}
                    alt={`Jólasveinn ${currentIndex + 1}`}
                    className={`row-span-7 w-[80px] h-[80px] brightness-60 ml-[-88px] ${isMovingLeft && "transition-all duration-400 ease-in-out ml-[-236px]"} ${isMovingRight && "transition-all duration-400 ease-in-out ml-[0px]"}`}
                />

                {/* Small left */}
                    <img 
                        src={images[getImageIndex(-2)]}
                        alt={`Jólasveinn ${currentIndex + 1}`}
                        className={`row-span-7 w-[80px] h-[80px] brightness-60 ${isMovingRight && "transition-all duration-400 ease-in-out brightness-80 scale-175 origin-top-left"}`}
                    />

                {/* Medium left */}
                    <img 
                        src={images[getImageIndex(-1)]}
                        alt={`Jólasveinn ${currentIndex + 1}`}
                        className={`row-span-7 w-[140px] h-[140px] brightness-80 ${isMovingLeft && "transition-all duration-400 ease-in-out brightness-[60%] scale-57 origin-top-right"} ${isMovingRight && "transition-all duration-400 ease-in-out ml-[60px] brightness-100 scale-143 origin-top-left"}`}
                    />

                {/* Large center */}
                
                    <img 
                        src={images[currentIndex]}
                        alt={`Jólasveinn ${currentIndex + 1}`} 
                        className={`row-span-7 w-[200px] h-[200px] ${isMovingLeft && "transition-all duration-400 ease-in-out brightness-80 scale-70 origin-top-left"} ${isMovingRight && "transition-all duration-400 ease-in-out brightness-80 scale-70 origin-top-right"}`}
                    />
                    
                    

                {/* Medium right */}
                    <img 
                        src={images[getImageIndex(+1)]}
                        alt={`Jólasveinn ${currentIndex + 1}`}
                        className={`row-span-7 w-[140px] h-[140px] brightness-80 ${isMovingLeft && "transition-all duration-400 ease-in-out brightness-100 scale-143 origin-top-right"} ${isMovingRight && "transition-all duration-400 ease-in-out brightness-[60%] scale-57 origin-top-left"}`}
                    />

                {/* Small right */}
                    <img 
                        src={images[getImageIndex(+2)]}
                        alt={`Jólasveinn ${currentIndex + 1}`} 
                        className={`row-span-7 w-[80px] h-[80px] brightness-60 ${isMovingLeft && "transition-all duration-400 ease-in-out brightness-80 scale-175 origin-top-left"}`}
                    />

                {/* Outside right */}
                    <img 
                        src={images[getImageIndex(+3)]}
                        alt={`Jólasveinn ${currentIndex + 1}`}
                        className='row-span-7 w-[80px] h-[80px] ml-[60px] brightness-60'
                    />
                <p>Stekkjastaur</p>
                <p>Stekkjastaur</p>
                <p>Stekkjastaur</p>
                <p>Stekkjastaur</p>
                <p>Stekkjastaur</p>
                <p>Stekkjastaur</p>
                <p>Stekkjastaur</p>
            </div>
            <div className='flex justify-center gap-20 mb-4'>
                <button 
                    onClick={goToPrevious}
                    disabled={isMovingRight}
                    className='flex justify-center items-center bg-[#4E2513] w-[53px] h-7 mt-4 rounded-lg hover:cursor-pointer'>
                    <img 
                        src="Images/ArrowLeft.svg" 
                        alt="Previous" 
                    />
                </button>
                <button 
                    onClick={goToNext}
                    disabled={isMovingLeft}
                    className='flex justify-center items-center bg-[#4E2513] w-[53px] h-7 mt-4 rounded-lg hover:cursor-pointer'>
                    <img 
                        src="Images/ArrowRight.svg" 
                        alt="Next"
                    />
                </button>
            </div>
        </div>
    );
}
export default Carousel;