import { Link, NavLink } from "react-router-dom";
import userImg from "../../assets/images/user.png";
import "./Home.css";
import JobCategoryLists from "../JobCategory/JobCategoryLists";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <>
    {/* comment for mb problem */}
      <section className="bg-white mb-12">
        {/* nav menu */}
        <section className="md:ml-80 mr-80">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <NavLink>
                    <li>
                      <a>Statistics</a>
                    </li>
                  </NavLink>
                  <NavLink>
                    <li>
                      <a>Applied Jobs</a>
                    </li>
                  </NavLink>
                  <NavLink>
                    <li>
                      <a>Blog</a>
                    </li>
                  </NavLink>
                </ul>
              </div>
              <NavLink>
                <a className="text-black text-2xl font-bold" href="">
                  CareerHub
                </a>
              </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <NavLink>
                  <li>
                    <a>Statistics</a>
                  </li>
                </NavLink>
                <NavLink>
                  <li>
                    <a>Applied Jobs</a>
                  </li>
                </NavLink>
                <NavLink>
                  <li>
                    <a>Blog</a>
                  </li>
                </NavLink>
              </ul>
            </div>
            <Link className="navbar-end">
              <button className="bg-[#9873FF] p-3 text-white font-semibold rounded-lg">
                Start Applying
              </button>
            </Link>
          </div>
        </section>
        {/* banner Content */}
        <section className="flex items-center justify-between md:ml-80 mr-[160px] mt-11">
          <div className="space-y-5">
            <h1 className="text-6xl text-black font-bold ">
              One Step <br />
              Closer To Your <br />
              <span className="text-[#7E90FE]">Dream Job</span>
            </h1>
            <p className="text-xl text-gray-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <Link>
              <button className="btn mt-8">Get Started</button>
            </Link>
          </div>
          <div>
            <img className="" src={userImg} alt="" />
          </div>
        </section>
      </section>
        <JobCategoryLists></JobCategoryLists>
        <FeaturedJobs></FeaturedJobs>
    </>
  );
};

export default Home;
