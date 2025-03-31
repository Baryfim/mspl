"use client";
import PrimaryButton from "@/ui/PrimaryButton/PrimaryButton";
import classesSportCard from "./SportCard.module.css";
import { ISports } from "@/shared/services/sports.handle";
import { useRouter } from "next/navigation";

const SportCard = ({
  reflect,
  title,
  description,
  url,
  img,
}: Readonly<{ reflect?: boolean } & Omit<ISports, "id">>) => {
  const router = useRouter();
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
        <p>{description}</p>
        <PrimaryButton
          text="Присоедениться к трансляции"
          width="315px"
          height="60px"
          onClick={() => router.push(url)}
        />
      </div>
    </div>
  );
};

export default SportCard;
