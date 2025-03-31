"use client";
import Carousel from "@/shared/components/сarousel/Carousel.component";
import classesSports from "./sports.module.css";
import Card from "./ui/Card";
import { useEffect, useState } from "react";

interface CardItem {
  title: string;
  img: string;
  description: string;
}

export default function Sports() {
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


  const linkImage =
    "http://localhost:1337/uploads/2acafc3024de1bd515507eb9cc646b3a_979690a121.png";
  const cards: CardItem[] = [
    {
      img: linkImage,
      title: "Card 1",
      description: "Description 1",
    },
    {
      img: linkImage,
      title: "Card 2",
      description: "Description 2",
    },
    {
      img: linkImage,
      title: "Card 3",
      description: "Description 3",
    },
    {
      img: linkImage,
      title: "Card 4",
      description: "Description 3",
    },
    {
      img: linkImage,
      title: "Card 5",
      description: "Description 3",
    },
    {
      img: linkImage,
      title: "Card 6",
      description: "Description 3",
    },
    {
      img: linkImage,
      title: "Card 7",
      description: "Description 3",
    },
    {
      img: linkImage,
      title: "Card 8",
      description: "Description 3",
    },
    {
      img: linkImage,
      title: "Card 9",
      description: "Description 3",
    },
    {
      img: linkImage,
      title: "Card 10",
      description: "Description 3",
    },
  ];


  return (
    <div className={classesSports.sports_wrapper}>
      <h1 className={classesSports.sports_label}>Виды спорта</h1>
      <div className={classesSports.sport_inner}>
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
              path={index.toString()}
            />
          )}
        />
      </div>
    </div>
  );
}
