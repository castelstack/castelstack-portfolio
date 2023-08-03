"use client";

import axios, {AxiosResponse} from "axios";
import {useEffect, useMemo} from "react";

interface RepoData {
  name: string;
  description: string;
}
export const useFetchUserGit = ({
  setRepos,
  setLoad,
  isError,
  setFullInfo,
  setOrgs,
  username,
}: any) => {
  const fetchUsernameData = async (username: string) => {
    try {
      const response: AxiosResponse<RepoData[]> = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=updated`,
        {
          headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_GIT_KEY}`,
          },
        }
      );

      const reposData: RepoData[] | undefined = response?.data;
      setRepos(reposData);
    } catch (error: any) {
      setLoad(false);
      isError(error.message);
    }
  };

  const asyncFunc = useMemo(
    () => async () => {
      await axios
        .get(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_GIT_KEY}`,
          },
        })
        .then(async (res) => {
          setFullInfo(res?.data);
          setLoad(false);
          await axios
            .get(res?.data?.organizations_url, {
              headers: {
                Authorization: `token ${process.env.NEXT_PUBLIC_GIT_KEY}`,
              },
            })
            .then((result) => {
              setOrgs(result?.data);
            });
        })
        .then(() => {
          fetchUsernameData(username as string);
        })
        .catch(() => {
          setLoad(false);
        });
    },
    [username]
  );

  useEffect(() => {
    asyncFunc();
  }, [asyncFunc]);

  return {};
};
