import { useState, useEffect } from "react";
import type { Product } from "../SearchPage/SearchGifts";
import { DecorativeBorder } from "@/Components/SearchPage/DecorativeBorder";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import DropDownChooseChild from "@/Components/WishListPage/DropDownChooseChild";




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
    // Main container
    <div 
      className="relative min-h-screen mx-auto flex flex-col items-center min-w-[430px] max-[430px]:px-[35px]">
      <img
        
        className="absolute top-50 z-0 [@media(min-width:430px)]:right-15 [@media(max-width:1440px)]:right-30"
        src="https://github.com/arnasteinarsdottir/Skosveinar/blob/main/src/Pictures/k%C3%B6ttur.png?raw=true"
        alt="Jólaköttur"
      />
      {/* Main title */}
      <h4 className="w-full flex flex-col items-center mb-10 mt-20 text-darkbrown font-cinzel text-[37.5px] space-y-6">
        Óskalisti
      </h4>
           
      
      <div className=" w-full flex flex-col items-center ">
        
        {/* Dropdown menu */}
        
        <DropDownChooseChild
          childNames={childNames}
          selectedChild={selectedChild}
          handleSelect={handleSelect}
        />
        

      </div>

        {/* Product list */}
        {selectedChild && (
          <div className="grid grid-cols-1 [@media(min-width:700px)]:grid-cols-2 [@media(min-width:970px)]:grid-cols-3 gap-6 mb-10 mt-10">

            {childProducts.length === 0 ? (
              <h5 className="text-darkgreen font-quicksand mt-10 text-[20px] ">Engar gjafir skráðar</h5>
            ) : (
              
              childProducts.map((product, index) => (
                
                // Animated product card
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-[280px] bg-[#EEE2D2] px-7 pt-7 pb-6 overflow-hidden"
                  >
                   {/* Decorative border component  */}
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