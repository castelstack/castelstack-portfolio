import styles from "@/styles/pages/Experience.module.css";
import {experienceProp} from "@/types";

const Tabs = ({experiences}: {experiences: experienceProp[]}) => {
  return (
    <div className={styles.container} data-aos="fade-up">
      {experiences.map((experience, i) => (
        <Tab
          key={i}
          position={experience.position}
          companyName={experience.companyName}
          duration={experience.duration}
          roles={experience.roles}
        />
      ))}
    </div>
  );
};
export default Tabs;

const Tab = ({position, companyName, duration, roles}: experienceProp) => {
  return (
    <div className={styles.tab}>
      <div className={styles.position}>
        <h1>{position}</h1>
        <p>{duration}</p>
      </div>
      <div className={styles.box}>
        <div className={styles.ballbox}>
          <div className={styles.ball} />
        </div>
      </div>

      <div className={styles.info}>
        <h1>{companyName}</h1>
        <div className={` ${styles.mobile}`}>
          <h1>{position}</h1>
          <p>{duration}</p>
        </div>
        <ul className={styles.list}>
          {roles.map((role, i) => (
            <li key={i} data-aos="fade-up" data-aos-once="true">
              {role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
