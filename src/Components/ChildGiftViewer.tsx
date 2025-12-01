import { useState, useEffect } from "react";
import type { Product } from "./SearchGifts";
import { DecorativeBorder } from "@/Components/DecorativeBorder";

export default function ChildGiftViewer() {
  const [childNames, setChildNames] = useState<string[]>([]);
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [childProducts, setChildProducts] = useState<Product[]>([]);

  // function to get gifts for a specific child
  const getGiftsForChild = (childName: string): Product[] => {
    const saved = localStorage.getItem("ChildrensCards");
    if (!saved) return [];

    try {
      const parsed: Record<string, Product[]> = JSON.parse(saved);
      return parsed[childName] || [];
    } catch (err) {
      console.error("errow", err);
      return [];
    }
  };

  useEffect(() => {
    const loadChildren = () => {
      const saved = localStorage.getItem("ChildrensCards");
      if (!saved) return "No children found";

      try {
        const parsed: Record<string, Product[]> = JSON.parse(saved);
        setChildNames(Object.keys(parsed));
      } catch (err) {
        console.error("Ошибка при чтении ChildrensCards:", err);
      }
    };

    loadChildren();
  }, []);

  const handleSelect = (name: string) => {
    setSelectedChild(name);
    setChildProducts(getGiftsForChild(name)); // retrieve gifts for selected child
  };

  return (
    <div >
      <h4 className="w-full flex flex-col items-center mt-[164px] text-darkgreen font-cinzel text-[25px] space-y-6">
        Óskalistar
      </h4>
           
      
      <div className="w-full max-w-[220px] self-start mt-2 px-[35px]">
        {/* Dropdown menu */}
        <select
          className="w-full p-2 border font-cinzel border-darkgreen  text-darkbrown rounded"
          value={selectedChild || ""}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="" disabled
          className="text-darkbrown bg-[#EEE2D2] font-quicksand">
            Veldu barn
          </option>
          {childNames.map((name) => (
            <option key={name} value={name} className="text-darkgreen  cursor-pointer font-cinzel">
              {name}
            </option>
          ))}
        </select>
      </div>

        {/* Product list */}
        {selectedChild && (
          <div className="grid grid-cols-1 [@media(min-width:700px)]:grid-cols-2 [@media(min-width:970px)]:grid-cols-3 gap-1 mb-10 px-[130px] mt-16"
>
            
            {childProducts.length === 0 ? (
              <p className="text-sm text-gray-500">Engar gjafir skráðar.</p>
            ) : (
              
              childProducts.map((product, index) => (
                <div
                  key={index}
                  
                  className="relative w-[280px] bg-[#EEE2D2] px-7 pt-7 pb-6 overflow-hidden"
                >
                  <DecorativeBorder />
                  
                  <img src={product.image} />
                  <h5 className="font-bold text-sm">{product.title}</h5>
                  <p className="text-xs text-darkred">{product.price} kr</p>
                  <a
                    href={product.link}
                    className="text-xs text-darkgreen underline"
                  >
                    {product.store}
                  </a>
                </div>
              ))
            )}
          </div>
        )}
      
    </div>
    
  );
}