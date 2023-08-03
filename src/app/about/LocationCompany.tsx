import {InfoStat} from "@/components/Commons";

const LocationCompany = ({...props}: {company: string; location: string}) => {
  return (
    <div className="flex gap-4 justify-between flex-wrap">
      {props?.company && <InfoStat texts={props?.company} title={"company"} />}
      {props?.location && <InfoStat texts={props?.location} title={"location"} />}
    </div>
  );
};

export default LocationCompany;
