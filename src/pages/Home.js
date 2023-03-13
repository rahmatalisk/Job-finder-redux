import React, { useState } from "react";
import Jobs from "../components/Jobs/Jobs";
import SearchSort from "../components/search-sort/SearchSort";

const Home = ({ filterBy }) => {
  const [searchBy, setSearchBy] = useState("");
  const [sortBy, setSortBy] = useState("");
  return (
    <>
      <div className="lg:pl-[14rem]  mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <SearchSort setSortBy={setSortBy} setSearchBy={setSearchBy} />
          <Jobs filterBy={filterBy} sortBy={sortBy} searchBy={searchBy} />
        </main>
      </div>
    </>
  );
};

export default Home;
