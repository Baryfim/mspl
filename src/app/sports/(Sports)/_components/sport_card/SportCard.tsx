"use client";
import PrimaryButton from "@/ui/PrimaryButton/PrimaryButton";
import classesSportCard from "./SportCard.module.css";
import { ISports } from "@/shared/services/sports.handle";
import { useRouter } from "next/navigation";
import { useViewportWidth } from "@/shared/hooks/useViewportWidth";

const SportCard = ({
  reflect,
  title,
  description,
  url,
  img,
}: Readonly<{ reflect?: boolean } & Omit<ISports, "id">>) => {
  const router = useRouter();
  const blockWidth = useViewportWidth({
    width: [240, 240, 315],
    points: [595, 320],
  });

  return (
    <div
      className={`${classesSportCard.sport_card_wrapper} ${
        reflect && classesSportCard.reflect
      }`}
    >
      <img
        className={classesSportCard.sport_card_img}
        src={img}
        alt="бильядр"
      />
      <div className={classesSportCard.inner_card}>
        <h2>{title}</h2>
        <p className={classesSportCard.sport_card_description}>{description}</p>
        <PrimaryButton
          text="Присоедениться к трансляции"
          width={`${blockWidth}px`}
          height="60px"
          onClick={() => router.push(url)}
        />
      </div>
    </div>
  );
};

export default SportCard;
