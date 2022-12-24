import "./weather-widget.scss";

export default function WeatherWidget({ data }) {
	function convertUnix(unixTime) {
		const time = new Date(unixTime * 1000);
		return time.toLocaleTimeString("en-US");
	}

	return (
		<section className="crr-weather">
			<div className="crr__header">
				<p className="crr__header-title">Current Weather</p>
				{/* <button className="crr__header-toggle">F</button> */}
			</div>
			<div className="crr__body">
				<div className="crr__main">
					<h3 className="crr__main-location">{data.location}</h3>
					<div className="crr__main-content">
						<div className="crr__main-left">
							<h1 className="crr__main-temp">{Math.round(data.temp)}°C</h1>
							<p className="crr__main-statement">{data.main}</p>
						</div>
						<img
							className="crr__main-icon"
							src={`./icons/${data.icon}.png`}
							alt=""
						/>
					</div>
				</div>
				<div className="crr__details">
					<h3 className="crr__details-title">Details</h3>
					<div className="crr__detials-humidity">
						<span className="humidity-text">Humidity</span>
						<span className="humidity-value">{data.humidity} %</span>
					</div>
					<div className="crr__detials-wind">
						<span className="humidity-text">Wind Speed</span>
						<span className="humidity-value">{data.wind} m/s</span>
					</div>
					<div className="crr__detials-sunrise">
						<span className="humidity-text">Sun Rise</span>
						<span className="humidity-value">{convertUnix(data.sunrise)}</span>
					</div>
					<div className="crr__detials-sunset">
						<span className="humidity-text">Sun Set</span>
						<span className="humidity-value">{convertUnix(data.sunset)}</span>
					</div>
				</div>
			</div>
		</section>
	);
}

// export default function WeatherWidget({data}) {
// 	console.log(data)
// 	return (
// 		<div className="wea">
// 			{ data && 'weather'}
// 		</div>
// 	)
// }
