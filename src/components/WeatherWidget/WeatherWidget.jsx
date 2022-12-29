import "./weather-widget.scss";

export default function WeatherWidget({ data }) {
	return (
		<section className="weather">
			<div className="weather__header">
				<p className="weather__title">Current Weather</p>
			</div>
			<div className="weather__body">
				<p className="weather__location">{data.location}</p>
				<div className="weather__temp-body">
					<img
						src={`./icons/${data.icon}.png`}
						alt=""
						className="weather__icon"
					/>
					<p className="weather__temp">{data.temp}°</p>
				</div>
				<p className="weather__main">{data.main}</p>
				<div className="weather__details">
					<p className="weather__detail">
						<span className="weather__detail-name">Feels Like</span>
						<span className="weather__detail-value">{data.feels_like} °</span>
					</p>
					<p className="weather__detail">
						<span className="weather__detail-name">Wind</span>
						<span className="weather__detail-value">
							{((data.wind * 3600) / 1000).toFixed(1)} kmph
						</span>
					</p>
					<p className="weather__detail">
						<span className="weather__detail-name">Visibility</span>
						<span className="weather__detail-value">
							{data.visibility / 1000} km
						</span>
					</p>
					<p className="weather__detail">
						<span className="weather__detail-name">Humidity</span>
						<span className="weather__detail-value">{data.humidity} %</span>
					</p>
				</div>
			</div>
		</section>
	);
}
