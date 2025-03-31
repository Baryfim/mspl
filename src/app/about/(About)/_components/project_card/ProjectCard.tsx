"use client"
import { IProject } from "@/shared/services/projects.handle";
import classes from "./ProjectCard.module.css";
import { useRouter } from "next/navigation";

const ProjectCard = ({ title, description, url, img }: Omit<IProject, "id">) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(url)} className={`${classes.project_card_wrapper}`}
      style={{
        background: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className={classes.project_card_inner}>
        <ul>
          <h3>{title}</h3>
          <p>{description}</p>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
