

const filteredRegionLoader = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/region${region}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch data for ${region}`);
      }
      const data = await res.json();
      const alphabeticOrder = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      return alphabeticOrder;
    } catch (error) {
      console.error(`Error fetching ${region} countries data:`, error);
      return null;
    }
  };
  
  export default filteredRegionLoader;
  