
import { Link, NavLink } from "react-router-dom";
const Nav = () => {

  const scrollToFeatureJobs = () => {
    const section = document.getElementById('featured-jobs');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
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
            <NavLink to="/">
              <a className="text-black text-2xl font-bold" href="">
                CareerHub
              </a>
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-black font-semibold">
              <NavLink to="/">
                <li>
                  <a>Statistics</a>
                </li>
              </NavLink>
              <NavLink to="/applied jobs">
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
            <button 
            onClick={scrollToFeatureJobs}
            className="bg-[#9873FF] p-3 text-white font-semibold rounded-lg">
              Start Applying
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Nav;
