import "./CountryCard.css";

const CountryCard = ({ flag, country, capital, population, languages }) => { 

  return (
    <div className="CountryCard">
      <div className="flag">
        <img src={flag} alt={country} />
      </div>
      <div className="text-section">
        <h4>{country}</h4>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <p>Language: {languages}</p>
      </div>
    </div>
  );
};

export default CountryCard;
