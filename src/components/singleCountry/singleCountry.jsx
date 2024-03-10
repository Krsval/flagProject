import "./singleCountry.css";
import BorderSnippet from '../BorderSnippet/BorderSnippet'

const SingleCountry = ({
  flag,
  alt,
  country,
  nativeName,
  capital,
  population,
  languages,
  region,
  domain,
  currency,
  borderCountries
  
}) => {
  return (
    <div className="country-section">
      <div className="country_flag">
        <img src={flag} alt={alt} />
      </div>
      <div className="country_name_info_borders">
        <div className="country_name_info">
          <div className="country_name">{country}</div>
          <div className="country_info_text">
            <div className="left-text-section">
              <div className="single_line_info_text">
                <strong>Population:</strong>
                {population}
              </div>
              <div className="single_line_info_text">
                <strong>Region:</strong>
                {region}
              </div>
              <div className="single_line_info_text">
                <strong>Capital: </strong>
                {capital}
              </div>
              <div className="single_line_info_text">
                <strong>Native name: </strong>
                {nativeName ? Object.values(nativeName)[0].common : '------'}
                
              </div>
            </div>
            <div className="right-text-section">
              <div className="single_line_info_text">
                <strong>Top domain:</strong> {domain}
              </div>
              <div className="single_line_info_text">
                <strong>Currency:</strong> {currency ? Object.values(currency)[0].name : '------'}
              </div>
              <div className="single_line_info_text">
                <strong>Laguage:</strong> {languages}
              </div>
            </div>
          </div>
        </div>
        <div className="border-countries">
          <h4>Border Countries</h4>
          <div className="snippets">
            {borderCountries.map((border) => (
              <BorderSnippet border={border} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
