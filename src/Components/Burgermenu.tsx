import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../Components Library/ui/dropdown-menu"
import { Button } from "../Components Library/ui/button"
import LanguageToggle from "../Components Library/language-toggle"

export function BurgerMenu() {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      
      {/* Trigger */}
      <DropdownMenuTrigger asChild>
        <img
          src="src/Pictures/christmasburger.svg"
          alt="menu icon"
          onClick={() => setOpen(true)}
        />
      </DropdownMenuTrigger>

      {/* Menu */}
      <DropdownMenuContent
        className="
          md:hidden
          flex flex-col
          w-screen h-screen
          bg-darkbrown
          border-0 shadow-none rounded-none
        "
      >
        {/* X button */}
        <DropdownMenuLabel className="flex justify-end pr-4 pt-[1.69rem] pb-24">
          <img
            src="src/Pictures/Veggieburger.svg"
            alt="close menu"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </DropdownMenuLabel>

        {/* Menu items */}
        <div>
          <DropdownMenuItem className="flex justify-start ml-12 font-cinzel text-[1.75rem] uppercase text-background">
            <img src="src/Pictures/searchicon.svg" alt="menu icon" />
            Leita
          </DropdownMenuItem>

          <DropdownMenuItem className="flex justify-start ml-12 font-cinzel text-[1.75rem] uppercase text-background">
            <img src="src/Pictures/staricon.svg" alt="menu icon" />
            Skipuleggja
          </DropdownMenuItem>

          <DropdownMenuItem className="flex justify-start ml-12 font-cinzel text-[1.75rem] uppercase text-background">
            <img src="src/Pictures/shoeicon.svg" alt="menu icon" />
            Óskalisti
          </DropdownMenuItem>

          <DropdownMenuItem className="flex justify-start ml-12 font-cinzel text-[1.75rem] uppercase text-background">
            <img src="src/Pictures/hat-icon.svg" alt="menu icon" />
            Um hefðina
          </DropdownMenuItem>
        </div>

        {/* Language toggle */}
        <div className="flex justify-end">
          <LanguageToggle />
        </div>

        {/* Login button */}
        <div className="flex justify-center mt-19">
          <Button
            variant="ghost"
            className="
              flex
              font-quicksand
              text-[18px]
              text-background
              w-56
              font-bold
              h-[3.38rem]
              bg-transparent
              border
            "
          >
            <a href="#">Innskráning</a>
          </Button>
        </div>

        {/* Signup text */}
        <div className="flex flex-col items-center justify-center  font-medium mt-6 gap-2 text-background font-[quicksand]">
          <p>Áttu ekki aðgang?</p>
          <a href="#">
            <p>Nýskráning</p>
          </a>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


