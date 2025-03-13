import { useState } from "react";
import Data from "../../../data.json";
type jobProps = {
  text: string;
};

function JobBtn({ text,  job }: jobProps) {
  const [bgColor, setBgColor] = useState<Boolean>(true);

  const fn = () => {
    setBgColor(!bgColor);
    const filteredData = Data.filter((job) => {
      return job.id == job.id
    });
  };
  return (
    <>
      <button
        onClick={fn}
        className={`${bgColor ? "bg-Bg" : "bg-Main"} px-[10px] py-1.5 ${
          bgColor ? "text-Main" : "text-white"
        } font-bold rounded-[4px] cursor-pointer transition-all duration-175`}>
        {text}
      </button>
    </>
  );
}
export default JobBtn;
