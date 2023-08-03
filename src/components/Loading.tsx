export const LoadPage = () => {
  return (
    <div className="h-screen grid grid-cols-1 justify-items-center content-center bg-light w-full overflow-hidden">
      <div className=" flex justify-center items-center w-min ">
        <div className="loadLine loadBall load1 rounded-l-lg" />
        <div className="loadLine loadHand load2" />
        <div className="loadLine load3" />
        <div className="loadLine loadHand load4" />
        <div className="loadLine loadBall load5 rounded-r-lg" />
      </div>
    </div>
  );
};

export const AboutLoadingPage = () => {
  return (
    <div className="flex flex-col animate-pulse gap-4 mx-4  h-[100vh]">
      <div className=" bg-gray-800/50 h-[15rem] w-full rounded-md mt-6  animate-pause" />
      <div className="flex gap-2 items-center transform -translate-y-14 translate-x-20">
        <div className=" bg-gray-800/50 h-32 w-32 rounded-full" />
        <div className="flex flex-col gap-4">
          <div className=" bg-gray-800/50 h-4  w-32 rounded-md" />
          <div className=" bg-gray-800/50 h-8  w-32 rounded-md" />
        </div>
      </div>
      <div className=" bg-gray-800/50 h-2  w-full rounded-md" />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-12">
        <div className="flex flex-col gap-4">
          <div className=" bg-gray-800/50 h-8  w-full rounded-md" />
          <div className=" bg-gray-800/50 h-12  w-full rounded-md" />
        </div>
        <div className="flex flex-col gap-4">
          <div className=" bg-gray-800/50 h-8  w-full rounded-md" />
          <div className=" bg-gray-800/50 h-12  w-full rounded-md" />
        </div>{" "}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-12">
        <div className="flex flex-col gap-4">
          <div className=" bg-gray-800/50 h-8  w-full rounded-md" />
          <div className=" bg-gray-800/50 h-12  w-full rounded-md" />
        </div>
        <div className="flex flex-col gap-4 ">
          <div className=" bg-gray-800/50 h-8  w-full rounded-md" />
          <div className=" bg-gray-800/50 h-12  w-full rounded-md" />
        </div>{" "}
      </div>
      <div className="grid md:grid-cols-1 grid-cols-1 gap-4 mx-12">
        <div className="flex flex-col gap-4">
          <div className=" bg-gray-800/50 h-8  w-full rounded-md" />
          <div className=" bg-gray-800/50 h-4  w-full rounded-md" />
        </div>
        <div className="flex flex-col gap-4">
          <div className=" bg-gray-800/50 h-4  w-full rounded-md" />
          <div className=" bg-gray-800/50 h-4  w-full rounded-md" />
        </div>{" "}
      </div>
    </div>
  );
};

export const AboutInfoLoadingPage = () => {
  return (
    <div className="flex flex-col animate animate-pause gap-4 mx-4 my-6">
      <div className="flex flex-col gap-4">
        <div className=" bg-gray-800/50 h-2  w-full rounded-md" />
        <div className=" bg-gray-800/50 h-4  w-full rounded-md" />
        <div className=" bg-gray-800/50 h-4  w-full rounded-md" />
      </div>
      <div className="flex flex-col gap-4 mt-12">
        <div className=" bg-gray-800/50 h-6  w-full rounded-md" />
        <div className=" bg-gray-800/50 h-4  w-full rounded-md" />
        <div className=" bg-gray-800/50 h-4  w-full rounded-md" />
      </div>
    </div>
  );
};

export const ContributorsLoading = () => {
  return (
    <div className="flex flex-wrap justify-between  gap-2 my-2">
      <div className="flex -space-x-6">
        <div className=" bg-gray-800/50 h-12 w-12  rounded-full animate animate-pause" />
        <div className=" bg-gray-800/50 h-12 w-12  rounded-full animate animate-pause" />
        <div className=" bg-gray-800/50 h-12 w-12  rounded-full animate animate-pause" />
      </div>
      <div className="flex ">
        <div className=" bg-gray-800/50 h-6  w-[150px] rounded-md animate animate-pause" />
      </div>
    </div>
  );
};
