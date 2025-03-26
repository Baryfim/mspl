import classes from "./ProjectCard.module.css";

export interface Project {
  big?: boolean;
  id: string;
  title: string;
  description: string;
}

const ProjectCard = ({ big, title, description }: Omit<Project, "id">) => {
  return (
    <div className={`${classes.project_card_wrapper} ${big && classes.project_card_big}`}
      style={{
        background: 'url(/1.png)'
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
