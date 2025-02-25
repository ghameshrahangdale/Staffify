import { JobCategory } from "../../data/MockData";
import InputField from "../../../Common/InputField";
import { useState } from "react";

const FilterJobs = ({
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
}) => {
  const [filters, setFilters] = useState({
    searchTerm,
    industry,
    experience,
    minSalary,
    maxSalary,
    jobType,
  });

  const handleApplyFilters = () => {
    setSearchTerm(filters.searchTerm);
    setIndustry(filters.industry);
    setExperience(filters.experience);
    setMinSalary(filters.minSalary);
    setMaxSalary(filters.maxSalary);
    setJobType(filters.jobType);
  };

  return (
    <div className="w-full lg:w-1/3 flex flex-col gap-4">
      <div className="bg-white p-4 rounded-md shadow-md ">
        <h3 className="font-semibold text-lg text-black border-b-2 border-[#96BE25] pb-1 mb-3">
          Search Jobs
        </h3>
        <InputField
          label="Search Jobs"
          type="text"
          placeholder="Search Jobs..."
          value={filters.searchTerm}
          onChange={(e) =>
            setFilters({ ...filters, searchTerm: e.target.value })
          }
        />
      </div>
      <div className="bg-white p-4 rounded-md shadow-md ">
        <h3 className="font-semibold text-lg text-black border-b-2 border-[#96BE25] pb-1 mb-3">
          Industry
        </h3>
        <InputField
          label="Industry"
          type="select"
          options={[
            "All Industries",
            ...new Set(JobCategory.map((job) => job.name)),
          ]}
          value={filters.industry}
          onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
        />
      </div>
      <div className="bg-white p-4 rounded-md shadow-md ">
        <h3 className="font-semibold text-lg text-black border-b-2 border-[#96BE25] pb-1 mb-3">
          Min. Experience
        </h3>
        <InputField
          label="Experience"
          type="select"
          options={["Any Experience", "Fresher", "1-3 Years", "3-5 Years"]}
          value={filters.experience}
          onChange={(e) =>
            setFilters({ ...filters, experience: e.target.value })
          }
        />
      </div>
      <div className="bg-white p-4 rounded-md shadow-md ">
        <h3 className="font-semibold text-lg text-black border-b-2 border-[#96BE25] pb-1 mb-3">
          Salary
        </h3>
        <div className="flex gap-2">
          <InputField
            label="Min Salary"
            type="number"
            placeholder="Min"
            value={filters.minSalary}
            onChange={(e) =>
              setFilters({ ...filters, minSalary: e.target.value })
            }
          />
          <InputField
            label="Max Salary"
            type="number"
            placeholder="Max"
            value={filters.maxSalary}
            onChange={(e) =>
              setFilters({ ...filters, maxSalary: e.target.value })
            }
          />
        </div>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="font-semibold text-lg text-black border-b-2 border-[#96BE25] pb-1 mb-3">
          Job Type
        </h3>
        <InputField
          label="Job Type"
          type="select"
          options={[
            "Any Job Type",
            "Full Time Job (8 Hr.)",
            "Full Time Job (12 Hr.)",
            "Full Time 9-6 (8 Hr.)",
            "Shift (10 Hr.)",
          ]}
          value={filters.jobType}
          onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
        />
      </div>
      <button
        className="bg-[#96BE25] text-white p-2 rounded-md shadow-md hover:bg-green-600 transition"
        onClick={handleApplyFilters}
      >
        Apply Filter
      </button>
    </div>
  );
};

export default FilterJobs;
