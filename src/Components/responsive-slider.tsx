import type React from "react";
import { useState, useRef, useEffect } from "react";

interface SliderProps {
  items: React.ReactNode[];
  onSlide?: (index: number) => void;
}

export function ResponsiveSlider({ items, onSlide }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Visible items based on screen width
  const [visibleItems, setVisibleItems] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) setVisibleItems(5); // Large screens
      else if (width >= 768) setVisibleItems(4); // Tablet
      else setVisibleItems(2); // Mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemWidth = 100 / visibleItems;
  const maxIndex = Math.max(0, items.length - visibleItems);

  // Drag start
  const startDrag = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  // Drag move
  const moveDrag = (clientX: number) => {
    if (!isDragging || !sliderRef.current) return;

    const diff = clientX - startX;
    setTranslateX(diff);
  };

  // Drag end
  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;

    if (translateX < -threshold && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    setTranslateX(0);
    onSlide?.(currentIndex);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Slider container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden touch-pan-y select-none"
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => moveDrag(e.clientX)}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
        onTouchEnd={endDrag}
      >
        <div
          ref={sliderRef}
          className={`flex transition-transform duration-300 ease-out ${
            isDragging ? "transition-none!" : ""
          }`}
          style={{
            transform: `translateX(calc(${
              -currentIndex * itemWidth
            }% + ${(translateX / (containerRef.current?.clientWidth || 1)) * 100}%))`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="shrink-0 px-2"
              style={{ width: `${itemWidth}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Bar */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(items.length - visibleItems + 1) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(Math.min(index, maxIndex));
                onSlide?.(Math.min(index, maxIndex));
              }}
              className={`h-1 transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted w-2 hover:bg-muted-foreground"
              }`}
            />
          )
        )}
      </div>
    </div>
  );
}
