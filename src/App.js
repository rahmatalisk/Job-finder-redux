import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import './styles/style.css'
import SideBar from "./components/sideBar/SideBar";
import Form from "./pages/Form";
import { Route, Routes } from "react-router-dom";

function App() {
  const [filterBy, setFilterBy] = useState("");
  return (
    <>
      <Header />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <SideBar setFilterBy={setFilterBy} />
        <Routes>
          <Route path="/" element={<Home filterBy={filterBy}/>}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
