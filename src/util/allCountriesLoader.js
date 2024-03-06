const apiURL ="https://restcountries.com/v3.1/all?fields=name,flags,population,capital,languages,region,cca3";

const allCountriesLoader = async () => {
  try {
    const res = await fetch(apiURL);
    if (!res.ok) {
      throw new Error('Failed to fetch data for all countries');
    }
    const data = await res.json();
    const alphabeticOrder = data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    return alphabeticOrder;
  } catch (error) {
    console.error('Error fetching all countries data:', error);
    return null;
  }
};

export default allCountriesLoader;
