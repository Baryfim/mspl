"use client";

import ArrowIcon from "@/icons/arrow.icon";
import { useState, useEffect, useRef, CSSProperties, ReactNode } from "react";

interface CarouselProps<T> {
  data: T[];
  visibleItems?: number;
  itemWidth: number;
  autoPlay?: boolean;
  interval?: number;
  renderItem: (item: T, index: number) => ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Carousel = <T,>({
  data,
  visibleItems = 1,
  itemWidth,
  autoPlay = false,
  interval = 5000,
  renderItem,
  style,
  className,
}: CarouselProps<T>) => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const GAP = 32;

  const totalGroups = Math.ceil(data.length / visibleItems);
  const containerWidth = visibleItems * itemWidth + (visibleItems - 1) * GAP;

  const handleNavigation = (direction: 'prev' | 'next') => {
    setCurrentGroup(prev => {
      if (direction === 'next') {
        return prev >= totalGroups - 1 ? 0 : prev + 1;
      }
      return prev <= 0 ? totalGroups - 1 : prev - 1;
    });
  };

  const getTransformValue = () => {
    const shift = currentGroup * (itemWidth * visibleItems + GAP * visibleItems);
    return `translateX(-${shift}px)`;
  };

  useEffect(() => {
    if (autoPlay) {
      timerRef.current = setInterval(() => handleNavigation('next'), interval);
    }
    return () => {
      timerRef.current && clearInterval(timerRef.current);
    };
  }, [autoPlay, interval, totalGroups]);

  useEffect(() => {
    const updateHeight = () => {
      if (!slidesRef.current) return;

      const startIndex = currentGroup * visibleItems;
      const endIndex = startIndex + visibleItems;
      const slides = Array.from(slidesRef.current.children)
        .slice(startIndex, endIndex);

      const heights = slides.map(
        (slide) => slide.getBoundingClientRect().height
      );

      setMaxHeight(Math.max(...heights));
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [currentGroup, visibleItems, data.length]);

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${className}`}
      style={style}
    >
      <div className="carousel-wrapper" style={{ height: `${maxHeight}px` }}>
        <div
          ref={slidesRef}
          className="carousel-track"
          style={{
            transform: getTransformValue(),
            transition: "transform 0.5s ease",
            gap: `${GAP}px`,
            width: `${data.length * itemWidth + (data.length - 1) * GAP}px`
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{
                width: `${itemWidth}px`,
                flexShrink: 0
              }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-button prev"
        onClick={() => handleNavigation('prev')}
        aria-label="Previous slide"
      >
        <ArrowIcon rotate />
      </button>
      <button
        className="carousel-button next"
        onClick={() => handleNavigation('next')}
        aria-label="Next slide"
      >
        <ArrowIcon />
      </button>

      <style jsx>{`
        .carousel-container {
          max-width: ${containerWidth}px;
          margin: 0 auto;
          overflow: hidden;
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
          transition: height 0.3s ease;
        }

        .carousel-track {
          display: flex;
          will-change: transform;
        }

        .carousel-slide {
          box-sizing: border-box;
        }

        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.3s ease;
          z-index: 10;
          background: rgba(255, 255, 255, 0.1);
        }

        .carousel-button:hover {
          background: #D52037;
        }

        .prev {
          left: 70px;
        }
        .next {
          right: 70px;
        }
      `}</style>
    </div>
  );
};

export default Carousel;