import { useEffect, useState } from "react";

const apiURL = 'https://restcountries.com/v3.1/all?fields=name,flags,population,capital,languages';

const useCountries = () => {
    const [countries, setCountries] = useState([])

  const getAllCountries = async() => {
    const res = await fetch(`${apiURL}`);
    const data = await res.json();
    setCountries(data)
  }

  useEffect(() => {
    getAllCountries()
  },[]);

  return countries;
}

export default useCountries;