

const Job = ({job}) => {

    const {id, name, img, job_available} = job;
    return (
        <div className="p-5 bg-[#9E90FE1A]">
            <img className="p-3 bg-[#9E90FE40] w-[50px] rounded-lg" src={img} alt="" />
            <h1 className="text-2xl font-semibold text-black">{name}</h1>
            <h3 className="text-xl font-semibold text-gray-700">{job_available}</h3>
        </div>
    );
};

export default Job;