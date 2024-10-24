import { Link } from "react-router-dom";


const FeatureJob = ({jobFeature}) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = jobFeature;
    return (
        <div className="p-10 bg-white border border-black rounded-lg space-y-2 flex-col flex w-[600] h-auto">
            <img className="w-[124px]" src={logo} alt="" />
            <h1 className="text-2xl text-black">{job_title}</h1>
            <h5 className=" text-gray-600">{company_name}</h5>
            <div className="flex gap-4">
                <p className="bg-blue-200 border text-black p-2 rounded-lg">{remote_or_onsite}</p>
                <p className="bg-blue-200 border  text-black p-2 rounded-lg">{job_type}</p>
            </div>
            <div className="flex flex-grow gap-4">
                <p>Loacation: {location}</p>
                <p>Salary: {salary}</p>
            </div>
            <Link to={`/job/${id}`}>
            <button className="btn mt-4">View Details</button>
            </Link>
        </div>
    );
};

export default FeatureJob;

