import './Home.css'
import useCountries from '../util/useCountries.js';

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
        {useCountries().map(country => (
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
