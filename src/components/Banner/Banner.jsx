import userImg from "../../assets/images/user.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      {/* banner Content */}
      <section className="flex items-center justify-between md:ml-80 mr-[160px] mt-11">
        <div className="space-y-5">
          <h1 className="text-6xl text-black font-bold ">
            One Step <br />
            Closer To Your <br />
            <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p className="text-xl text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Link>
            <button className="btn mt-8">Get Started</button>
          </Link>
        </div>
        <div>
          <img className="" src={userImg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
