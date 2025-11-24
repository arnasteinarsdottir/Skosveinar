import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
          flex
          flex-col
          w-63
          h-130
          bg-[#4E2513]
        "
      >
        {/*  X BUTTON */}
        <DropdownMenuLabel className="flex justify-end pr-4 pt-2">
          <img
            src="src/Pictures/Veggieburger.svg"
            alt="close menu"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* MENU ITEMS — reordered so Um hefðina is top, LEITA last */}
        <div>
          <DropdownMenuItem className="flex justify-end mr-[2.94rem] font-cinzel text-[18px] uppercase text-[#F2ECDC]">
            <img
              src="src/Pictures/haticon.svg"
              alt="menu icon"
              className="flex"
            />
            Um hefðina
          </DropdownMenuItem>

          <DropdownMenuItem className="flex justify-end mr-[1.81rem] font-cinzel text-[18px] uppercase text-[#F2ECDC]">
            <img
              src="src/Pictures/staricon.svg"
              alt="menu icon"
              className="flex"
            />
            Skipuleggja
          </DropdownMenuItem>

          <DropdownMenuItem className="flex justify-end mr-[1.81rem] font-cinzel text-[18px] uppercase text-[#F2ECDC]">
            <img
              src="src/Pictures/shoeicon.svg"
              alt="menu icon"
              className="flex"
            />
            Óskalisti
          </DropdownMenuItem>

          <DropdownMenuItem className="flex justify-end mr-[1.81rem] font-cinzel text-[18px] uppercase text-[#F2ECDC]">
            <img
              src="src/Pictures/searchicon.svg"
              alt="menu icon"
              className="flex"
            />
            LEITA
          </DropdownMenuItem>
        </div>

        <div className="flex justify-end">
          <LanguageToggle />
        </div>

        <div className="flex justify-center mt-19">
          {/* Button */}
          <Button
            variant="outline"
            className="
              flex
              font-cinzel
              text-[18px]
              uppercase
              text-[#F2ECDC]
              w-39
              h-2.25rem
            "
          >
            <a href="#">Innskráning</a>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
