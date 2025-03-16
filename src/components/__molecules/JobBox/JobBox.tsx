import JobDescripiton from "../../__atoms/JobDescription/JobDescription";
import JobBtn from "../../__atoms/JobBtn/JobBtn";
import { Job } from "../../../Types/Type";
type JobProps = {
  job: Job;
};
function JobBox({ job  }: JobProps) {
  
  return (
    <>
      <div className="w-full bg-white py-8 px-10 shadow-xl rounded-[12px] flex justify-between items-center">
        <div className="flex gap-6">
          <img src={job.logo} alt="" />
          <div className="">
            <JobDescripiton job={job} />
          </div>
        </div>
        <div className="flex gap-4">
          <JobBtn  text={job.role}   />
          {job.languages.map((language, index) => {
            return (
              <div className="" key={index}>
                <JobBtn text={language}  />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default JobBox;
