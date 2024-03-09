import React from "react";
import "./Home.css";
import CountryCard from "../components/CountryCard/CountryCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Dropdown from "../components/Dropdown/Dropdown";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const countries = useLoaderData();

  return (
    <div className="Home">
      <div className="search">
        <SearchBar />
        <Dropdown />
      </div>
    <div className="card-layout">
      {countries.map((country) => (
        <CountryCard
          key={country.name.common}
          flag={country.flags.png}
          country={country.name.common}
          capital={country.capital ? country.capital : '------'}
          population={new Intl.NumberFormat("en-US").format(country.population)}
          language={country.languages ? Object.values(country.languages)[0] : "------"}
          cca3={country.cca3}
        />
      ))}
    </div>
    </div>
  );
};

export default Home;
