import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  const [jobFeatures, setJobFeatures] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobFeatures(data));
  }, []);

  return (
    <div className="bg-white ml-80 mr-80">
      <div className="text-center space-y-5 mb-5">
        <h1 className="text-4xl text-black font-bold">Featured Jobs</h1>
        <p className="text-xl font-semibold text-gray-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {jobFeatures.slice(0, dataLength).map((jobFeature) => (
          <FeatureJob key={jobFeature.id} jobFeature={jobFeature}></FeatureJob>
        ))}
      </div>
      <div className={dataLength === jobFeatures.length && 'hidden' || 'flex justify-center mt-10'}>
        <button
        onClick={() =>  setDataLength(jobFeatures.length)}
        className="btn">See All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
