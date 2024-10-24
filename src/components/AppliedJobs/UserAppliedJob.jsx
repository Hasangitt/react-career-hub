import { Link } from "react-router-dom";

const UserAppliedJob = ({ job }) => {
  const {
    location,
    salary,
    job_title,
    company_name,
    logo,
    remote_or_onsite,
    job_type,
  } = job;
  return (
    <div className="mt-20 mb-20 ml-80 mr-80">
      <div className="flex gap-10 items-center border p-8 rounded-lg border-black">
        <div className="bg-gray-300 p-10 rounded-md">
          <img className="w-[140px]" src={logo} alt="" />
        </div>
        <div className="space-y-3 flex-grow">
          <div>
            <h1 className="text-black font-semibold text-2xl">{job_title}</h1>
            <p>{company_name}</p>
          </div>
          <div className="flex gap-4">
            <p className="bg-blue-200 border text-black p-2 rounded-lg">
              {remote_or_onsite}
            </p>
            <p className="bg-blue-200 border  text-black p-2 rounded-lg">
              {job_type}
            </p>
          </div>
          <div className="flex flex-grow gap-4">
            <p>Loacation: {location}</p>
            <p>Salary: {salary}</p>
          </div>
        </div>
        <div>
            <Link to={`/job/${job.id}`}><button className="btn">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default UserAppliedJob;
