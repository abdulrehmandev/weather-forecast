import { useState } from "react";
import Search from "./components/Search";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import { WEATHER_API_URL, weather_api_key } from "./_api";

function App() {
	let [crrWeather, setCrrWeather] = useState({});

	function _onSearch(searchInput) {
		const [lat, lon] = searchInput.value.split(" ");

		fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`
		)
			.then((response) => response.json())
			.then((response) => {
				const _data = {
					location: searchInput.label,
					temp: response.main.temp,
					main: response.weather[0].main,
					icon: response.weather[0].icon,
					humidity: response.main.humidity,
					wind: response.wind.speed,
					sunrise: response.sys.sunrise,
					sunset: response.sys.sunset,
				};
				setCrrWeather(_data);
			})
			.catch((err) => console.error(err));
	}

	return (
		<div className="container">
			<Search onSearch={_onSearch} />
			<WeatherWidget data={crrWeather} />
		</div>
	);
}

export default App;
