import React, { useState, useEffect } from "react";
import "./Home.css";
import CountryCard from "../components/CountryCard/CountryCard";
import LoadingCountryCard from "../components/CountryCard/LoadingCountryCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Dropdown from "../components/Dropdown/Dropdown";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const countries = useLoaderData();


//Fördröjning för att visa Loading State
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);

  // Genererar 16 st Loading State kort
  const generatePlaceholders = (count) => {
    const placeholders = [];
    for (let i = 0; i < count; i++) {
      placeholders.push(<LoadingCountryCard key={i} />);
    }
    return placeholders;
  };

  if (loading) {
    return (
      <div className="Home">
        <div className="search">
          <SearchBar />
          <Dropdown />
        </div>
        <div className="card-layout">
          {generatePlaceholders(16)}
        </div>
      </div>
    );
  }

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
            capital={country.capital ? country.capital : "------"}
            population={new Intl.NumberFormat("en-US").format(
              country.population
            )}
            language={
              country.languages ? Object.values(country.languages)[0] : "------"
            }
            cca3={country.cca3}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
