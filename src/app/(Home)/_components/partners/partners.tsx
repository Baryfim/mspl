"use client";
import Carousel from "@/shared/components/сarousel/Carousel.component";
import classesPartners from "./partners.module.css";
import Card from "./card";
import { useEffect, useState } from "react";
import Typography from "@/ui/Typography/Typography";

export default function Partners() {
  const [winWidth, setWinWidth] = useState(
    typeof window !== "undefined" ? window?.innerWidth : 1440
  );

  useEffect(() => {
    setWinWidth(window?.innerWidth);
    const handleResize = () => {
      setWinWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let itemWidth = 350;
  let visibleItems = 3;
  if (winWidth <= 1100) {
    itemWidth = 250;
    visibleItems = 1;
  } else if (winWidth <= 1300) {
    itemWidth = 250;
    visibleItems = 2;
  } else if (winWidth <= 1440) {
    itemWidth = 300;
  }

  interface CardItem {
    name: string;
  }

  const [cards, setCards] = useState<CardItem[]>([]);

  useEffect(() => {
    const request = async () => {
      const response = await fetch("http://195.24.64.231/api/partners");
      const data = await response.json();
      // console.log(data);
      setCards(data.data.map((item: any) => ({ name: item.Name })));
    };
    request();
  }, []);

  return (
    <div className={classesPartners["partners-wrapper"]}>
      <div className={classesPartners["partners-container"]}>
        <div className={classesPartners["partners-inner"]}>
          <Typography size="medium" color="dark" center>
            Наши партнеры
          </Typography>
          <div className={classesPartners["partners-slider"]}>
            {cards.length !== 0 ? (
              <Carousel
                data={cards}
                itemWidth={itemWidth}
                visibleItems={visibleItems}
                renderItem={(item: CardItem, index: number) => (
                  <Card key={index} id={item.name} />
                )}
              />
            ) : (
              <h4 className={classesPartners.not_found}>
                Партнеров пока нету :(
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
