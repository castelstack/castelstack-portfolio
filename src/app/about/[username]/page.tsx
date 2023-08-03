"use client";

import {UserNotFound} from "@/components/ErrorPage";
import {AboutLoadingPage} from "@/components/Loading";
import {useParams} from "next/navigation";
import {useState} from "react";
import BioAndOrgs from "../BioAndOrgs";
import LocationCompany from "../LocationCompany";
import ProfileHeader from "../ProfileHeader";
import RepoList from "../RepoList";
import Statistic from "../Statistic";
import {useFetchUserGit} from "../hooks/useFetchUserGit";

const AboutPage = () => {
  const [repos, setRepos] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const [fullInfo, setFullInfo] = useState<any>({});
  const [load, setLoad] = useState(true);
  const [error, isError] = useState("");

  const {username} = useParams();

  useFetchUserGit({setRepos, setLoad, isError, setFullInfo, setOrgs, username});

  if (error) {
    return <UserNotFound />;
  }

  return (
    <div className={`max-w-full pb-[8rem] backgroundDark min-h-screen`}>
      {load ? (
        <AboutLoadingPage />
      ) : (
        <>
          {fullInfo?.login ? (
            <>
              <div className="cover mb-[9rem]">
                <ProfileHeader fullInfo={fullInfo} />
              </div>
              <div className="!w-full  flex flex-col max-w-[1200px] !px-4 mx-auto  z-30">
                <div className="flex flex-col gap-4">
                  <LocationCompany company={fullInfo.company} location={fullInfo.location} />

                  <BioAndOrgs props={fullInfo} orgs={orgs} />
                  <Statistic fullInfo={fullInfo} />
                  <RepoList repos={repos} />
                </div>
              </div>
            </>
          ) : (
            <UserNotFound />
          )}
        </>
      )}
    </div>
  );
};

export default AboutPage;
