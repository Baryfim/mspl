"use client";
import Carousel from "@/shared/components/сarousel/Carousel.component";
import classesPartners from "./partners.module.css";
import Card from "./card";
import { useEffect, useState } from "react";

export default function Partners() {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [winHeight, setWinHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let itemWidth = 350;
  if (winWidth <= 1440) {
    itemWidth = 300;
  }

  interface CardItem {
    id: number;
  }

  const cards: CardItem[] = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  return (
    <div className={classesPartners["partners-wrapper"]}>
      <div className={classesPartners["partners-container"]}>
        <div className={classesPartners["partners-inner"]}>
          <h2>Наши партнеры</h2>
          <div className={classesPartners["partners-slider"]}>
            <Carousel
              data={cards}
              itemWidth={itemWidth}
              visibleItems={3}
              renderItem={(item: CardItem, index: number) => (
                <Card key={index} id={item.id} />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
