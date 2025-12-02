import { useState, useEffect } from "react";
import type { Product } from "./SearchGifts";
import { DecorativeBorder } from "@/Components/DecorativeBorder";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import DropDownChooseChild from "@/Components/DropDownChooseChild";




export default function ChildGiftViewer() {
  const [childNames, setChildNames] = useState<string[]>([]);
  const [selectedChild, setSelectedChild] = useState<string | undefined>(undefined);
  const [childProducts, setChildProducts] = useState<Product[]>([]);

  // function to get gifts for a specific child
  const getGiftsForChild = (childName: string): Product[] => {
    const saved = localStorage.getItem("ChildrensCards");
    if (!saved) return [];

    try {
      const parsed: Record<string, Product[]> = JSON.parse(saved);
      return parsed[childName] || [];
    } catch (err) {
      console.error("error", err);
      return [];
    }
  };
// load children from localStorage on component mount
  useEffect(() => {
    const loadChildren = () => {
      const saved = localStorage.getItem("ChildrensCards");
      if (!saved) return "No children found";

      try {
        const parsed: Record<string, Product[]> = JSON.parse(saved);
        setChildNames(Object.keys(parsed));
      } catch (err) {
        console.error("Error ChildrensCards:", err);
      }
    };

    loadChildren();
  }, []);

  const handleSelect = (name: string) => {
    setSelectedChild(name);
    setChildProducts(getGiftsForChild(name)); // retrieve gifts for selected child
  };

  return (
    <div 
      className="relative">
      <img
        src="src/Pictures/köttur.png"
        className="absolute top-24 right-22 z-0"
        alt="Jólaköttur"
      />
      <h4 className="w-full flex flex-col items-center mb-10 mt-40 text-darkbrown font-cinzel text-[37.5px] space-y-6">
        Óskalistar
      </h4>
           
      
      <div className="w-full max-w-[220px]  mt-2 px-[35px]">
        
        {/* Dropdown menu */}
        
        <DropDownChooseChild
          childNames={childNames}
          selectedChild={selectedChild}
          handleSelect={handleSelect}
        />
        

      </div>

        {/* Product list */}
        {selectedChild && (
          <div className="grid items-center grid-cols-1 [@media(min-width:700px)]:grid-cols-2 [@media(min-width:970px)]:grid-cols-3 gap-6 mb-16 px-[130px] mt-16">

            {childProducts.length === 0 ? (
              <h5 className="text-darkgreen font-quicksand mt-12 text-[20px] ">Engar gjafir skráðar</h5>
            ) : (
              
              childProducts.map((product, index) => (
                
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-[280px] bg-[#EEE2D2] px-7 pt-7 pb-6 overflow-hidden"
                  >
                    
                  <DecorativeBorder />
                          
                  <img
                    src={product.image}
                    alt={product.image}
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h4 className="text-sm font-bold font-quicksand mt-2">{product.title}</h4>
                  <h4 className="text-xs font-bold font-quicksand text-darkred">{product.price} kr</h4>
                  <h5>
                    <a href={product.link} className="text-sm font-quicksand text-darkgreen">
                      {product.store}
                    </a>
                  </h5>
                  <Button
                    onClick={() => {
                      const saved = localStorage.getItem("ChildrensCards");
                      if (!saved || !selectedChild) return;

                      try {
                        const parsed: Record<string, Product[]> = JSON.parse(saved);

                        // products for the selected child without the deleted one
                        const updatedProducts = (parsed[selectedChild] || []).filter(
                          (p) => p.title !== product.title
                        );

                        // reassign updated products
                        parsed[selectedChild] = updatedProducts;

                        // save back to localStorage
                        localStorage.setItem("ChildrensCards", JSON.stringify(parsed));

                        // update state
                        setChildProducts(updatedProducts);
                      } catch (err) {
                        console.error("Ошибка при удалении:", err);
                      }
                    }}
                    size="sm"
                    className="mt-2 w-full font-bold font-quicksand bg-darkgreen text-white hover:bg-darkergreen cursor-pointer"
                  >
                    Eyða
                  </Button>

                </motion.div>
              ))
            )}
          </div>
        )}
      
    </div>
    
  );
}