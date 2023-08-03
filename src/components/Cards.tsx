import styles from "@/styles/pages/Project.module.css";
import {projectProp} from "@/types";
import Image from "next/image";

export const ProjectCard = ({project, ...props}: {project: projectProp}) => {
  return (
    <div {...props} className={styles.card}>
      <div className={styles.imagebox} data-aos="fade-up" data-aos-once="true">
        <Image
          src={project.icon}
          alt={project.name}
          className={styles.image}
          objectPosition="true"
          layout="fill"
          priority
        />
      </div>
      <div className={styles.info} data-aos-once="true" data-aos="flip-up">
        <div className={styles.nameLink}>
          <h1>{project.name}</h1>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
          )}
        </div>
        <p>{project.description}</p>

        <div className={styles.stack}>
          {project.stack.map((el) => (
            <Image
              key={el}
              src={require("../assets/icons/" + `${el?.toLowerCase()}.svg`)}
              className={`h-[25px] w-[25px] rounded-full  transition-all duration-300 ease-in `}
              width={25}
              height={25}
              loading="lazy"
              alt={el}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const LeftProjectCard = ({project, ...props}: {project: projectProp}) => {
  return (
    <div {...props} className={styles.cardLeft}>
      <div className={styles.infoLeft} data-aos-once="true" data-aos="flip-up">
        <div className={styles.nameLink}>
          <h1>{project.name}</h1>

          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
          )}
        </div>
        <p>{project.description}</p>

        <div className={styles.stack}>
          {project.stack.map((el) => (
            <Image
              key={el}
              src={require("../assets/icons/" + `${el?.toLowerCase()}.svg`)}
              className={`h-[25px] w-[25px] rounded-full  transition-all duration-300 ease-in `}
              width={25}
              height={25}
              alt={el}
            />
          ))}
        </div>
      </div>

      <div
        className={`${styles.imagebox} ${styles.imageboxLeft}`}
        data-aos-once="true"
        data-aos="fade-left"
      >
        <Image
          src={project.icon}
          alt={project.name}
          className={styles.image}
          objectPosition="true"
          layout="fill"
          priority
        />
      </div>
    </div>
  );
};
