import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import type { Product } from "./SearchGifts";
import { ChildrenPopUp } from "./ChildrenPopUp";
import { DecorativeBorder } from "@/Components/DecorativeBorder";
import { useState } from "react";

interface SearchResultsProps {
  results: Product[];
  isCardMode: boolean; // New prop to indicate card mode
}


export function SearchResults({ results, isCardMode }: SearchResultsProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div
      className="grid grid-cols-1 [@media(min-width:700px)]:grid-cols-2 [@media(min-width:970px)]:grid-cols-3 gap-6 mb-10 mt-4"
    >
      {results.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-[280px] bg-[#EEE2D2] px-7 pt-7 pb-6 overflow-hidden"
        >
          {/* Decorative brush border */}
          <DecorativeBorder />

          {/* Card content */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-32 object-cover rounded mb-4"
          />
          <h4 className="text-sm font-bold font-quicksand mt-2">{item.title}</h4>
          <h4 className="text-xs font-bold font-quicksand text-darkred">{item.price} kr</h4>
          <h5>
            <a href={item.link} className="text-sm font-quicksand text-darkgreen">
              {item.store}
            </a>
          </h5>
          <Button
            onClick={() => {
              if (isCardMode) {
                setSelectedProduct(item);   // Set the selected product
                setShowPopup(true);
              } else {
                localStorage.removeItem("selectedCard");
              }
            }}
            size="sm"
            className="mt-2 w-full font-bold font-quicksand bg-darkgreen text-white hover:bg-darkergreen cursor-pointer"
          >
            {isCardMode ? "Óska" : "Eyða"}
          </Button>
        </motion.div>
      ))}

      {showPopup && selectedProduct && (
        <ChildrenPopUp
          visible={showPopup}
          productToSave={selectedProduct}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
