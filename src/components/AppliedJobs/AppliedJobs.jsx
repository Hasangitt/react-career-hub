import { useLoaderData } from "react-router-dom";
import AppliedBanner from "../AppliedBanner/AppliedBanner";
import Nav from "../NavBar/Nav";
import { useEffect, useState } from "react";
import { getStoreJobApplication } from "../StorageUtility/LocalStorage";
import UserAppliedJob from "./UserAppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayAppliedJobs, setDisplayAppliedJobs] = useState([]);

  const handleJobsFilter = filter =>{
    if(filter === 'all'){
      setDisplayAppliedJobs(appliedJobs);
    }
    else if (filter === 'remote'){
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayAppliedJobs(remoteJobs);
    }
    else if(filter === 'onsite'){
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayAppliedJobs(onsiteJobs);
    }
  }


  useEffect(() => {
    const storedIds = getStoreJobApplication();
    if (jobs.length > 0) {
      const appliedJobs = Object.values(jobs).filter((job) =>
        storedIds.includes(job.id)
      );
      setAppliedJobs(appliedJobs);
      setDisplayAppliedJobs(appliedJobs);
    }
  }, [jobs]);

  return (
    <div>
      <Nav></Nav>
      <AppliedBanner></AppliedBanner>
      <div className="flex justify-center mt-5">
        <details className="dropdown">
          <summary className="btn m-1">Sort By</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a onClick={() => handleJobsFilter('all')}>All</a>
            </li>
            <li>
              <a onClick={() => handleJobsFilter('remote')}>Remote</a>
            </li>
            <li>
              <a onClick={() => handleJobsFilter('onsite')}>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayAppliedJobs.map((job) => (
          <UserAppliedJob key={job.id} job={job}></UserAppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
