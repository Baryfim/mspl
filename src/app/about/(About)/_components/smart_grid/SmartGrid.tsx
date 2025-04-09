"use client"
// components/SmartGrid.tsx
import React, { ReactNode, useEffect, useState } from "react";

interface SmartGridProps {
  children: ReactNode[];
  // базовые размеры: ширина 1110px, высота 568px (для расчётов)
  width?: number;
  height?: number;
  gap?: number;
}

const SmartGrid: React.FC<SmartGridProps> = ({
  children,
  width = 1110,
  height = 568,
  gap = 32,
}) => {
  const [winWidth, setWinWidth] = useState(typeof window !== "undefined" ? window?.innerWidth : 1440);

  useEffect(() => {
    setWinWidth(window?.innerWidth)
    const handleResize = () => {
      setWinWidth(window?.innerWidth);
    };
    window?.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  const count = React.Children.count(children);

  if (winWidth <= 750) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 'calc(100% - 24px)',
        padding: '0',
        gap: `${gap}px`,
        margin: "70px auto",
      }}>
        {children.map((child, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              width: "100%",
              height: "200px",
            }}
          >
            {child}
          </div>
        ))}
      </div>
    )
  } else if (winWidth <= 950) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width,
        gap: `${gap}px`,
        margin: "70px auto",
      }}>
        {children.map((child, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              width: "100%",
              height: "180px  "
            }}
          >
            {child}
          </div>
        ))}
      </div>
    )
  } else if (winWidth <= 1250) {
    const colWidth = `calc((${width}px - ${gap}px) / 2)`;
    return (
      <div
        style={{
          width,
          display: "grid",
          gridTemplateColumns: `${colWidth} ${colWidth}`,
          gap: `${gap}px`,
          gridAutoRows: `calc(${height}px / 2.5)`,
          margin: "70px auto",
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: `${colWidth}`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    ); 
  }

  if (count === 1) {
    // Один элемент – заполняет весь контейнер
    return (
      <div
        style={{
          width,
          height,
          display: "grid",
          gridTemplateColumns: `${width}px`,
          gridTemplateRows: `${height}px`,
          margin: "70px auto",
        }}
      >
        {children}
      </div>
    );
  } else if (count === 2) {
    // Два элемента: две колонки с gap
    const colWidth = `calc((${width}px - ${gap}px) / 2)`;
    return (
      <div
        style={{
          width,
          height,
          display: "grid",
          gridTemplateColumns: `${colWidth} ${colWidth}`,
          gridTemplateRows: `${height}px`,
          gap: `${gap}px`,
          margin: "70px auto",
        }}
      >
        {children}
      </div>
    );
  } else if (count === 3) {
    // Три элемента: три колонки с gap
    const colWidth = `calc((${width}px - ${2 * gap}px) / 3)`;
    return (
      <div
        style={{
          width,
          height,
          display: "grid",
          gridTemplateColumns: `${colWidth} ${colWidth} ${colWidth}`,
          gridTemplateRows: `${height}px`,
          gap: `${gap}px`,
          margin: "70px auto",
        }}
      >
        {children}
      </div>
    );
  } else if (count === 4) {
    // Четыре элемента: сетка 2×2 с gap
    const colWidth = `calc((${width}px - ${gap}px) / 2)`;
    const rowHeight = `calc((${height}px - ${gap}px) / 2)`;
    return (
      <div
        style={{
          width,
          height,
          display: "grid",
          gridTemplateColumns: `${colWidth} ${colWidth}`,
          gridTemplateRows: `${rowHeight} ${rowHeight}`,
          gap: `${gap}px`,
          margin: "70px auto",
        }}
      >
        {children}
      </div>
    );
  } else if (count === 5) {
    // Пять элементов:
    // Левая половина: фиксированная ширина (половина контейнера) и высота 568px.
    // Правая половина: вложенная сетка 2×2.
    const halfWidth = `calc((${width}px - ${gap}px) / 2)`;
    const cellWidth = `calc((100% - ${gap}px) / 2)`;
    const cellHeight = `calc((${height}px - ${gap}px) / 2)`;
    return (
      <div
        style={{
          width,
          height: `calc(${cellHeight}px + ${gap}px + ${cellHeight}px)`,
          display: "grid",
          gridTemplateColumns: `${halfWidth} ${halfWidth}`,
          gap: `${gap}px`,
          margin: "70px auto",
        }}
      >
        <div
          style={{
            gridRow: "1 / span 2",
            // maxHeight: `calc(${cellHeight}px + ${gap}px + ${cellHeight}px)`,
            height: `calc(${cellHeight} + ${gap}px + ${cellHeight})`,
            display: "grid",
            gridTemplateColumns: `${cellHeight + cellHeight + gap}`,
          }}
        >
          {children[0]}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `${cellWidth} ${cellWidth}`,
            gridTemplateRows: `${cellHeight} ${cellHeight}`,
            gap: `${gap}px`,
          }}
        >
          {children.slice(1, 5)}
        </div>
      </div>
    );
  } else {
    // Для 6 и более элементов: сетка из 2 колонок и автоматического числа строк.
    // Высота каждой строки – calc(568px / 2.5)
    const colWidth = `calc((${width}px - ${gap}px) / 2)`;
    return (
      <div
        style={{
          width,
          display: "grid",
          gridTemplateColumns: `${colWidth} ${colWidth}`,
          gap: `${gap}px`,
          gridAutoRows: `calc(${height}px / 2.5)`,
          margin: "70px auto",
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: `${colWidth}`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
};

export default SmartGrid;
