type Job = {
  level: string;
  company: string;
  contract: string;
  location: string;
  position: string;
  postedAt: string;
  featured: boolean;
  new: boolean;
  role: string;
};

type jobProps = {
  job: Job;
};

function JobDescripiton({ job }: jobProps) {
  return (
    <>
      <div className="flex flex-col gap-0.5">
        <div className="flex gap-3 items-center">
          <p className="text-[18px] text-Main font-bold font-Spartan">
            {job.company}
          </p>
          <div className="flex gap-2">
            {job.new && (
              <div className="bg-[#5CA5A5] w-[51px] rounded-[12px] text-white px-2.5 py-1 h-6">
                <p className="font-Spartan text-[14px] font-bold uppercase">
                  New
                </p>
              </div>
            )}
            {job.featured && (
              <div className="bg-[#2B3939] w-[79px] rounded-[12px] text-white px-2 py-1 h-6">
                <p className="font-Spartan text-[14px] font-bold uppercase">
                  Featured
                </p>
              </div>
            )}
          </div>
        </div>
        <h2 className="text-[#2B3939] text-[22px] font-Spartan font-bold">{job.position}</h2>
        <div className="flex gap-2 items-center font-medium text-[#7C8F8F] font-Spartan text-[18px]">
          <p>{job.postedAt}</p>
          <p>{job.contract}</p>
          <p>{job.location}</p>
        </div>
      </div>
    </>
  );
}
export default JobDescripiton;
