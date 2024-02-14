import React, { useEffect, useState } from "react";
import { apiURL } from '../util/api.js'
import './Home.css'

import CountryCard from "../components/CountryCard/CountryCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Dropdown from "../components/Dropdown/Dropdown";

const Home = () => {

  const [countries, setCountries] = useState([])

  const getAllCountries = async() => {
    const res = await fetch(`${apiURL}`);
    const data = await res.json();
    console.log(data);
    setCountries(data)
  }

  useEffect(() => {
    getAllCountries()
  },[])

  return (
    <div className="home-page">
      <div className="search">
      <SearchBar />
      <Dropdown />
      </div>
      <div className="card-layout">
        {countries.map(country => (
          <CountryCard
            key={country.name.common}
            flag={country.flags.png}
            country={country.name.common}
            capital={country.capital}
            population={new Intl.NumberFormat('en-US').format(country.population)}
            languages={Object.values(country.languages).join(', ')}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
