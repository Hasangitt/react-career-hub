import { useEffect, useState } from "react";
import Job from "../Job/Job";

const JobCategoryLists = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch("jobCategoryList.json")
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }, []);

  return (
    // comment for mr problem
    <div className="bg-white space-y-8 ml-80 mr-80 mb-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl text-black font-bold">Job Category List</h1>
        <p className="text-xl font-semibold text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid gap-14 md:grid-cols-4">
        {jobList.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryLists;
