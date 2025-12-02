function AboutUs() {
  return (
    <div
      className="
        w-full 
        relative 
        bg-no-repeat 
        bg-center 
        bg-cover 
        py-20
        md:py-32
        mt-20
      "
      style={{ backgroundImage: `url("src/Pictures/background-aboutus.svg")` }}
    >
      {/* Content */}
      <div className="flex flex-col items-center justify-center text-darkbrown font-quicksand z-20 relative px-6">

        <div className="max-w-[500px] text-center md:text-xl">
          <h1 className="font-cinzel text-[24px] md:text-3xl mb-10">
            Um okkur
          </h1>

          <p>
            Skósveinar sér um jólasveinana: Hver kemur hvenær, einfaldar og
            skapandi óskalista hugmyndir að smágjöfum í skóinn og skipulag sem
            tekur tillit til buddu og umhverfis.
          </p>

          <p className="mt-4">
            Kjarninn er samfélagslegur sáttmáli um jólasveinagjafir —
            hófsemi, skýrt verðbil og samræmdar væntingar.
          </p>

          <p className="mt-4">Minna stress, meiri jólafriður</p>
        </div>

        {/* Cat Image */}
        <img
          className="
            absolute
            bottom-0
            w-[150px]
            -right-8
            md:w-[220px]
            z-10
          "
          src="src/Pictures/christmas-cat.png"
          alt="Christmas Cat"
        />
      </div>
    </div>
  );
}

export default AboutUs;
