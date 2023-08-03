import Image from "next/image";

const item = "Jupyter Notebook";
console.log("../../../assets/icons/" + `${item?.toLowerCase()}.svg`, "svg");
const Contributors = ({langKeys, contributors}: any) => {
  // console.log(langKeys, "keys");
  return (
    <div className="flex flex-row gap-2 justify-between py-2 my-1 border-t border-white/10 ">
      {contributors?.length >= 1 && (
        <div className="flex flex-col my-4">
          <p className="text-sm text-gray-400 tracking-wide font-bold capitalize">contributors</p>{" "}
          <div className="flex items-center p-1">
            <div className="flex items-center !-space-x-4 p-1 ">
              {contributors?.slice(0, 5).map((item: any) => (
                <div
                  key={item?.id}
                  className={` z-10 bg-white/70 h-[38px] w-[38px] p-[3px] rounded-full `}
                >
                  <Image
                    loader={() => item?.avatar_url}
                    src={item?.avatar_url}
                    title={item?.login}
                    alt={item?.login}
                    width={35}
                    height={35}
                    loading="lazy"
                    className="h-[35px] w-[35px] rounded-full "
                  />
                </div>
              ))}
            </div>{" "}
            {contributors?.length - 5 > 0 && (
              <p className="text-base ml-2 text-text tracking-wide leading-7">
                +{contributors?.length - 5}
              </p>
            )}
          </div>
        </div>
      )}
      {/* langKeys */}
      {langKeys?.length >= 1 && (
        <div className="flex flex-col my-4">
          <p className="text-sm text-gray-400 tracking-wide font-bold capitalize">language</p>

          <div className="flex items-center py-1">
            <div className="flex items-center lowercase gap-2">
              {langKeys?.map(
                (item: any, i: number) => (
                  <h2 className="text-base text-text tracking-wide font-bold capitalize" key={i}>
                    {item}
                  </h2>
                )
                // {/* <Image

                //   src={require(`../../../public/icons/` + `${item?.toLowerCase()}.svg`) }
                //   className='h-[35px] w-[35px] rounded-full '
                //   width={35}
                //   height={35}
                //   alt={item}
                //   title={item}
                //   loading="lazy"
                // /> */}
              )}
            </div>{" "}
            {langKeys?.length - 5 > 0 && (
              <p className="text-base ml-2 text-text tracking-wide leading-7">
                +{langKeys?.length - 5}
              </p>
            )}
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default Contributors;
