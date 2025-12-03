import { Link } from "react-router-dom";

function LoginPage() {
  return (
    < >
    {/* Login Page */}
<div className="bg-background w-full h-screen flex flex-col items-center justify-center ">
     {/* Logo */}
    <img className="mb-8" src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/5999fd72b710dfcc024388d672a5f812279bb99a/src/Pictures/logo-skosveinar-brown.svg" alt="Logo" />
     {/* User name, password, email */}
<div className="flex flex-col items-center justify-center gap-[1.31rem]">
  <div className="flex w-[20rem] h-12 border border-darkgreen rounded-[10px] items-center gap-3 px-3">
    <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/5999fd72b710dfcc024388d672a5f812279bb99a/src/Pictures/profileicon.svg" alt="Profile Icon"/>
    <input
      type="text"
      placeholder="Sláðu inn notandanafn"
      className="font-[Quicksand] flex-1 text-darkgreen text-[1rem] bg-transparent focus:outline-none"
    />
  </div>
  <div className="flex w-[20rem] h-12 border border-darkgreen rounded-[10px] items-center gap-3 px-3">
    <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/5999fd72b710dfcc024388d672a5f812279bb99a/src/Pictures/email-icon.svg" alt="Email Icon"/>
    <input type="email" placeholder="Sláðu inn netfang"
      className="font-[Quicksand] flex-1 text-darkgreen text-[1rem] bg-transparent focus:outline-none"
    />
  </div>

  <div className="flex w-[20rem] h-12 border border-darkgreen rounded-[10px] items-center gap-3 px-3">
    <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/5999fd72b710dfcc024388d672a5f812279bb99a/src/Pictures/password-icon.svg" alt="Password Icon"/>
    <input type="password" placeholder="Sláðu inn lykilorð" className=" font-[Quicksand] flex-1 text-darkgreen text-[1rem] bg-transparent focus:outline-none"
    />
  </div>

</div>
<div className="mt-10">
    <button className=" font-[Quicksand] font-bold w-56 h-11 bg-darkbrown rounded-[10px] text-white text-[1rem]">
      <Link to="/profilepage"> Innskráning </Link>
    </button>
    </div>
<div className="flex flex-col items-center justify-center gap-[1.31rem] mt-10 ">
          <div className="flex w-[20rem] h-12 border border-darkgreen rounded-[10px] items-center  gap-3 px-3 font-[Quicksand] text-darkgreen text-[1rem] bg-transparent focus:outline-none">
             <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/5999fd72b710dfcc024388d672a5f812279bb99a/src/Pictures/apple-icon.svg" alt="Profile Icon"/>
             <Link to="/profilepage">Skráðu þig inn með Apple</Link>
        </div>
              <div className="flex w-[20rem] h-12 border border-darkgreen rounded-[10px] items-center gap-3 px-3  font-[Quicksand] text-darkgreen text-[1rem]">
             <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/5999fd72b710dfcc024388d672a5f812279bb99a/src/Pictures/google-icon.svg" alt="Profile Icon"/>
            <Link to="/profilepage">Skráðu þig inn með Google</Link>
        </div>
   </div>     
</div>
    </>
  )
}

export default LoginPage