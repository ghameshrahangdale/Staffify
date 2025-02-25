import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LatestJob } from "../../data/MockData";
import img from "../../../assets/Images/img3.jpeg";
import JobListings from "./JobListings";
import FilterJobs from "./FilterJobs";

const JobList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [industry, setIndustry] = useState("All");
  const [experience, setExperience] = useState("Any Experience");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [jobType, setJobType] = useState("Any Job Type");

  useEffect(() => {
    let jobs = [...LatestJob];

    if (searchTerm) {
      jobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (industry !== "All") {
      jobs = jobs.filter((job) => job.industry === industry);
    }

    // if (experience !== "Any Experience") {
    //   jobs = jobs.filter((job) => job.experience === experience);
    // }

    // if (minSalary) {
    //   jobs = jobs.filter(
    //     (job) => parseInt(job.salaryRange.split("₹")[1].split(",").join("")) >= parseInt(minSalary)
    //   );
    // }

    // if (maxSalary) {
    //   jobs = jobs.filter(
    //     (job) => parseInt(job.salaryRange.split("₹")[1].split(",").join("")) <= parseInt(maxSalary)
    //   );
    // }

    // if (jobType !== "Any Job Type") {
    //   jobs = jobs.filter((job) => job.jobType === jobType);
    // }

    jobs.sort((a, b) =>
      sortBy === "Newest"
        ? new Date(b.postedDate) - new Date(a.postedDate)
        : new Date(a.postedDate) - new Date(b.postedDate)
    );

    setFilteredJobs(jobs);
  }, [searchTerm, sortBy, industry, experience, minSalary, maxSalary, jobType]);

  return (
    <div className="bg-white min-h-screen flex justify-center">
      <div className="w-full">
        <div
          className="relative bg-cover bg-center text-white p-10 w-full h-[200px] flex items-center justify-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <h2 className="text-4xl font-bold text-white text-center">
            Find Jobs by Job Categories
          </h2>
        </div>
        <div className="flex flex-col bg-gray-100 lg:flex-row gap-6 py-6 px-20">
          <FilterJobs
            {...{
              searchTerm,
              setSearchTerm,
              industry,
              setIndustry,
              experience,
              setExperience,
              minSalary,
              setMinSalary,
              maxSalary,
              setMaxSalary,
              jobType,
              setJobType,
            }}
          />
          <JobListings {...{ filteredJobs, sortBy, setSortBy }} />
        </div>
      </div>
    </div>
  );
};

export default JobList;
