import {StatBox} from "./Statistic";

const RepoStats = ({
  item,
}: {
  item: {
    forks: string;
    size: number;
    language: string;
    open_issues: string;
    stargazers_count: number | string;
  };
}) => {
  return (
    <div className="flex items-stretc gap-2 gap-y-2 flex-wrap">
      <StatBox stat={item?.forks} title={"fork"} unit={"forks"} />
      <StatBox stat={(item?.size / 1024).toFixed(2)} title={"Size"} unit={"kb"} />
      <StatBox stat={item?.stargazers_count} title={"star"} unit={"stars"} />
      <StatBox stat={item?.language} title={"Primary lang"} unit={"-"} />
      <StatBox stat={item?.open_issues} title={"Open issues"} unit={"-issues"} />
    </div>
  );
};

export default RepoStats;
