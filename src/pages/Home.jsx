import React from "react";
import './Home.css'

import CountryCard from "../components/CountryCard/CountryCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Dropdown from "../components/Dropdown/Dropdown";

const Home = () => {
  return (
    <div className="home-page">
      <div className="search">
      <SearchBar />
      <Dropdown />
      </div>
      <div className="card-layout">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      </div>
    </div>
  );
};

export default Home;
