import {  useState } from "react";
type jobProps = {
  text: string;
};

function JobBtn({ text }: jobProps) {
  const [bgColor, setBgColor] = useState<Boolean>(true)
    const GetItem = localStorage.getItem("item");
    const ParsedItem = GetItem ? JSON.parse(GetItem) : [];
  const fn = () => {
    setBgColor(!bgColor);

    const ItemObject = {
      text: text,
      id: new Date(),
    };

    let PushItem;

    PushItem = [...ParsedItem, ItemObject];
    localStorage.setItem("item", JSON.stringify(PushItem));
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

// const GetData = localStorage.getItem("item");
// const ParsedData = GetData ? JSON.parse(GetData) : [];

// const checkId = ParsedData.some((num: jobProps) => {
//   return num.id === arr
// });

// let updateStorage;

// if (checkId) {
//   updateStorage = ParsedData.filter((num: jobProps) => {
//     return num.role !== arr;
//   });
// } else {
//   const filteredData = Data.filter((job) => {
//     return job.role === arr;
//   });
//   updateStorage = [...ParsedData, ...filteredData];
// }
// localStorage.setItem("item", JSON.stringify(updateStorage));
