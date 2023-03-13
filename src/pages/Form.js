import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  editInActive,
  fetchAddJobs,
  fetchChangeJob,
} from "../features/jobs/JobsSlice";

const Form = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobSalary, setJobSalary] = useState(0);
  const [jobDeadline, setJobDeadline] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { editing } = useSelector((state) => state.jobs);
  const { title, type, salary, deadline, id } = editing || {};

  useEffect(() => {
    if (editing.title) {
      setJobTitle(title);
      setJobType(type);
      setJobSalary(salary);
      setJobDeadline(deadline);
    }
  }, [deadline, title, salary, type, editing]);

  const reset = () => {
    setJobTitle("");
    setJobType("");
    setJobSalary("");
    setJobDeadline("");
  };

  //handle add job
  const handleAddJob = (e) => {
    e.preventDefault();
    dispatch(
      fetchAddJobs({
        jobTitle,
        jobType,
        jobSalary,
        jobDeadline,
      })
    );
    reset()
    navigate("/");
  };
  //handle add job
  const handleUpdateJob = (e) => {
    e.preventDefault();
    const data = { jobTitle, jobType, jobSalary, jobDeadline };
    dispatch(
      fetchChangeJob({
        id,
        data,
      })
    );
    dispatch(editInActive());
    navigate("/");
  };

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">
          {" "}
          {editing?.title ? "Edit Job" : "Add New Job"}
        </h1>

        <div className="max-w-3xl mx-auto">
          <form
            className="space-y-6"
            onSubmit={editing?.title ? handleUpdateJob : handleAddJob}
          >
            <div className="fieldContainer">
              <label
                forhtml="lws-JobTitle"
                className="text-sm font-medium text-slate-300"
              >
                Job Title
              </label>
              <select
                id="lws-JobTitle"
                name="lwsJobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
              >
                <option value="" hidden selected>
                  Select Job
                </option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label forhtml="lws-JobType">Job Type</label>
              <select
                id="lws-JobType"
                name="lwsJobType"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                required
              >
                <option value="" hidden selected>
                  Select Job Type
                </option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label forhtml="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  type="number"
                  name="lwsJobSalary"
                  id="lws-JobSalary"
                  required
                  className="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                  value={jobSalary}
                  onChange={(e) => setJobSalary(e.target.value)}
                />
              </div>
            </div>

            <div className="fieldContainer">
              <label forhtml="lws-JobDeadline">Deadline</label>
              <input
                type="date"
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                required
                value={deadline}
                onChange={(e) => setJobDeadline(e.target.value)}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
              >
                {editing?.title ? "Edit" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Form;
