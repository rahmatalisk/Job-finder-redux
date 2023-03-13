import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ setFilterBy }) => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="main-menu menu-active"
              id="lws-alljobs-menu"
              onClick={() => setFilterBy("")}
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </Link>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <Link
                  className="sub-menu"
                  to="/"
                  id="lws-internship-menu"
                  onClick={() => setFilterBy("Internship")}
                >
                  <i className="fa-solid mr-1 fa-stop !text-[#FF5757]"></i>
                  Internship
                </Link>
              </li>
              <li>
                <Link
                  className="sub-menu"
                  to="/"
                  id="lws-fulltime-menu"
                  onClick={() => setFilterBy("Full Time")}
                >
                  <i className="fa-solid mr-1 fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </Link>
              </li>
              <li>
                <Link
                  className="sub-menu"
                  to="/"
                  id="lws-remote-menu"
                  onClick={() => setFilterBy("Remote")}
                >
                  <i className="fa-solid mr-1 fa-stop !text-[#56E5C4]"></i>
                  Remote
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/form" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus mr-1"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
