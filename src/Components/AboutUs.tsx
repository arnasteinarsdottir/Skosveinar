function AboutUs() {
  return (
    <>
      <div className="w-full max-h-[550px] relative md:mb-30">
        {/* Background Image */}
        <img
          src="src/Pictures/last-frame.svg"
          className="w-full min-h-[500px] object-cover"
          alt="background-pic"
        />

    
        <div className="absolute inset-0 flex flex-col items-center text-justify  font-quicksand text-darkbrown justify-center z-20">
        
            <div className="w-[500px] p-10 md:text-xl">
              <h1 className="font-cinzel text-[24px] text-center mb-10 md:text-3xl">Um okkur</h1>
          <p>
            Skósveinar sér um jólasveinana: Hver kemur hvenær, einfaldar og
            skapandi óskalista hugmyndir að smágjöfum í skóinn og skipulag sem
            tekur tillit til buddu og umhverfis.
          </p>

          <p className="mt-4">
            Kjarninn er samfélagslegur sáttmáli um  jólasveinagjafir
            hófsemi,
            skýrt verðbil og samræmdar væntingar.
          </p>
          <p className="mt-4">Minna stress, meiri jólafriður</p>
          </div>
      
      <img className=" absolute
           min-w-[140px] max-w-[220px]
             bottom-[70px] 
             left-[75%]
             -z-10" src="src/Pictures/christmas-cat.png"></img>         
        </div>
      </div>
    </>
  );
}

export default AboutUs;
