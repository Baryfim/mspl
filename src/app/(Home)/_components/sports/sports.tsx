"use client";
import Carousel from "@/shared/components/сarousel/Carousel.component";
import classesSports from "./sports.module.css";
import Card from "./ui/Card";
import { useEffect, useState } from "react";
import GetSports from "@/shared/services/sports.handle";

interface CardItem {
  title: string;
  img: string;
  path?: string;
  description: string;
}

export default function Sports() {
  const [winWidth, setWinWidth] = useState(typeof window !== "undefined" ? window?.innerWidth : 1440);

  useEffect(() => {
    setWinWidth(window?.innerWidth)
    const handleResize = () => {
      setWinWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let itemWidth = 540;
  let visibleItems = 2;
  if (winWidth <= 379) {
    itemWidth = 300;
    visibleItems = 1;
  }
  else if (winWidth <= 1100) {
    visibleItems = 1;
    itemWidth = 360;
  } else if (winWidth <= 1440) {
    itemWidth = 360;
  }

  const [cards, setCards] = useState<CardItem[]>([]);

  useEffect(() => {
    const func = async () => {
      const response = await GetSports();
      setCards((response as any).map((card: any) => ({
        img: card.img,
        title: card.title,
        path: '/sports',
        description: card.description.substring(0, 100) + "...",
      })));
    }
    func();
  }, [])

  return (
    <div className={classesSports.sports_wrapper}>
      <h1 className={classesSports.sports_label}>Виды спорта</h1>
      <div className={classesSports.sport_inner}>
        {
          cards.length !== 0 ? (
            <Carousel
              data={cards}
              visibleItems={visibleItems}
              itemWidth={itemWidth}
              renderItem={(item: CardItem, index: number) => (
                <Card
                  key={index}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  path={item?.path || ''}
                />
              )}
            />
          ) : (
            <h4 className={classesSports.not_found}>
              Виды спорта не найдены :(
            </h4>
          )
        }
      </div>
    </div>
  );
}
