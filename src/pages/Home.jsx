import React from "react";
import "./Home.css";
import CountryCard from "../components/CountryCard/CountryCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const countries = useLoaderData();

  return (
    <div className="card-layout">
      {countries.map((country) => (
        <CountryCard
          key={country.name.common}
          flag={country.flags.png}
          country={country.name.common}
          capital={country.capital}
          population={new Intl.NumberFormat("en-US").format(country.population)}
          languages={Object.values(country.languages).slice(0, 1)}
          cca3={country.cca3}
        />
      ))}
    </div>
  );
};

export default Home;
