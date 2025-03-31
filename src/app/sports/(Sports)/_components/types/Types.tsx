"use client";
import GetSports, { ISports } from "@/shared/services/sports.handle";
import SportCard from "../sport_card/SportCard";
import classesTypes from "./Types.module.css";
import { useEffect, useState } from "react";

interface ITypesProps {
  src: string;
  title: string;
}

const Types = () => {
  const [sports, setSports] = useState<ISports[]>([]);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const fetchedSports = await GetSports();
        if (fetchedSports) {
          setSports(fetchedSports);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDocs();
  }, []);
  
  let isReflect = true;
  const handleReflect = () => {
    isReflect = !isReflect;
    return isReflect;
  };

  return (
    <div className={classesTypes.types_wrapper}>
        {sports.map((sport) => (
          <SportCard key={sport.id} reflect={handleReflect()} {...sport} />
        ))}
    </div>
  );
};

export default Types;
