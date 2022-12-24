import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL } from "../../_api";
import { geoApiCities } from "../../_api_key";

export default function Search({ onSearch }) {
	let [city, setCity] = useState(null);

	const handleChange = (searchInput) => {
		setCity(searchInput);
		onSearch(searchInput);
	};

	const handleOptions = (searchInput) => {
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
				placeholder="Search for City"
				debounceTimeout={600}
				onChange={(event) => {
					handleChange(event);
				}}
				value={city}
				loadOptions={handleOptions}
			/>
		</form>
	);
}
