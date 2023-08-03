import TextBox from "@/components/TextBox";
import styles from "@/styles/components/Animate.module.css";

const AnimateName = ({firstName, lastName}: {firstName: []; lastName: []}) => {
  return (
    <div className={styles.animecontainer} data-aos="slide-up" data-delay="400">
      <div className="flex">
        {firstName.map((letter, i) => (
          <TextBox key={i} text={letter} />
        ))}
      </div>
      <div className="flex">
        {lastName.map((letter, i) => (
          <TextBox key={i} text={letter} />
        ))}
      </div>
    </div>
  );
};

export default AnimateName;
