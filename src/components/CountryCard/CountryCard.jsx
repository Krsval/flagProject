import "./CountryCard.css";
import { Link } from "react-router-dom";

const CountryCard = ({ flag, country, capital, population, languages, onClick }) => {

  return (
    <div className="CountryCard" onClick={onClick}>
      <div className="flag">
        <img src={flag} alt={country} />
      </div>
      <div className="text-section">
        <h4>{country}</h4>
        <br />
        <div>
          <h5>Capital:</h5>
          <p>{capital}</p>
        </div>
        <div>
          <h5>Population:</h5>
          <p>{population}</p>
        </div>
        <div>
          <h5>Language:</h5>
          <p>{languages}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
