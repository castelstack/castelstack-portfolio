import {information} from "@/constants/data";
import styles from "@/styles/pages/Project.module.css";
import {projectProp} from "@/types";
import {LeftProjectCard, ProjectCard} from "./Cards";

const ProjectCardList = () => {
  return (
    <div className={styles.container}>
      {information.projects.map((project: projectProp, i: number) => (
        <div key={i}>
          {project.left ? (
            <LeftProjectCard key={i} project={project} />
          ) : (
            <ProjectCard key={i} project={project} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectCardList;
