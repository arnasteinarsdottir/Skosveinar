import { BurgerMenu } from "../../Components/Navbar/Burgermenu.tsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="
      fixed top-0 left-0 right-0 z-50 
      h-22           
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
    src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/aa311c4150c233f3042274f242fdd928c3152858/src/Pictures/logo-brown-navbar.svg"
    alt="Logo"
    className="w-12 h-12 block md:hidden"
  />

  {/* Desktop logo */}
  <img
    src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/aa311c4150c233f3042274f242fdd928c3152858/src/Pictures/logo-brown-navbar.svg"
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
        text-darkbrown
        text-[20px]
        items-center
        mr-10

      ">
<Link to="/search" className="flex flex-col items-center">
  <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/0f3bac7bbc26d8008d0ed71e29a7b20c6808b67f/src/Pictures/brown-searchicon.svg" />
  Leita
</Link>

<Link to="/Organize" className="flex flex-col items-center">
  <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/0f3bac7bbc26d8008d0ed71e29a7b20c6808b67f/src/Pictures/brown-organize-icon.svg" />
  Skipuleggja
</Link>

<Link to="/wishlist" className="flex flex-col items-center">
  <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/0f3bac7bbc26d8008d0ed71e29a7b20c6808b67f/src/Pictures/brown-wishlist-icon.svg" />
  Óskalisti
</Link>

<Link to="/AboutTradition" className="flex flex-col items-center">
  <img src="https://raw.githubusercontent.com/arnasteinarsdottir/Skosveinar/0f3bac7bbc26d8008d0ed71e29a7b20c6808b67f/src/Pictures/brown-hat-icon.svg" />
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
    