import styles from "@/styles/components/Button.module.css";

const PrimaryButton = ({text, ...props}: {text: any; className?: string}) => {
  return (
    <button className={`${styles.button} ${props.className}`}>
      <span>{text} </span>
    </button>
  );
};

export default PrimaryButton;
