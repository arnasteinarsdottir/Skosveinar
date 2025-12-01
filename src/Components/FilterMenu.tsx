import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Slider } from "@/Components/ui/slider";
import { Checkbox } from "@/Components/ui/checkbox";

interface FilterMenuProps {
  categories: string[];
  stores: string[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedStores: string[];
  setSelectedStores: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  handleSearch: () => void;
}

export function FilterMenu({
  categories,
  stores,
  selectedCategories,
  setSelectedCategories,
  selectedStores,
  setSelectedStores,
  priceRange,
  setPriceRange,
  handleSearch,
}: FilterMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="w-[360px] space-y-4 border bg-lightbackground rounded-md p-4 bg-muted/50 overflow-hidden"
    >
      <div className="flex flex-row gap-20">
        {/* categories */}
        <div>
          <p className="text-[16px] font-quicksand text-darkgreen font-medium mb-2">
            Flokkur
          </p>
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex text-[12px] font-quicksand items-center gap-2 mb-1"
            >
              <Checkbox
                className="bg-white border-darkgreen"
                checked={selectedCategories.includes(cat)}
                onCheckedChange={(checked) =>
                  setSelectedCategories((prev) =>
                    checked ? [...prev, cat] : prev.filter((c) => c !== cat)
                  )
                }
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>

        {/* stores */}
        <div>
          <p className="text-[16px] font-quicksand text-darkgreen font-medium mb-1">
            Verslanir
          </p>
          {stores.map((store) => (
            <label
              key={store}
              className="flex text-[12px] font-quicksand items-center gap-2 mb-1"
            >
              <Checkbox
                className="bg-white border-darkgreen"
                checked={selectedStores.includes(store)}
                onCheckedChange={(checked) =>
                  setSelectedStores((prev) =>
                    checked ? [...prev, store] : prev.filter((s) => s !== store)
                  )
                }
              />
              <span>{store}</span>
            </label>
          ))}
        </div>
      </div>

      {/* price */}
      <div>
        <p className="text-[16px] font-quicksand text-darkgreen font-medium mb-2">
          Verð
        </p>
        <Slider
          className="h-0.5 bg-darkgreen"
          defaultValue={priceRange}
          min={0}
          max={5000}
          step={100}
          onValueChange={(val) => setPriceRange(val as [number, number])}
        />
        <div className="text-[12px] font-quicksand mt-2 text-darkgreen">
          {priceRange[0]} kr – {priceRange[1]} kr
        </div>
      </div>

      <Button
        className="w-full mt-0 text-white font-bold font-quicksand bg-darkgreen cursor-pointer"
        onClick={handleSearch}
      >
        Leita
      </Button>
    </motion.div>
  );
}
