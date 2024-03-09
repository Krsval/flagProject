const getAllCountries = async () => {
  return await fetch(`https://restcountries.com/v3.1/all`)
}

const getCountriesByFilters = async (searchTerm, region) => {
  if (region !== null) {
    return await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
  } else if (searchTerm !== null){
    return await fetch(
      `https://restcountries.com/v3.1/name/${searchTerm}`
    );
  } else {
    throw Error("Could not find any countries!");
  }

 }

const allCountriesLoader = async ({ request }) => {
  const url = new URL(request.url);
  const { searchParams } = url;
  const searchTerm = searchParams.get('search')
  const region = searchParams.get('region')
  const res = searchParams.size > 0 ? await getCountriesByFilters(searchTerm, region) : await getAllCountries()

 
  try {
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