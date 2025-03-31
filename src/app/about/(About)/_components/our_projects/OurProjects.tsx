"use client";
import Typography from "@/ui/Typography/Typography";
import ProjectCard from "../project_card/ProjectCard";
import classesOurProjects from "./OurProjects.module.css";
import SmartGrid from "../smart_grid/SmartGrid";

import { useViewportWidth } from "@/shared/hooks/useViewportWidth";
import { IProject } from "@/shared/services/projects.handle";

const OurProjects = ({ projects }: { projects: IProject[] }) => {
  const blockWidth = useViewportWidth({
    width: [600, 850, 1110],
    points: [950, 1250],
  });

  return (
    <div className={classesOurProjects.out_project_wrapper}>
      <div className={classesOurProjects.out_project_container}>
        <div className={classesOurProjects.out_project_inner}>
          <Typography center size="small" color="light">
            Наши проекты
          </Typography>

          <SmartGrid width={blockWidth}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                url={project.url}
                img={project.img}
              />
            ))}
          </SmartGrid>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
