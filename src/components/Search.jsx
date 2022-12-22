import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiCities } from "../_api_geo";

export default function SearchForm({ searchChange }) {
	const [city, setCity] = useState(null);

	const handleChange = (searchInput) => {
		// console.log(searchInput);
		setCity(searchInput);
		searchChange(searchInput);
	};

	const handleOptions = (searchInput) => {
		return fetch(
			`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${searchInput}`,
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
				placeholder="Search for City"
				debounceTimeout={600}
				onChange={(event) => {
					setCity(event);
					searchChange(city);
				}}
				value={city}
				loadOptions={handleOptions}
			/>
		</form>
	);
}
