import { BurgerMenu } from "../Components/Burgermenu.tsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="
      fixed top-0 left-0 right-0 z-50 
      h-22           
     md:bg-darkbrown
     bg-background
      flex items-center justify-between 
      px-10
      mx-auto 
      md:max-w-full
    ">
      
  {/* Logo */}
<Link to="/ProfilePage">
  {/* Mobile logo */}
  <img
    src="https://github.com/arnasteinarsdottir/Skosveinar/blob/main/src/Pictures/logo-brown-navbar.png?raw=true"
    alt="Logo"
    className="w-12 h-12 block md:hidden"
  />

  {/* Desktop logo */}
  <img
    src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/573cc37afd358cfe376d6255d41f792af4edb2d2/src/Pictures/logo-skosveinar.svg"
    alt="Logo"
    className="hidden md:block w-15 h-15"
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
<Link to="/search" className="flex flex-col items-center">
  <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/573cc37afd358cfe376d6255d41f792af4edb2d2/src/Pictures/searchicon.svg" />
  Leita
</Link>

<Link to="/Organize" className="flex flex-col items-center mt-1">
  <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/573cc37afd358cfe376d6255d41f792af4edb2d2/src/Pictures/shoeicon.svg" />
  Skipuleggja
</Link>

<Link to="/wishlist" className="flex flex-col items-center">
  <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/573cc37afd358cfe376d6255d41f792af4edb2d2/src/Pictures/staricon.svg" />
  Óskalisti
</Link>

<Link to="/AboutTradition" className="flex flex-col items-center">
  <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/573cc37afd358cfe376d6255d41f792af4edb2d2/src/Pictures/hat-icon.svg" />
  Um hefðina
</Link>

      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <BurgerMenu />
      </div>
    
    </nav>
  );
}
    