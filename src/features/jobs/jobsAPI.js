import axios from "../../utlis/Axios";

//get Jobs
export const getJobs = async () => {
  const response = await axios.get("/jobs");
  return response.data;
};

//Delete Jobs
export const deleteJob = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response.data;
};
//Change Jobs
export const changeJob = async (id,data) => {
  const response = await axios.patch(`/jobs/${id}`,{
     title: data.jobTitle,
    type: data.jobType,
    salary: data.jobSalary,
    deadline: data.jobDeadline,
  });
  return response.data;
};

//Post jobs
export const postJob = async (job) => {
  const response = await axios.post("/jobs", {
    title: job.jobTitle,
    type: job.jobType,
    salary: job.jobSalary,
    deadline: job.jobDeadline,
  });
  return response.data;
};
