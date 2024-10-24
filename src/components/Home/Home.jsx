

import "./Home.css";
import JobCategoryLists from "../JobCategory/JobCategoryLists";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Nav from "../NavBar/Nav";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
    {/* comment for mb problem */}
      <section className="mb-12">
      <Nav></Nav>
       <Banner></Banner>
      </section>
      <section className="mb-12">
      <JobCategoryLists></JobCategoryLists>
      </section>
      <section className="mb-12">
      <FeaturedJobs></FeaturedJobs>
      </section>
       
    </>
  );
};

export default Home;
