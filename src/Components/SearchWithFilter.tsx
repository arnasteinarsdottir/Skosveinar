import { useState, useEffect } from "react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Slider } from "@/Components/ui/slider";
import { Checkbox } from "@/Components/ui/checkbox";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { SearchResults } from "./SearchResults";

// --- types ---
export interface Product {
  title: string;
  price: number;
  image: string;
  link: string;
  store: string;
  category?: string;
}

// --- consts ---
const categories = ["Bækur", "Leikföng", "Aukahlutir"];
const stores = ["Pollýanna", "Bóksala stúdenta", "Coolshop"];

type FiltersFromStorage = {
  selectedCategories: string[];
  selectedStores: string[];
  priceRange: [number, number];
};

function loadFilters(): FiltersFromStorage {
  if (typeof window === "undefined") {
    return { selectedCategories: [], selectedStores: [], priceRange: [0, 5000] };
  }

  const saved = localStorage.getItem("filters");
  if (!saved) {
    return { selectedCategories: [], selectedStores: [], priceRange: [0, 5000] };
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      selectedCategories: parsed.selectedCategories || [],
      selectedStores: parsed.selectedStores || [],
      priceRange: parsed.priceRange || [0, 5000],
    };
  } catch {
    return { selectedCategories: [], selectedStores: [], priceRange: [0, 5000] };
  }
}

export default function SearchWithFilter() {
  const filters = loadFilters();

  const [query, setQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    filters.selectedCategories
  );
  const [selectedStores, setSelectedStores] = useState<string[]>(
    filters.selectedStores
  );
  const [priceRange, setPriceRange] = useState<[number, number]>(
    filters.priceRange
  );
  const [results, setResults] = useState<Product[]>([]);

  // только сохраняем в localStorage — тут нет setState => ESLint счастлив
  useEffect(() => {
    localStorage.setItem(
      "filters",
      JSON.stringify({ selectedCategories, selectedStores, priceRange })
    );
  }, [selectedCategories, selectedStores, priceRange]);

  const toggleFilter = () => setShowFilter((prev) => !prev);

  const handleSearch = async () => {
    setShowFilter(false);

    const params = new URLSearchParams();
    params.set("q", query);
    if (selectedCategories.length)
      params.set("category", selectedCategories.join(","));
    if (selectedStores.length) params.set("stores", selectedStores.join(","));
    params.set("price_min", priceRange[0].toString());
    params.set("price_max", priceRange[1].toString());

    const url = `http://89.160.200.111:3000/search?${params.toString()}`;

    try {
      const response = await axios.get<Product[]>(url);
      let filtered = response.data;

      if (query.trim()) {
        const q = query.toLowerCase();
        filtered = filtered.filter(
          (item) =>
            item.title?.toLowerCase().includes(q) ||
            item.store?.toLowerCase().includes(q)
        );
      }

      if (selectedCategories.length) {
        filtered = filtered.filter((item) =>
          selectedCategories.includes(item.category || "")
        );
      }

      if (selectedStores.length) {
        filtered = filtered.filter((item) =>
          selectedStores.includes(item.store)
        );
      }

      filtered = filtered.filter(
        (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
      );

      setResults(filtered);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  return (
    <div className="py-4 space-y-4 bg-[#F2ECDC] min-h-screen mx-auto flex flex-col items-center min-w-[430px] max-[430px]:px-[35px]">
     
      <div className="flex flex-row items-start mt-8 gap-0">
        <img
          src="src/Pictures/gryla1.png"
          className="w-[150px] h-[100px]"
          alt="Gryla"
        />
        <h4 className="font-cinzel text-[19px] text-[#1F3D3B] mt-0">
          Viltu leita að skó­gjöfum?
        </h4>
      </div>

      {/* search bar + filter button */}
      <div className="flex items-center gap-3.5 mt-6 mb-1">
        <div className="relative w-[310px]">
          <Input
            className="flex justify-between font-quicksand items-center w-[310px] py-2.5 rounded-[5px] border border-[#4E2513] bg-[#ecebea]"
            placeholder="Leita"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <img
            onClick={handleSearch}
            src="src/Pictures/Search-icon.svg"
            alt="Search Icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>

        <Button
          variant="outline"
          size="icon"
          className="bg-[#F2ECDC] border-[#4E2513]"
          onClick={toggleFilter}
        >
          {showFilter ? (
            <img src="src/Pictures/Cross-icon.svg" alt="Close Icon" />
          ) : (
            <img src="src/Pictures/Filter-icon.svg" alt="Filter Icon" />
          )}
        </Button>
      </div>

      {/* filter menu */}
      <AnimatePresence>
        {showFilter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[360px] space-y-4 border rounded-md p-4 bg-muted/50 overflow-hidden"
          >
            <div className="flex flex-row gap-20">
              {/* categories */}
              <div>
                <p className="text-[16px] font-quicksand text-[#1F3D3B] font-medium mb-2">
                  Flokkur
                </p>
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex text-[12px] items-center gap-2 mb-1"
                  >
                    <Checkbox
                      className="bg-[#ecebea] border-[#1F3D3B]"
                      checked={selectedCategories.includes(cat)}
                      onCheckedChange={(checked) =>
                        setSelectedCategories((prev) =>
                          checked
                            ? [...prev, cat]
                            : prev.filter((c) => c !== cat)
                        )
                      }
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* stores */}
              <div>
                <p className="text-[16px] font-quicksand text-[#1F3D3B] font-medium mb-1">
                  Verslanir
                </p>
                {stores.map((store) => (
                  <label
                    key={store}
                    className="flex text-[12px] font-quicksand items-center gap-2 mb-1"
                  >
                    <Checkbox
                      className="bg-[#ecebea] border-[#1F3D3B]"
                      checked={selectedStores.includes(store)}
                      onCheckedChange={(checked) =>
                        setSelectedStores((prev) =>
                          checked
                            ? [...prev, store]
                            : prev.filter((s) => s !== store)
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
              <p className="text-[16px] font-quicksand text-[#1F3D3B] font-medium mb-2">
                Verð
              </p>
              <Slider
                defaultValue={priceRange}
                min={0}
                max={5000}
                step={100}
                onValueChange={(val) => setPriceRange(val as [number, number])}
              />
              <div className="text-[12px] font-quicksand mt-2 ">
                {priceRange[0]} kr – {priceRange[1]} kr
              </div>
            </div>

            <Button className="w-full mt-0 font-quicksand bg-[#1F3D3B]" onClick={handleSearch}>
              Leita
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search results */}
      <SearchResults results={results} />
    </div>
  );
}
