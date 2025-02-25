import { LatestJob } from "../../data/MockData";
const JobListings = ({ filteredJobs, sortBy, setSortBy }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center bg-white shadow-md rounded- mb-4 p-2 border-b border-gray-300">
        <span className="text-lg font-semibold text-black">
          Showing {filteredJobs.length} of {LatestJob.length} Jobs Results
        </span>
        <div className="dropdown dropdown-hover bg-white ">
          <label
            tabIndex={0}
            className="btn btn-sm btn-outline text-black border-gray-400 hover:bg-gray-200 hover:border-gray-500"
          >
            Sort By: {sortBy}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-30"
          >
            {["Newest", "Oldest"].map((sort) => (
              <li
                key={sort}
                onClick={() => setSortBy(sort)}
                className="rounded-md cursor-pointer"
              >
                <a>{sort}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {filteredJobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs found.</p>
      ) : (
        filteredJobs.map((job, index) => (
          <div
            key={index}
            className="w-full md:w-[80%] lg:w-[100%] mb-4 bg-white shadow-lg rounded-lg p-6 border border-gray-300 hover:shadow-xl hover:border-[#96BE25] transition-shadow duration-200"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="bg-[#96BE25] text-white px-3 py-1 rounded-full text-sm">
                  {job.jobType}
                </span>
                <h2 className="text-lg font-bold text-gray-800 mt-2">
                  {job.title}
                </h2>
                <h1 className="text-sm text-gray-600">{job.department}</h1>
                <h1 className="text-sm text-gray-600">
                  {job.salaryRange} | {job.experience}
                </h1>
                <h1 className="text-sm text-gray-600">{job.location}</h1>
              </div>
              <button className="bg-[#96BE25] text-white px-4 py-2 rounded-lg hover:bg-[#7aa61e] transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobListings;
