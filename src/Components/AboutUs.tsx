

function AboutUs() {
  return (
    <div className="w-auto bg-no-repeat bg-center " style={{backgroundImage:`url("src/Pictures/Background-frame-new.svg")`}}>
      {/* TEXT */}
      <div className="flex flex-col items-center justify-center mt-10 p-10">
      <h1 className="
          flex
          justify-center
          items-center
      text-darkbrown
          text-center 
          font-cinzel
          font-bold
         text-[32px] ">
        Um Okkur
      </h1>
          <p className="font-quicksand  justify-center items-center font-[16px]">
            Jólasveinar sér um jólasveinana: Hver kemur hvenær, einfaldar og
            skapandi óskalista hugmyndir að smágjöfum í skóinn og skipulag sem
            tekur tillit til buddu og umhverfis.
          </p>

          <p className="font-quicksand font-[16px] mt-4">
            Kjarninn er samfélagslegur sáttmáli um jólasveinagjafir—hófsemi,
            skýrt verðbil og samræmdar væntingar.
          </p>

          <p className="font-quicksand font-[16px] mt-4">
            Minna stress, meiri jólafriður.
          </p>
        </div>

        {/* CAT */}
        <img
          src="src/Pictures/christmas-cat.png"
          alt="Christmas Cat"
        />
    </div>
  );
}

export default AboutUs;
