"use client";

import {ArrowDown, InfoLayout, Minus} from "@/components/Commons";
import {ContributorsLoading} from "@/components/Loading";
import axios from "axios";
import type {NextComponentType, NextPageContext} from "next";
import {useEffect, useState} from "react";
import Contributors from "./Contributors";
import RepoStats from "./RepoStats";

const RepoInformation: NextComponentType<NextPageContext, {}, any> = ({item, index, repos}) => {
  const [openTab, setOpenTab] = useState(false);
  const [contributors, setContributors] = useState([]);
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(false);
  const langKeys = Object.keys(languages);

  useEffect(() => {
    const fetchRepoInformation = async () => {
      setLoading(true);
      await axios
        .get(
          `https://api.github.com/repos/${repos[index]?.owner?.login}/${repos[index]?.name}/contributors`,
          {
            headers: {
              Authorization: `token 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`,
            },
          }
        )
        .then((res) => {
          setContributors(res?.data);
        })
        .then(
          async () =>
            await axios
              .get(
                `https://api.github.com/repos/${repos[index]?.owner?.login}/${repos[index]?.name}/languages`,
                {
                  headers: {
                    Authorization: `token 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`,
                  },
                }
              )
              .then((res) => {
                setLanguages(res?.data);
              })
              // .catch((err) => {
              //   console.log(err);
              // })
        )
        // .catch((err) => {
        //   console.log(err);
        // })
        .finally(() => {
          setLoading(false);
        });
    };
    if (openTab) {
      fetchRepoInformation();
    }
  }, [openTab]);

  return (
    <div
      key={item?.id}
      className="text-white border-l group  border-black   transition-all duration-300 ease-in delay-100"
    >
      <button
        onClick={() => {
          setOpenTab(!openTab);
        }}
        className="capitalize text-white   transition-all duration-300 ease w-full text-base flex justify-items-start items-center justify-between rounded-r-md border-tag/10 py-4 px-4 bg-white/5"
      >
        <div className="flex gap-2 items-center tracking-wider">
          {item.name}

          {
            <a
              href={item?.clone_url}
              target="_blank"
              rel="noreferrer"
              className="hidden group-hover:flex group-hover:transition-all group-hover:duration-300 ease-in ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 hover:text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
          }
        </div>
        {openTab ? <Minus /> : <ArrowDown />}
      </button>
      <div className={`md:px-4 px-2 py-2 ${openTab ? "flex flex-col" : "hidden"}`}>
        <InfoLayout title={"description"} texts={item?.description} />

        {loading ? (
          <ContributorsLoading />
        ) : (
          <Contributors langKeys={langKeys} contributors={contributors} />
        )}

        <RepoStats item={item} />
      </div>
    </div>
  );
};

export default RepoInformation;
