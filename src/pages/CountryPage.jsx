
import useCountries from "../util/useCountries.js";
import "./CountryPage.css";
import Snippet from "../components/Snippet/Snippet.jsx";

const CountryPage = (country) => {
  return (
    <div className="country-page">
      <a className="go-back-button" href="/">
        <img src="src\assets\arrow-left.svg" alt="" />
        BACK
      </a>
      <div className="country-section">
        <div className="img-tag"></div>
        <div className="overall-country-info">
          <div className="country-info">
            <h1>Afghanistan</h1>
            <div>
              <section className="left-text-section">
                <p>Population: 40,218,234</p>
                <p>Region: Asia</p>
                <p>Capital: Kabul</p>
                <p>Native name: افغانستان</p>
              </section>
              <section className="right-text-section">
                <p>Top level domain: .af</p>
                <p>Currency: Afghan afghani</p>
                <p>Laguage: Dari</p>
              </section>
            </div>
          </div>
          <div className="border-countries">
            <h4>Border Countries</h4>
            <div className="snippets">
              <Snippet />
              <Snippet />
              <Snippet />
              <Snippet />
              <Snippet />
              <Snippet />
              <Snippet />
              <Snippet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
