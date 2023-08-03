import styles from "@/styles/components/Common.module.css";

const TextBox = ({text}: {text: string}) => {
  return <span className={`${styles.box} z-40`}>{text}</span>;
};

export default TextBox;

export const TextBoxIn = ({text}: {text: string}) => {
  return (
    <span className={`${styles.boxIn}  mx-[.1rem] z-40`} data-aos="slide-up" data-aos-once="true">
      {text}
    </span>
  );
};
