import { useEffect, useState } from "react";

const apiURL = 'https://restcountries.com/v3.1/all?fields=name,flags,population,capital,languages,region';

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  //.filter funktion på region i dropdown, sökfält och .sort på alfabetisk ordning

  const searchCountry = countries.filter((country) => country.name.common.toLowerCase().includes(searchItem.toLowerCase()))

  const filterByRegion = countries.filter((country) => !filterRegion || country.region.toLowerCase() === filterRegion.toLowerCase())
  
  const alphabeticOrder = countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (searchCountry, filterByRegion, alphabeticOrder)
};

export default useCountries;
