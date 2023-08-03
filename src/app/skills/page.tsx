import {TextBoxIn} from "@/components/TextBox";
import {information} from "@/constants/data";
import {skill} from "@/types";
import Image from "next/image";

export default function SkillPage() {
  return (
    <div className={`max-w-full py-[8rem] background`}>
      <div
        className={`max-w-[1200px] !px-2 mx-auto  w-full h-full flex justify-center items-start flex-col `}
      >
        <div className=" items-center  self-center z-10 flex">
          <TextBoxIn text="S" />
          <TextBoxIn text="K" />
          <TextBoxIn text="I" />
          <TextBoxIn text="L" />
          <TextBoxIn text="L" />
          <TextBoxIn text="S" />
        </div>
        <p className="my-4 !self-center !text-center" data-aos="fade-up" data-aos-once="true">
          {information.skills.description}
        </p>
        <div className=" !pt-6 my-auto  grid justify-center items-center">
          <div className="bg-dark-900/40 backdrop-blur-sm shadow-2xl  rounded-2xl flex flex-wrap justify-center gap-4 w-full md:p-12 p-6">
            {information.skills.skills.map((item: skill, i: number) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="md:py-4 md:px-6 py-2 px-4  group w-[100px] md:w-[200px] rounded-xl max-h-[500px] flex flex-col items-center shadow-lg gap-4 bg-dark-800/20 hover:bg-dark-900/5 transition-all duration-300 ease delay-100"
              >
                <Image
                  src={require("../../assets/icons/" + `${item?.name?.toLowerCase()}.svg`)}
                  className="h-[50px] w-[50px] rounded-full "
                  width={50}
                  height={50}
                  alt={item.name}
                  title={item.name}
                  loading="lazy"
                />

                <p className="text-text text-base capitalize text-center transform group-hover:translate-y-2 transition-all duration-500 ease delay-100 ">
                  {item.name}
                </p>
                <div className="w-[10%] group-hover:w-[60%] h-[1px] rounded-full transition-all duration-500 ease delay-100  transform -translate-y-3 group-hover:translate-y-0 bg-tag " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
