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
  if (winWidth <= 1440) {
    itemWidth = 360;
  }


  const linkImage =
    "https://s3-alpha-sig.figma.com/img/4674/0b9a/25f317f192c3993e25c114cebd481a9e?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fbm8WWaIu1rnlJqK-QUZFnfuxmLkh00qZA-UkoohXmeOvlS~RJOEyPRn4WH6WKcBlRk~xjJtx6n0jAVMWEHDjKEFuEhKLuu4z1KIF~AMzn97fOH9jdOkNpS-BZTk~keOHn0hUUakMZPOLvoruVb0VvIwBNUB6P2fxJEMJ29hc6w3C7CiuKAu-v1Xamnmy1lcjZqsGkDEjbN5rs-6VUBI4GhiSv1H6LJNGefO65bWTcnbyY6Ff5K1bjq7xpSLfCUXFA1ptM4~~ACmSfZNVvMxNjbrTK2EgnHnaJoZp1wFu0B7NeKlgiMWAGLtjoElg8XTyNRmomWU94yaYtf2CFdyKA__";
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
          visibleItems={2}
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
