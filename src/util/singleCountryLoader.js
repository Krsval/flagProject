

const singleCountryLoader = async (countryCode) => {
  
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data for country with code ${countryCode}`);
    }
    const singleData = await res.json();
    console.log(singleData);
    return singleData;
  } catch (error) {
    console.error('Error fetching single country data:', error);
    return null;
  }
}

export default singleCountryLoader;
