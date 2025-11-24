import {BurgerMenu} from "../Components/Burgermenu.tsx"; 

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        h-10
        max-w-[430px] mx-auto
        bg-[#F2ECDC]
        flex items-center justify-between
        px-4
        md:max-w-full
      "
    >
      {/* Logo */}
      <img
        src="src/Pictures/your-logo.svg"
        alt="Logo"
        className="w-10 h-10"
      />

      {/* Desktop navigation */}
      <div
        className="
          hidden md:flex gap-8
          font-cinzel text-[#4E2513] uppercase text-[1rem]
        "
      >
        <a href="#">Um hefðina</a>
        <a href="#">Óskalisti</a>
        <a href="#">Skipuleggja</a>
        <a href="#">Leita</a>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <BurgerMenu />
      </div>
    </nav>
  )
}
