import type { Product } from "./SearchGifts";
import children from "@/children.json";
import { Button } from "@/Components/ui/button";

interface ChildrenPopUpProps {
  visible: boolean;
  productToSave: Product;
  onClose: () => void;
}

export function ChildrenPopUp({
  visible,
  productToSave,
  onClose,
}: ChildrenPopUpProps) {
  if (!visible) return null;

const handleSelect = (childName: string) => {
  if (!childName.trim()) return;

  const saved = localStorage.getItem("ChildrensCards");
  const updated: Record<string, Product[]> = saved ? JSON.parse(saved) : {};

if (!updated[childName]) {
  updated[childName] = [];
}

updated[childName].push({
  title: productToSave.title,
  price: Number(productToSave.price),
  image: productToSave.image,
  link: productToSave.link,
  store: productToSave.store,
  category: productToSave.category,
});

 

  localStorage.setItem("ChildrensCards", JSON.stringify(updated));
  onClose();
};


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] max-h-[80vh] overflow-y-auto">
        <h2 className="font-quicksand text-[20px] font-bold mb-4 text-darkgreen">Óska fyrir</h2>
        <ul className="space-y-2">
          {children.map((child, index) => (
            <li key={index}>
              <Button
                className="w-full bg-background text-darkred font-quicksand cursor-pointer border border-darkgreen"
                onClick={() => handleSelect(child.name)}
                
              >
                {child.name}
              </Button>
            </li>
          ))}
        </ul>
        <Button
          className="mt-4 w-full bg-darkgreen cursor-pointer text-white font-quicksand"
          onClick={onClose}
        >
          Loka
        </Button>
      </div>
    </div>
  );
}