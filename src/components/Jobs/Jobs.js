import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/jobs/JobsSlice";
import Job from "./Job";

const Jobs = ({ filterBy, sortBy, searchBy }) => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );

  const dispatch = useDispatch();

  //dispatch all jobs
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // filter jobs based on filter options
  useEffect(() => {
    const filterJobs = () => {
      let filteredArray = [...jobs];

      if (filterBy === "Internship") {
        filteredArray = filteredArray.filter((dt) => dt.type === "Internship");
      }
      if (filterBy === "Full Time") {
        filteredArray = filteredArray.filter((dt) => dt.type === "Full Time");
      }
      if (filterBy === "Remote") {
        filteredArray = filteredArray.filter((dt) => dt.type === "Remote");
      }

      // filter by search
      if (searchBy) {
        filteredArray = filteredArray.filter((job) =>
          job.title?.toLowerCase().includes(searchBy)
        );
      }

      // sort by price
      if (sortBy === "Salary (Low to High)") {
        filteredArray = filteredArray
          .slice()
          .sort((a, b) => a.salary - b.salary);
      }
      if (sortBy === "Salary (High to Low)") {
        filteredArray = filteredArray
          .slice()
          .sort((a, b) => b.salary - a.salary);
      }

      setFilteredJobs(filteredArray);
    };

    filterJobs();
  }, [jobs, filterBy, sortBy, searchBy]);

  // condition and output
  let content = "";
  if (isLoading) content = <p style={{ color: "white" }}>Loading ...</p>;
  if (!isLoading && isError)
    content = <p style={{ color: "white" }}>{error} ...</p>;
  if (!isLoading && !isError && filteredJobs?.length === 0)
    content = <p style={{ color: "white" }}>No job found!!!</p>;
  if (!isLoading && !isError && filteredJobs?.length !== 0)
    content = filteredJobs?.map((job) => <Job key={job.id} job={job} />);

  return <div className="jobs-list">{content}</div>;
};

export default Jobs;
