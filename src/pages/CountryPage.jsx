import "./CountryPage.css";
import SingleCountry from "../components/singleCountry/singleCountry.jsx";
import { useLoaderData, useParams } from "react-router-dom";
import singleCountryLoader from "../util/singleCountryLoader.js";


const CountryPage = () => {
  const { countryCode } = useParams();
  const country = useLoaderData(singleCountryLoader(countryCode));
  console.log(country);

  

  return (
    <div className="country-page">
      <a className="go-back-button" href="/">
        <img src="src\assets\arrow-left.svg" alt="" />
        BACK
      </a>
      <div className="country-info">
        {country && (
          country.map(data => (
            <SingleCountry 
              key={data.name.common}
              flag={data.flags.png}
              country={data.name.common}
              capital={data.capital}
              population={new Intl.NumberFormat("en-US").format(data.population)}
              languages={Object.values(data.languages).slice(0,1)}
              cca3={data.cca3}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CountryPage;

