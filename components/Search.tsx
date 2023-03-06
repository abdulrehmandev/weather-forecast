import React, { FunctionComponent, useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";

import { GEO_API_URL, geoApiCities } from '../config';
interface SearchProps {
  onSearch: any,
}

const Search: FunctionComponent<SearchProps> = ({ onSearch }) => {
  let [city, setCity] = useState<string>('');

  const handleChange = (searchInput: string) => {
    setCity(searchInput);
    onSearch(searchInput);
  }

  const handleOptions = (searchInput: string) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${searchInput}`,
      geoApiCities
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.city}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };


  return (
    <form className="search-form">
      <AsyncPaginate
        className="search"
        placeholder="Search for City"
        debounceTimeout={600}
        onChange={(event: string) => {
          handleChange(event);
        }}
        value={city}
        loadOptions={handleOptions}
      />
    </form>
  );
}

export default Search;