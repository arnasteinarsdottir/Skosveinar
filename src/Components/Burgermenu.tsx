import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../Components Library/ui/button"
import LanguageToggle from "../Components Library/language-toggle"

export function BurgerMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Burger icon (mobile only) */}
      <img
        src="src/Pictures/hamburger-menu.svg"
        alt="menu"
        className="md:hidden cursor-pointer"
        onClick={() => setOpen(true)}
      />

      {/* FULL SCREEN MENU OVERLAY */}
      {open && (
        <div
          className="
            fixed inset-0
            bg-darkbrown
            text-background
            z-50
            flex
            flex-col
            p-10
            animate-fadeIn
          "
        >
          {/* Close button */}
          <div className="flex justify-end">
            <img
              src="src/Pictures/Veggieburger.svg"
              alt="close"
              className="w-8 h-8 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* Menu Items */}
          <nav className="mt-10 flex flex-col gap-6 font-cinzel text-3xl uppercase">
            <Link
              to="/search"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <img src="src/Pictures/searchicon.svg" alt="" /> Leita
            </Link>

            <Link
              to="/organize"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <img src="src/Pictures/staricon.svg" alt="" /> Skipuleggja
            </Link>

            <Link
              to="/wishlist"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <img src="src/Pictures/shoeicon.svg" alt="" /> Óskalisti
            </Link>

            <Link
              to="/abouttradition"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <img src="src/Pictures/hat-icon.svg" alt="" /> Um hefðina
            </Link>
          </nav>

          {/* Footer actions */}
          <div className="mt-auto flex flex-col items-center gap-10">
            {/* Language toggle */}
            <h1 className="font-cinzel font-bold"> ÍSLENSKA / ENGLISH</h1>

            {/* Login */}
            <Button
              variant="ghost"
              className="text-background text-2xl font-quicksand border h-12 px-12"
            >
              <Link to="/login">Innskráning</Link>
            </Button>

            {/* Signup */}
            <div className="font-quicksand text-background text-xl text-center">
              <p>Áttu ekki aðgang?</p>
              <Link to="/login" onClick={() => setOpen(false)}>
                Nýskráning
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
