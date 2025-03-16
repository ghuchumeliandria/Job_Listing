import Data from "../../../data.json";
import JobBox from "../../__molecules/JobBox/JobBox";
import JobList from "../../__molecules/JobBox/JobList/JobList";
import { Job } from "../../../Types/Type";
import { useEffect, useState } from "react";

function MainContainer() {
  const [data, setData] = useState<Job[]>(Data);

  useEffect(() => {
    const getData = localStorage.getItem("item");
    const ParsedData = getData ? JSON.parse(getData) : [];
    if (ParsedData.length > 0) {
       ParsedData.map((data: {text : string}) => {
        const filteredData = Data.filter((item) => {
          return item.role === data.text || item.languages.includes(data.text)
        });
        setData(filteredData);
      });
      console.log(data);
    } else {
      setData(Data);
    }
  }, []);

  return (
    <>
      <div className="w-full h-[156px] bg-Cyan "></div>
      <div className="w-full  bg-Bg] py-17 flex flex-col gap-10 relative bg-[#5CA5A5]">
        <JobList />
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
