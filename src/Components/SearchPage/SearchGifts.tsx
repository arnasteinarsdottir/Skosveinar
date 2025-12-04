import { useState, useEffect } from "react";
import { Input } from "@/Components/ui/input";
import axios from "axios";
import { SearchResults } from "./SearchResults";
import { AnimatePresence } from "framer-motion";
import { FilterMenu } from "@/Components/FilterMenu";
import { Button } from "@/Components/ui/button";


// Product type definition for search results
export interface Product {
  title: string;
  price: number;
  image: string;
  link: string;
  store: string;
  category?: string;
}

// Available categories and stores for filtering
const categories = ["Bækur", "Leikföng", "Aukahlutir"];
const stores = ["Pollýanna", "Bóksala stúdenta", "Coolshop"];

// Filters type for localStorage persistence
type FiltersFromStorage = {
  selectedCategories: string[];
  selectedStores: string[];
  priceRange: [number, number];
};

// Load filters from localStorage or return default values
function loadFilters(): FiltersFromStorage {
  if (typeof window === "undefined") {
    // Server-side rendering check
    return { selectedCategories: [], selectedStores: [], priceRange: [0, 5000] };
  }

  // Retrieve saved filters from localStorage
  const saved = localStorage.getItem("filters");
  if (!saved) {
    // No saved filters found
    return { selectedCategories: [], selectedStores: [], priceRange: [0, 5000] };
  }
  // Parse and return saved filters
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

// Main search component with filtering functionality
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

  // Persist filters to localStorage on change
  useEffect(() => {
    localStorage.setItem(
      "filters",
      JSON.stringify({ selectedCategories, selectedStores, priceRange })
    );
  }, [selectedCategories, selectedStores, priceRange]);

  // Toggle filter menu visibility
  const toggleFilter = () => setShowFilter((prev) => !prev);

  const handleSearch = async () => {
    setShowFilter(false);

    const params = new URLSearchParams();

    // Add query if not empty
    if (query.trim()) {
      params.set("q", query.trim());
    }
    // Add query if not empty
    if (selectedCategories.length) {
      params.set("category", selectedCategories.join(","));
    }
    // Add query if not empty
    if (selectedStores.length) {
      params.set("stores", selectedStores.join(","));
    }
    // Add price range
    params.set("price_min", priceRange[0].toString());
    params.set("price_max", priceRange[1].toString());

  // API request
  const url = `http://89.160.200.111:3000/search?${params.toString()}`;
  console.log("Searching with URL:", url);

  // axios GET request
  try {
    const response = await axios.get<Product[]>(url);
    setResults(response.data);
  } catch (err) {
    console.error("Search error:", err);
  }
};

  return (
    // Main container
    <div className="py-4 space-y-4 bg-background min-h-screen mx-auto flex flex-col items-center min-w-[430px] max-[430px]:px-[35px]">
     
      {/* Header with title and image */}
      <div className="flex flex-col mt-36 ">
        <h4 className="font-cinzel text-[37.5px]  text-darkbrown mt-0">
          Leita að skó­gjöfum
        </h4>
        <img
          src="src/Pictures/gryla1.png"
          className="w-[150px] h-[100px] mt-7"
          alt="Gryla"
        />
      </div>

      {/* Search bar + filter toggle button */}
      <div className="flex items-center gap-3.5 mt-2 mb-4">
        <div className="relative w-[310px]">
          <Input
            className="flex justify-between font-quicksand items-center w-[310px] py-2.5 rounded-[5px] border border-darkbrown bg-bgsecondary focus:outline-none focus:bg-lightbackground focus-visible:outline-none focus-visible:ring-[0,5px] focus:ring-darkgreen"
            placeholder="Leita"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <img
            onClick={handleSearch}
            src="src/Pictures/Search-icon.svg"
            alt="Search Icon"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>

        <Button
          variant="outline"
          size="icon"
          className="bg-background border-darkbrown cursor-pointer"
          onClick={toggleFilter}
        >
          {showFilter ? (
            <img src="src/Pictures/Cross-icon.svg" alt="Close Icon" />
          ) : (
            <img src="src/Pictures/Filter-icon.svg" alt="Filter Icon" />
          )}
        </Button>
      </div>

      {/* Filter menu with animation */}    
      <AnimatePresence>
        {showFilter && (
          <FilterMenu
            categories={categories}
            stores={stores}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedStores={selectedStores}
            setSelectedStores={setSelectedStores}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            handleSearch={handleSearch}
          />
        )}
      </AnimatePresence>


      {/* Search results grid */}
      <SearchResults results={results} isCardMode={true} />
    </div>
  );
}
