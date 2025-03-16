import { useEffect, useState } from "react";

type dataType = {
  id: number,
  text: string,
};
function JobList() {
  const [data, setData] = useState<dataType[]>([]);

  const RemoveItem = (text :  dataType ) => {
    const removeItem = data.filter((item ) => {
      return item.text !== text.text;
    });
    setData(removeItem)
    localStorage.setItem("item", JSON.stringify(removeItem));
  };

  useEffect(() => {
    const GetItem = localStorage.getItem("item");
    const ParsedItem =  GetItem ? JSON.parse(GetItem) : [];
    setData(ParsedItem);
  }, []);
  return (
    <>
      {data && data.length > 0 ? (
        <div className=" w-full max-w-[1110px] mx-auto py-5 px-10 shadow-xl gap-6 bg-white rounded-[5px] mt-[-100px] flex">
          {data.map((text ) => {
            return (
              <div
                className="flex  bg-[#adbaba80] rounded-[5px] items-center"
                key={text.id}>
                <h1 className="text-[16px] px-[9px] text-[#5CA5A5]  font-700 ">
                  {text.text}
                </h1>
                <div
                  className="w-8 h-8 flex items-center justify-center bg-Main cursor-pointer hover:bg-black"
                  onClick={() => RemoveItem(text)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.435 2.12132L11.3137 0L6.71751 4.59619L2.12132 0L0 2.12132L4.59619 6.71751L0 11.3137L2.12132 13.435L6.71751 8.83883L11.3137 13.435L13.435 11.3137L8.83883 6.71751L13.435 2.12132Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
export default JobList;
