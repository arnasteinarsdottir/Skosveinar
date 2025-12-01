import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 px-4 pb-20 pt-20">
      <h1 className="text-[1.25rem] text-quicksand text-darkgreen md:text-[32px]">
        Frítt fyrir jólasveina
      </h1>

      {/* First button */}
        <button className=" h-12 w-[clamp(295px,60vw,519px)] bg-darkgreen text-background font-quicksand font-bold rounded-2xl">
            <Link to="/login">Skrá inn</Link>
        </button>
      

      {/* Second button */}
     
  <button className="h-12 w-[clamp(295px,60vw,519px)] border-darkgreen border-[1.5px] text-darkgreen font-quicksand font-bold rounded-2xl">
  <Link to="/login">Búa til aðgang</Link>
  </button>

 
    </div>
  );
}

export default LogIn;
