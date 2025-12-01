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
    'Images/24Kertasníkir.png'
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
    "Kertasníkir"
]

const dates =[
    "12. des",
    "13. des",
    "14. des",
    "15. des",
    "16. des",
    "17. des",
    "18. des",
    "19. des",
    "20. des",
    "21. des",
    "22. des",
    "23. des",
    "24. des"
]

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
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
    }
    
    const getImageIndex = (offset: number) => {
        const index = currentIndex + offset;
        if (index < 0) return index + totalImages;
        if (index >= totalImages) return index % totalImages;
        return index;
    };

    return (
        <div className='min-w-[356px]'>
            <div className='flex items-start gap-2 w-[356px] md:w-[672px] pt-8 overflow-hidden'>
                
                {/* Outside left */}
                <div className={`inline-block ml-[-176px] md:ml-[-88px] ${isMovingLeft && "transition-all duration-400 ease-in-out ml-[-280px] md:ml-[-176px]"} ${isMovingRight && "transition-all duration-400 ease-in-out md:ml-[0px]"}`}>
                    <img 
                        src={images[getImageIndex(-3)]}
                        alt={santas[getImageIndex(-3)]}
                        className="w-[80px] brightness-60"
                    />
                    <p className='w-[80px] font-[quicksand] text-[10px] font-semibold text-center'>
                        {santas[getImageIndex(-3)]}
                    </p>
                </div>

                {/* Small left */}
                <div className={`inline-block ${isMovingRight && "transition-all duration-400 ease-in-out scale-125 md:scale-175 origin-top-left ml-[88px] md:ml-[0px]"}`}>
                    <img 
                        src={images[getImageIndex(-2)]}
                        alt={santas[getImageIndex(-2)]}
                        className={`w-[80px] brightness-60 ${isMovingRight && "transition-all duration-400 ease-in-out brightness-[80%]"}`}
                    />
                    <p className='w-[80px] font-[quicksand] text-[10px] font-semibold text-center'>
                        {santas[getImageIndex(-2)]}
                    </p>
                </div>

                {/* Medium left */}
                <div className={`inline-block ${isMovingLeft && "transition-all duration-400 ease-in-out scale-[57%] md:scale-[57%] origin-top-left ml-[-4px] md:ml-[0px]"} ${isMovingRight && "transition-all duration-400 ease-in-out scale-140 md:scale-143 origin-top-left ml-[20px] md:ml-[60px]"}`}>
                    <img 
                        src={images[getImageIndex(-1)]}
                        alt={santas[getImageIndex(-1)]}
                        className={`w-[100px] md:w-[140px] brightness-80 ${isMovingLeft && "transition-all duration-400 ease-in-out brightness-[60%]"} ${isMovingRight && "transition-all duration-400 ease-in-out brightness-[100%]"}`}
                    />
                    <p className={`w-[100px] md:w-[140px] font-[quicksand] text-[12.5px] md:text-[17.5px] font-semibold text-center`}>
                        {santas[getImageIndex(-1)]}
                    </p>
                </div>

                {/* Large center*/}
                <div className={`inline-block ${isMovingLeft && "transition-all duration-400 ease-in-out scale-[71.5%] md:scale-[70%] origin-top-left ml-[px] md:ml-[-60px]"} ${isMovingRight && "transition-all duration-400 ease-in-out scale-[71.5%] md:scale-[70%] origin-top-right"}`}>
                    <a href="#">
                        <img 
                            src={images[currentIndex]}
                            alt={santas[currentIndex]} 
                            className={`w-[140px] md:w-[200px] ${isMovingLeft && "transition-all duration-400 ease-in-out brightness-[80%]"} ${isMovingRight && "transition-all duration-400 ease-in-out brightness-[80%]"}`}
                        />
                        <p className={`w-[140px] md:w-[200px] font-[quicksand] text-[17.5px] md:text-[25px] font-semibold text-center`}>
                            {santas[currentIndex]}
                        </p>
                    </a>
                </div>

                {/* Medium right*/}
                <div className={`inline-block ${isMovingLeft && "transition-all duration-400 ease-in-out scale-140 md:scale-143 origin-top ml-[-20px] md:ml-[-30px]"} ${isMovingRight && "transition-all duration-400 ease-in-out scale-57 origin-top-right ml-[-30px] md:ml-[-60px]"}`}>
                    <img 
                        src={images[getImageIndex(+1)]}
                        alt={santas[getImageIndex(+1)]}
                        className={`w-[100px] md:w-[140px] brightness-80 ${isMovingLeft && "transition-all duration-400 ease-in-out brightness-[100%]"} ${isMovingRight && "transition-all duration-400 ease-in-out brightness-[60%]"}`}
                    />
                    <p className='w-[100px] md:w-[140px] font-[quicksand] text-[12.5px] md:text-[17.5px] font-semibold text-center'>
                        {santas[getImageIndex(+1)]}
                    </p>
                </div>

                {/* Small right*/}
                <div className={`inline-block ${isMovingLeft && "transition-all duration-400 ease-in-out scale-125 md:scale-175 origin-top ml-[30px] md:ml-[60px]"}`}>
                    <img 
                        src={images[getImageIndex(+2)]}
                        alt={santas[getImageIndex(+2)]} 
                        className={`w-[80px] brightness-60 ${isMovingLeft && "transition-all duration-400 ease-in-out brightness-[80%]"}`}
                    />
                    <p className='w-[80px] font-[quicksand] text-[10px] font-semibold text-center'>
                        {santas[getImageIndex(+2)]}
                    </p>
                </div>

                {/* Outside right*/}
                <div className={`inline-block ${isMovingLeft && "transition-all duration-400 ease-in-out ml-[30px]"} ${isMovingRight && "transition-all duration-400 ease-in-out mr-[88px]"}`}>
                        <img 
                            src={images[getImageIndex(+3)]}
                            alt={santas[getImageIndex(+3)]}
                            className='w-[80px] brightness-60'
                        />
                        <p className='w-[80px] font-[quicksand] text-[10px] font-semibold text-center'>
                            {santas[getImageIndex(+3)]}
                        </p>
                </div>
            </div>
            <div className='flex justify-between items-center w-full px-4 md:px-[186px]'>
                <button 
                    onClick={goToPrevious}
                    disabled={isMovingRight}
                    className='flex justify-center items-center bg-[#4E2513] w-[53px] h-7 rounded-lg hover:cursor-pointer'>
                    <img 
                        src="Images/ArrowLeft.svg" 
                        alt="Previous" 
                    />
                </button>
                <p className='font-[quicksand] text-[16px] md:text-[20px] font-semibold'>
                    {dates[currentIndex]}
                </p>
                <button 
                    onClick={goToNext}
                    disabled={isMovingLeft}
                    className='flex justify-center items-center bg-[#4E2513] w-[53px] h-7 rounded-lg hover:cursor-pointer'>
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