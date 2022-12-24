import { useState } from "react";
import Forecast from "./components/Forecast/Forecast";
import Search from "./components/Search/Search";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import { WEATHER_API_URL } from "./_api";
import { weather_api_key } from "./_api_key";

function App() {
	let [crrWeather, setCrrWeather] = useState(null);
	let [forecast, setForecast] = useState(null);

	function splitDate(date) {
		let dateSplit = date.toDateString().split(" ");
		return `${dateSplit[0]}, ${dateSplit[2]}`;
	}

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

		fetch(
			`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`
		)
			.then((response) => response.json())
			.then((response) => {
				let _data = [];
				let _tempDay = null;
				response.list.forEach((day) => {
					const time = new Date(day.dt * 1000);
					if (time.getDate() === _tempDay) return;

					_data.push({
						day: splitDate(time),
						temp: Math.round(day.main.temp),
						min: Math.round(day.main.temp_min),
						icon: day.weather[0].icon,
						main: day.weather[0].main,
					});
					_tempDay = time.getDate();
				});
				setForecast(_data);
			})
			.catch((err) => console.error(err));
	}

	return (
		<div className="container">
			<Search onSearch={_onSearch} />
			{crrWeather && <WeatherWidget data={crrWeather} />}
			{forecast && <Forecast data={forecast} />}
		</div>
	);
}

export default App;
