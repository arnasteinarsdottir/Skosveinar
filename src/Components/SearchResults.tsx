import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import type { Product } from "./SearchWithFilter";


interface SearchResultsProps {
  results: Product[];
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div
      className="grid grid-cols-1 [@media(min-width:700px)]:grid-cols-2 [@media(min-width:970px)]:grid-cols-3 gap-6 mb-10 mt-4"
    >
      {results.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-[280px] bg-[#EEE2D2] px-7 pt-7 pb-6 overflow-hidden"
        >
          {/* Decorative brush border */}
          <svg
            viewBox="0 0 280 340"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 w-full h-full w-100% h-100%"
          >
            <defs>
              <filter id="brush-border">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.85 0.22"
                  numOctaves={4}
                  seed={6}
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale={6}
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>
            <rect
              x={6}
              y={6}
              width={268}
              height={328}
              style={{
                fill: "none",
                stroke: "#1F3D3B",
                strokeWidth: 4,
                strokeLinecap: "round",
                filter: "url(#brush-border)",
              }}
            />
            <rect
              x={6}
              y={6}
              width={268}
              height={328}
              style={{
                fill: "none",
                stroke: "#1F3D3B",
                strokeWidth: 1,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
            />
          </svg>

          {/* Card content */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-32 object-cover rounded mb-4"
          />
          <h4 className="text-sm font-bold font-quicksand mt-2">{item.title}</h4>
          <h4 className="text-xs font-bold font-quicksand text-darkred">{item.price} kr</h4>
          <h5>
            <a href={item.link} className="text-sm font-quicksand text-darkgreen">
              {item.store}
            </a>
          </h5>
          <Button size="sm" className="mt-2 w-full font-bold font-quicksand bg-darkgreen text-white hover:bg-darkergreen cursor-pointer">
            Óska
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
