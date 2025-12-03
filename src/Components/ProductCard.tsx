import { useState } from "react";
import { Button } from "@/Components/ui/button";
import type { Product } from "./SearchGifts";
import { DecorativeBorder } from "@/Components/DecorativeBorder";

interface ProductCardProps {
  product: Product;
  isCardMode: boolean;
}

export function ProductCard({ product, isCardMode }: ProductCardProps) {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  console.log(showPopup); 
  console.log(selectedProduct); 

  const handleClick = () => {
    if (isCardMode) {
      setSelectedProduct(product);
      setShowPopup(true);
    } else {
      localStorage.removeItem("selectedCard");
    }
  };

  // ⭐ FIXED IMAGE URL HANDLING ⭐
  let imageUrl = product.image || "";

  // If API gives a relative path → add server URL
  if (imageUrl.startsWith("/")) {
    imageUrl = "http://89.160.200.111:3000" + imageUrl;
  }

  // If API uses http → upgrade to https if possible
  if (imageUrl.startsWith("http://")) {
    imageUrl = imageUrl.replace("http://", "https://");
  }

  return (
    <div className="relative margin-0 bg-[#EEE2D2] px-7 pt-7 pb-6 overflow-hidden">
      <DecorativeBorder />

      {/* Card content */}
      <img
        src={imageUrl}
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

    </div>
  );
}
