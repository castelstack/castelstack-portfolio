import Tabs from "@/components/Tab";
import {TextBoxIn} from "@/components/TextBox";
import {information} from "@/constants/data";

export default function ExperiencePage() {
  return (
    <div className={`max-w-full py-[8rem] backgroundDark `}>
      <div className={`max-w-[1200px] !px-4 mx-auto   w-full h-full flex justify-center flex-col `}>
        <div className="  sm:self-start self-center mb-3">
          <TextBoxIn text="EXPEREINCE" />
        </div>
        <p className="mt-4  mb-6 sm:text-start text-center" data-aos="fade-up" data-aos-once="true">
          {information.experience?.description}
        </p>
        <Tabs experiences={information.experience?.experiences} />
      </div>
    </div>
  );
}
