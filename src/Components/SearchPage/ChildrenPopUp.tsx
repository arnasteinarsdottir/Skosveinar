import type { Product } from "./SearchGifts";
import { Button } from "@/Components/ui/button";
import { useEffect, useState } from "react";

// Props type definition for the ChildrenPopUp component
interface ChildrenPopUpProps {
  visible: boolean;
  productToSave: Product;
  onClose: () => void;
}

// Component for displaying a popup to select a child
export function ChildrenPopUp({
  visible,
  productToSave,
  onClose,
}: ChildrenPopUpProps) {

// Type definitions for child data
type RawChild = { name?: unknown };
type Child = { name: string };

// State to hold the list of children
const [children, setChildren] = useState<Child[]>([]);

// Effect to load children from localStorage when the popup becomes visible
useEffect(() => {
  if (!visible) return;
  //
  const stored = localStorage.getItem("children") || "[]";

  // Parse and normalize the stored children data
  try {
    const parsed = JSON.parse(stored);

    // Check if parsed data is an array
    if (Array.isArray(parsed)) {
      const normalized: Child[] = parsed.map((item: RawChild) => ({
        name: typeof item.name === "string" ? item.name : "",
      }));

      // Update state with normalized children data
      setTimeout(() => setChildren(normalized), 0);
    } else {
      console.warn("Invalid children format in localStorage");
      setTimeout(() => setChildren([]), 0);
    }
    // Handle JSON parsing errors
  } catch (err) {
    console.error("Failed to parse children from localStorage:", err);
    setTimeout(() => setChildren([]), 0);
  }
}, [visible]);

  // Handler for selecting a child
  const handleSelect = (childName: string) => {
    if (!childName.trim()) return;

    // Retrieve existing saved products for children
    const saved = localStorage.getItem("ChildrensCards");
    const updated: Record<string, Product[]> = saved ? JSON.parse(saved) : {};

    // Initialize array for the selected child if it doesn't exist
    if (!updated[childName]) {
      updated[childName] = [];
    }

    // Add the product to the selected child's list
    updated[childName].push({
      title: productToSave.title,
      price: Number(productToSave.price),
      image: productToSave.image,
      link: productToSave.link,
      store: productToSave.store,
      category: productToSave.category,
    });

    // Save the updated data back to localStorage
    localStorage.setItem("ChildrensCards", JSON.stringify(updated));
    onClose();
  };
  
  if (!visible) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] max-h-[80vh] overflow-y-auto">
        {/* Popup title */}
        <h2 className="text-[20px] font-bold mb-4 text-darkgreen">
          Óska fyrir
        </h2>
        {/* List of children to choose from */}
        <ul className="space-y-2">
          {children.length > 0 ? (
            // Map through children and create a button for each
            children.map((child, index) => (
              <li key={index}>
                <Button
                  className="w-full bg-background text-darkred font-cinzel cursor-pointer border border-darkgreen"
                  onClick={() => handleSelect(child.name)}
                >
                  {child.name}
                </Button>
              </li>
            ))
          ) : (
            <p className="text-sm text-darkbrown font-quicksand">
              Engin börn skráð ennþá.
            </p>
          )}
        </ul>
        
        {/* Close button */}
        <Button
          className="mt-4 w-full bg-darkgreen cursor-pointer text-white  font-quicksand hover:bg-darkergreen"
          onClick={onClose}
        >
          Loka
        </Button>
      </div>
    </div>
  );
}