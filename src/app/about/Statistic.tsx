export const StatBox = ({
  title,
  stat,
  unit,
}: {
  title: string;
  unit: string;
  stat: number | string;
}) => (
  <>
    {(stat || parseInt(`${stat}`, 10) >= 0 || !null) && (
      <div className="flex items-center gap-6 my-2 shadow-lg group bg-white/5 transition-all duration-300 delay-700 ease-in hover:ring-2  hover:ring-gray-400/20 py-2 px-4  w-max rounded-md">
        <div className="flex flex-col items-start">
          <p className="text-[20px] text-text tracking-wide font-bold capitalize group-hover:scale-75 transition-all duration-300 ease-in delay-300">
            {title}
          </p>

          <span className="text-gray-400 text-xs ">{unit}</span>
        </div>
        <p className="text-3xl text-tag font-bold tracking-wide group-hover:scale-110 transition-all duration-300 ease-in delay-300">
          {stat}
        </p>
      </div>
    )}
  </>
);

const Statistic = ({
  fullInfo,
}: {
  fullInfo: {
    hireable: boolean;
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number;
  };
}) => {
  return (
    <div>
      <div className="flex items-stretch gap-4 flex-wrap h-max">
        <StatBox
          stat={fullInfo?.hireable ? "NO" : "YES"}
          title={"hireable"}
          unit={fullInfo?.hireable ? "-working" : "-open to work"}
        />
        <StatBox stat={fullInfo?.followers} title={"followers"} unit={"-"} />

        <StatBox stat={fullInfo?.following} title={"following"} unit={"-"} />
        <StatBox stat={fullInfo?.public_repos} title={"Repositories"} unit={"-repos"} />
        <StatBox stat={fullInfo?.public_gists} title={"Public gists"} unit={"-gists"} />
      </div>
    </div>
  );
};

export default Statistic;
