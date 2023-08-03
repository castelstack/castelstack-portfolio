import AnimateName from "@/components/AnimateName";
import PrimaryButton from "@/components/Buttons";
import {information} from "@/constants/data";
import styles from "@/styles/pages/Home.module.css";

export default function Home() {
  return (
    <>
      <div id="home" className={` sm:py-[8rem] py-[4rem] background `}>
        <div className={`${styles.container}  bgtext`}>
          <p className={styles.hello} data-aos="fade-up" data-delay="200">
            Hello, I&apos;m
          </p>
          <AnimateName
            firstName={information.home.firstName}
            lastName={information.home.lastName}
          />
          <div className={`flex flex-col w-full ${styles.textbox}`}>
            <h2 className={styles.position} data-aos="fade-up" data-delay="600">
              {information.home.position}
            </h2>

            <p data-aos="fade-up" data-delay="800" className={` ${styles.texts} tracking-wider`}>
              {information.home.description}
            </p>
          </div>

          <a
            href={information.home.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6"
            data-aos="fade-up"
            data-delay="1000"
          >
            <PrimaryButton text={"Download CV"} />
          </a>
        </div>
      </div>
    </>
  );
}
