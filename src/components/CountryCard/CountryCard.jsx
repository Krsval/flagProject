import "./CountryCard.css";
import { Link } from "react-router-dom";

const CountryCard = ({
  flag,
  country,
  capital,
  population,
  language,
  onClick,
  cca3,
}) => {
  return (
    <Link
      key={`${country}`}
      to={`/country/${cca3.toLowerCase()}`}
      style={{ textDecoration: "none" }}
    >
      <div className="CountryCard" onClick={onClick}>
        <div className="flag">
          <img className="flag_img" src={flag} alt={country} />
        </div>
        <div className="text-section">
          <div className="country_card_name">
            <strong>{country}</strong>
          </div>
          <br />
          <div>
            <strong>Capital:</strong>
            {capital}
          </div>
          <div>
            <strong>Population:</strong>
            {population}
          </div>
          <div>
            <strong>Language:</strong>
            {language}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
