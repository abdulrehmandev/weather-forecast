import { useState, ChangeEvent } from "react";

export default function SearchForm() {
	const [city, setCity] = useState("");

	const updateCity = (e: ChangeEvent<HTMLInputElement>): void => {
		setCity(e.currentTarget.value);
	};

	return (
		<form className="search-form">
			<input
				className="form__input"
				type="text"
				placeholder="Enter City Name"
				value={city}
				onChange={updateCity}
			/>
			<button
				className="form__btn"
				type="submit"
				onClick={(e: any): void => {
					e.preventDefault();
				}}
			>
				Search
			</button>
		</form>
	);
}
