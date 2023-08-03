import {memo} from "react";
import RepoInformation from "./RepoInformation";

const RepoList = ({repos}: any) => {
  return (
    <>
      <div className="flex flex-col w-full gap-4  bg-dim sm:p-12 p-2 rounded-lg ">
        <button className="text-gray-400 w-full text-xl tracking-wider flex justify-items-start rounded-md border-tag/10 p-2 ">
          Public Repositories
          <span className="bg-white/5 p-1 ml-2 font-bold text-tag rounded-md text-base">
            {repos?.length}
          </span>
        </button>
        <div className="flex flex-col gap-2 sm:ml-2 ml-0 my-2 ">
          {repos.map((item: any, i: number) => (
            <RepoInformation key={item?.id} item={item} index={i} repos={repos} />
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(RepoList);
