import Image from "next/image";

const ProfileHeader = ({
  fullInfo,
}: {
  fullInfo: {
    avatar_url: string;
    login: string;
    html_url: string;
    email: string;
    name: string;
  };
}) => {
  const conditionNull = (data: null | string) => {
    const state = data === null ? true : false;
    return state;
  };
  return (
    <div className="grid grid-cols-1 justify-center coverBox">
      <Image
        loader={() => `${fullInfo?.avatar_url}`}
        src={`${fullInfo?.avatar_url}`}
        alt={fullInfo?.login}
        quality={50}
        fill
        className="object-cover blur"
      />
      <div className="flex w-max items-center flex-col sm:flex-row  self-end translate-y-[8rem] gap-2 justify-self-center sm:justify-self-start ">
        {fullInfo?.avatar_url === undefined ? (
          "loading"
        ) : (
          <Image
            loader={() => `${fullInfo?.avatar_url}`}
            src={`${fullInfo?.avatar_url}`}
            alt={fullInfo?.login}
            width={150}
            height={150}
            loading="lazy"
            className="h-[150px] w-[150px] rounded-full bg-dark"
          />
        )}

        <div className="flex flex-col justify-items-center  ">
          <h1 className="text-text uppercase text-xl font-bold sm:text-left text-center">
            {fullInfo?.name}
          </h1>

          <p className="text-gray-500 lowercase text-[12px]  sm:text-left text text-center">
            <a
              href={fullInfo?.html_url}
              target="_blank"
              rel=" noreferrer"
              className="text-gray-300 text-[14px] italic font-lato sm:inline block mr-2 uppercase"
            >{`@${fullInfo?.login}`}</a>
            &#8226;
            {conditionNull(fullInfo?.email) ? "No email" : fullInfo?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
