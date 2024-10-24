import bgJobImg1 from "../../assets/images/bg1.png";
import bgJobImg2 from "../../assets/images/bg2.png";
const AppliedBanner = () => {
  return (
    <div>
      <div className="flex justify-between">
        <img src={bgJobImg1} alt="" />
        <h1 className="text-4xl text-black font-bold text-center mt-20">
         Applied Jobs
        </h1>
        <img className="relative  bottom-20 left-5" src={bgJobImg2} alt="" />
      </div>
    </div>
  );
};

export default AppliedBanner;
