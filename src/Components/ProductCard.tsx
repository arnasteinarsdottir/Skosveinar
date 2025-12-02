import { useState } from "react";
import { Button } from "@/Components/ui/button";
import type { Product } from "./SearchGifts";
import { DecorativeBorder } from "@/Components/DecorativeBorder";
import { ChildrenPopUp } from "./ChildrenPopUp";

interface ProductCardProps {
  product: Product;
  isCardMode: boolean;
}

export function ProductCard({ product, isCardMode }: ProductCardProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClick = () => {
    if (isCardMode) {
      setSelectedProduct(product);
      setShowPopup(true);
    } else {
      localStorage.removeItem("selectedCard");
    }
  };

  // ⭐️⭐️ NEW LOGIC STARTS HERE ⭐️⭐️
  let secureImageUrl = product.image;

  // This checks if the image link is insecure (http://) 
  // and attempts to use the secure protocol (https://) instead.
  if (secureImageUrl && secureImageUrl.startsWith("http://")) {
    secureImageUrl = secureImageUrl.replace("http://", "https://");
  }
  // ⭐️⭐️ NEW LOGIC ENDS HERE ⭐️⭐️

  console.log("ORIGINAL IMAGE URL:", product.image);
  console.log("CLEANED IMAGE URL:", secureImageUrl);

  return (
    <div className="relative margin-0 bg-[#EEE2D2] px-7 pt-7 pb-6 overflow-hidden">
      {/* Decorative  border */}
      <DecorativeBorder />

      {/* Card content */}
      <img
        src={product.image} // ⬅️ Using the cleaned URL
        alt={product.title}
        className="w-full h-32 object-cover rounded mb-4"
      />

      <h4 className="text-sm font-bold font-quicksand mt-2">
        {product.title}
      </h4>

      <h4 className="text-xs font-bold font-quicksand text-darkred">
        {product.price} kr
      </h4>

      <h5>
        <a
          href={product.link}
          className="text-sm font-quicksand text-darkgreen"
        >
          {product.store}
        </a>
      </h5>

      <Button
        onClick={handleClick}
        size="sm"
        className="mt-2 w-full font-bold font-quicksand bg-darkgreen text-white hover:bg-darkergreen cursor-pointer"
      >
        {isCardMode ? "Óska" : "Eyða"}
      </Button>

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