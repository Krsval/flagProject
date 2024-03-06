import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Dropdown from "../components/Dropdown/Dropdown";
import { Outlet } from "react-router-dom";

import "./HomeLayout.css";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <div className="search">
        <SearchBar />
        <Dropdown />
      </div>
    <main>
      <Outlet />
    </main>
    </div>
  );
};

export default HomeLayout;
