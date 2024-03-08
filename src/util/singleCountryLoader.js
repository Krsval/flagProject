const singleCountryLoader = async ({ params }) => {
    const { countryCode } = params;
  
    const countryRes = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
  
    if (!countryRes.ok) {
      throw Error(`Failed to load country data with code: ${countryCode}`);
    }
    const countryData = await countryRes.json();
    console.log('API', countryData);
    return { country: countryData };
  };

export default singleCountryLoader;