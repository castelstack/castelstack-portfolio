import {InfoLayout, InfoOrgLayout} from "@/components/Commons";
import React, {memo} from "react";

const BioAndOrgs = ({props, orgs}: any) => {
  return (
    <div className="grid  grid-cols-1 border-y border-white/5 py-6 my-2 items-start gap-2 ">
      {props?.bio && <InfoLayout title={"bio"} texts={props?.bio} />}
      {orgs?.length > 1 && <InfoOrgLayout title={"organizations"} list={orgs} />}
    </div>
  );
};

export default memo(BioAndOrgs);
