"use client";
import PrimaryButton from "@/ui/PrimaryButton/PrimaryButton";
import classesBanner from "./banner.module.css";
import Typography from "@/ui/Typography/Typography";
import { useRouter } from "next/navigation";
import HeadBanner from "@/shared/components/banner/Banner.component";
import { useViewportWidth } from "@/shared/hooks/useViewportWidth";

export default function Banner() {
  const router = useRouter();
  const blockWidth = useViewportWidth({
    width: [230, 350],
    points: [425],
  });

  return (
    <HeadBanner size="large">
      <div className={classesBanner.banner_inner}>
        <div className={classesBanner.banner_inner__info}>
          <Typography center size="large" color="light">
            Multi-sport
            <br />
            professional league
          </Typography>
          <p className={classesBanner.banner_inner__text}>
            MSPL стремится к расширению географии своих турниров, привлекая к
            участию спортсменов из разных регионов и стран. Это способствует
            популяризации бильярдного спорта и укреплению международных
            спортивных связей.
          </p>
        </div>
        <PrimaryButton
          width={`${blockWidth}px`}
          height="56px"
          onClick={() => router.push("/about")}
          text="Подробнее О лиге"
        />
      </div>
    </HeadBanner>
  );
}
