"use client";
import Typography from "@/ui/Typography/Typography";
import ProjectCard, { Project } from "../project_card/ProjectCard";
import classesOurProjects from "./OurProjects.module.css";
import SmartGrid from "../smart_grid/SmartGrid";

import { useViewportWidth } from "@/shared/hooks/useViewportWidth";

const OurProjects = ({ projects }: { projects: Project[] }) => {
  const blockWidth = useViewportWidth({
    width: [850, 1110],
    points: [1250],
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
              />
            ))}
          </SmartGrid>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
