import Data from "../../../data.json";
import JobBox from "../../__molecules/JobBox/JobBox";
import { useState } from "react";

type Job = {
  id: number;
  company: string;
  contract: string;
  featured: boolean;
  level: string;
  location: string;
  logo: string;
  new: boolean;
  position: string;
  postedAt: string;
  languages: string[];
  role: string;
  tools: string[];
};

function MainContainer() {
  const [data, setData] = useState<Job[]>(Data);

  console.log(data);
  return (
    <>
      <div className="w-full h-[156px] bg-Cyan "></div>
      <div className="w-full  bg-Bg] py-17">
        <div className="w-full max-w-[1110px] mx-auto flex flex-col gap-6">
          {data.map((job: Job) => {
            return <JobBox job={job} key={job.id} />;
          })}
        </div>
      </div>
    </>
  );
}
export default MainContainer;
