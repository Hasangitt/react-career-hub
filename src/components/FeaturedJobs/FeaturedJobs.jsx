import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {

    const [jobFeatures, setJobFeatures] = useState([]);

    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then (data => setJobFeatures(data))
    }, [])

    return (
        <div className="bg-white ml-80 mr-80">
            <div className="text-center space-y-5">
                <h1 className="text-4xl text-black font-bold">Featured Jobs</h1>
                <p className="text-xl font-semibold text-gray-600">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-10">
                {
                    jobFeatures.slice(2).map(jobFeature => <FeatureJob key={jobFeature.id} jobFeature={jobFeature}></FeatureJob>)
                }
            </div>
            <div className="flex justify-center mt-5">
            <Link><button className="btn">See All Jobs</button></Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;