import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LatestJob } from "../../data/MockData";
import img from "../../../assets/Images/icon.png";
import background from "../../../assets/Images/img3.jpeg";

const BrowseLatestJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(LatestJob);
  }, []);

  return (
    <div className="bg-gray-50  px-4 sm:px-6 lg:px-8">
      <div className="">
        {/* Banner Section */}
        <div
          className="relative bg-cover bg-center text-white p-10 w-full h-[200px] flex items-center justify-center mb-6"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <h2 className="text-4xl font-bold text-white text-center">
            Latest Jobs
          </h2>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 transition-all duration-200 hover:border-[#96BE25] flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              {/* Job Details */}
              <div className="space-y-2 w-full">
                <span className="bg-[#96BE25] text-white text-sm px-3 py-1 rounded-full inline-block">
                  {job.jobType}
                </span>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {job.title}
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-sm text-gray-600">
                  <span>{job.department}</span>
                  <span>{job.salaryRange}</span>
                  <span>{job.experience}</span>
                  <span>{job.location}</span>
                </div>
              </div>

              {/* Browse Job Button */}
              <Link to={`/browse/${job.id}`} className="w-full md:w-auto">
                <button className="bg-[#96BE25] hover:bg-[#86ae15] text-white px-4 sm:px-6 py-2 rounded-lg font-medium flex items-center gap-2 w-full md:w-auto justify-center">
                  Browse Job
                  <img
                    src={img}
                    alt="Job Icon"
                    className="w-5 sm:w-6 h-5 sm:h-6 rounded-full"
                  />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseLatestJobs;
