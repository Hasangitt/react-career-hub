import { Link, useLoaderData, useParams } from "react-router-dom";
import Nav from "../NavBar/Nav";
import JobBanner from "./JobBanner";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;
  return (
    <>
      <div>
        <Nav></Nav>
        <JobBanner></JobBanner>
      </div>
      <div className="grid grid-cols-4 mr-80 ml-80 mt-10 mb-10">
        <div className="col-span-3">
          <div className="space-y-2">
            <p className="text-xl font-semibold text-black">Job Description:</p>
            <p className="text-gray-500">{job_description}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-black">
              Job Responsibility:
            </p>
            <p className="text-gray-500">{job_responsibility}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-black">
              Educational Requirements:
            </p>
            <p className="text-gray-500">{educational_requirements}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-black">Experiences:</p>
            <p className="text-gray-500">{experiences}</p>
          </div>
        </div>
        <div className="bg-[#7E90FE1A] p-5 space-y-3">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-black mb-4">
              Job Details:
            </h4>
            <hr />
            <p className="text-gray-500">Job Title: {job_title}</p>
            <p className="text-gray-500">Salary: {salary}</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-black mb-4">
              Contact Information:
            </h4>
            <hr />
            <p className="text-gray-500">Phone: {contact_information.phone}</p>
            <p className="text-gray-500">Email: {contact_information.email}</p>
            <p className="text-gray-500">
              Address: {contact_information.address}
            </p>
          </div>
          <div>
            <Link to="/applied jobs">
              <button className="btn w-full">Applied Job</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
