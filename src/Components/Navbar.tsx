import { BurgerMenu } from "../Components/Burgermenu.tsx";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="
      fixed top-0 left-0 right-0 z-50 
      h-22           
      bg-darkbrown
      flex items-center justify-between 
      px-10
      mx-auto 
      md:max-w-full
    ">
      
      {/* Logo */}
<Link to="/ProfilePage">
  <img
src="src/Pictures/logo-skosveinar.svg"
    alt="Logo"
    className="w-12 h-12"
  />
</Link>
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
        <a className="flex flex-col items-center " href="/search">
          <img src="@/Pictures/searchicon.svg" />
          Leita
        </a>
        <a className="flex flex-col items-center mt-1" href="/Organize">
          <img src="src/Pictures/shoeicon.svg" />
         Skipuleggja
        </a>
           <a className="flex flex-col items-center " href="/wishlist">
          <img src="src/Pictures/staricon.svg" />
         Óskalisti
        </a>
        <a className="flex flex-col items-center " href="/AboutTradition">
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
    