import "./singleCountry.css";

const SingleCountry = ({
  flag,
  country,
  capital,
  population,
  languages,
  cca3
}) => {
  return (
    <div className="country-section">
      <img src={flag} alt={country} />
      <div className="overall-country-info">
        <div className="country-info">
          <h1>{country}</h1>
          <div>
            <section className="left-text-section">
              <p>Population: {population}</p>
              <p>Region: </p>
              <p>Capital: {capital}</p>
              <p>Native name: افغانستان</p>
            </section>
            <section className="right-text-section">
              <p>Top level domain: .af</p>
              <p>Currency: Afghan afghani</p>
              <p>Laguage: {languages}</p>
            </section>
          </div>
        </div>
        <div className="border-countries">
          <h4>Border Countries</h4>
          <div className="snippets">
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
