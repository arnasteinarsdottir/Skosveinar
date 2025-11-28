

function AboutUs() {
return(
<div
  className="
    w-full
    h-[clamp(450px,60vw,500px)]
    bg-cover
    bg-center
    flex
    flex-col
    items-center
    justify-center
    text-darkbrown
    text-center
    mb-30
  "
  style={{
    backgroundImage: "url('src/Pictures/background-frame.svg')"
  }}
>
  <h1 className="font-cinzel font-bold text-[32px]">Um Okkur</h1>

  <p className="max-w-[500px] font-quicksand text-[16px] mt-4 text-justify p-10">
    .................. sér um jólasveinana: Hver kemur hvenær, einfaldar og
    skapandi óskalista hugmyndir að smágjöfum í skóinn og skipulag sem tekur
    tillit til buddu og umhverfis.
    <br />
    <p className="mt-4">Kjarninn er samfélagslegur sáttmáli um jólasveinagjafir—hófsemi, skýrt
    verðbil og samræmdar væntingar.</p>
    <br />
    <p className="mt-4">Minna stress, meiri jólafriður.</p>
  </p>
</div>
)
}
export default AboutUs;
