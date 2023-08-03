import ProjectCardList from "@/components/CardList";
import {TextBoxIn} from "@/components/TextBox";

export default function ProjectPage() {
  return (
    <div className={` py-[8rem] backgroundDark `}>
      <div className="max-w-[1200px] !px-4 mx-auto !pt-[2rem] w-full h-full flex justify-center flex-col ">
        <div className=" items-center mb-6  self-center z-30 flex">
          <TextBoxIn text="P" />
          <TextBoxIn text="R" />
          <TextBoxIn text="O" />
          <TextBoxIn text="J" />
          <TextBoxIn text="E" />
          <TextBoxIn text="C" />
          <TextBoxIn text="T" />
        </div>
        <ProjectCardList />
      </div>
    </div>
  );
}
