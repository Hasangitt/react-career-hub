import { useLoaderData } from "react-router-dom";
import AppliedBanner from "../AppliedBanner/AppliedBanner";
import Nav from "../NavBar/Nav";
import { useEffect, useState } from "react";
import { getStoreJobApplication } from "../StorageUtility/LocalStorage";
import UserAppliedJob from "./UserAppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedIds = getStoreJobApplication();
    if (jobs.length > 0) {
      const appliedJobs = jobs.filter((job) => storedIds.includes(job.id));
      setAppliedJobs(appliedJobs);
    }
  }, []);

  return (
    <div>
      <Nav></Nav>
      <AppliedBanner></AppliedBanner>
      <div>
        {
            appliedJobs.map(job => <UserAppliedJob key={job.id} job={job}></UserAppliedJob>)
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
