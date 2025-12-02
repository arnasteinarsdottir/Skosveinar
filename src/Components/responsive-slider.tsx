import type React from "react"

import { useState, useRef, useEffect } from "react"

interface SliderProps {
  items: React.ReactNode[]
  onSlide?: (index: number) => void
}

export function ResponsiveSlider({ items, onSlide }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Determine visible items based on screen size
  const [visibleItems, setVisibleItems] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(5) // lg breakpoint
      } else if (window.innerWidth >= 768) {
        setVisibleItems(4) // md breakpoint
      } else {
        setVisibleItems(2) // mobile
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const itemWidth = 100 / visibleItems
  const maxIndex = Math.max(0, items.length - visibleItems)

  // Mouse/Touch Events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return
    const currentX = e.clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 50
    if (translateX < -threshold && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    } else if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }

    setTranslateX(0)
    onSlide?.(currentIndex)
  }

  return (
    <div className="flex justify-center items-center mx-auto">
      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden md:margin-0"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
      >
        <div
          ref={sliderRef}
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(${!isDragging ? -currentIndex * itemWidth : -currentIndex * itemWidth + (translateX / (containerRef.current?.clientWidth || 1)) * 100}%))`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {items.map((item, index) => (
            <div key={index} style={{ width: `${itemWidth}%` }} className="shrink-0 px-2">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Bar */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(items.length / visibleItems) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(Math.min(index, maxIndex))
              onSlide?.(Math.min(index, maxIndex))
            }}
            className={`h-1 transition-all duration-300 rounded-full ${
              index === currentIndex ? "bg-primary w-8" : "bg-muted w-2 hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
