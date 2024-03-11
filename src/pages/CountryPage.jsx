import "./CountryPage.css";
import SingleCountry from "../components/singleCountry/singleCountry.jsx";
import { useLoaderData, Link } from "react-router-dom";

const CountryPage = () => {
  const { country } = useLoaderData();

  if (!country) {
    return <div>Loading...</div>
  }

  return (
    <div className="country-page">
      <Link className="go-back-button" to="/">
        <img className="arrow-left" src="../src/assets/arrow-left.svg" alt="back" />
        BACK
      </Link>
      <div className="country-info">
        {country.map((countryData) => (
          <SingleCountry
            key={countryData.name.common}
            flag={countryData.flags.svg}
            alt={countryData.flag.alt}
            country={countryData.name.common}
            nativeName={countryData.name.nativeName ? countryData.name.nativeName : '------'}
            capital={countryData.capital ? countryData.capital : '------'}
            population={new Intl.NumberFormat("en-US").format(
              countryData.population
            )}
            borderCountries={countryData.borders ? countryData.borders.map((border) => border) : []}

            languages={countryData.languages ? Object.values(countryData.languages)[0] : '------'}
            region={countryData.region}
            domain={countryData.tld}
            currency={countryData.currencies}
            cca3={countryData.cca3}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryPage;