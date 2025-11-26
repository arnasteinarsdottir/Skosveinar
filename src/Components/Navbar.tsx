import { BurgerMenu } from "../Components/Burgermenu.tsx";

export default function Navbar() {
  return (
    <nav className="
      fixed top-0 left-0 right-0 z-50 
      h-16             
      bg-darkbrown
      flex items-center justify-between 
      px-4 
       mx-auto md:max-w-full
    ">
      
      {/* Logo */}
      <img 
        src="src/Pictures/logo.svg" 
        alt="Logo" 
        className="w-12 h-12" 
      />

      {/* Desktop navigation */}
      <div className="
        hidden md:flex 
        gap-10 
        font-cinzel
        uppercase
        text-background
        text-[20px]
        items-center
        mr-10
      ">
        <a className="flex flex-col items-center " href="#">
          <img src="src/Pictures/searchicon.svg" />
          Leita
        </a>
        <a className="flex flex-col items-center mt-1" href="#">
          <img src="src/Pictures/shoeicon.svg" />
         Skipuleggja
        </a>
           <a className="flex flex-col items-center " href="#">
          <img src="src/Pictures/staricon.svg" />
         Óskalisti
        </a>
        <a className="flex flex-col items-center " href="#">
          <img src="src/Pictures/hat-icon.svg" />
          Um hefðina
        </a>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <BurgerMenu />
      </div>

    </nav>
  );
}
