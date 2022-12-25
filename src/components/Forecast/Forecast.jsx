import "./forecast.scss";

export default function Forecast({ data }) {
	return (
		<div className="forecast">
			<p className="forecast__title">Daily</p>
			<div className="forecast__row">
				{data.map((el) => (
					<div className="forecast__day" key={el.day}>
						<p className="forecast__day-title">{el.day}</p>
						<img
							src={`./icons/${el.icon}.png`}
							alt=""
							className="forecast__day-icon"
						/>
						<div className="forecast__day-temp-row">
							<p className="forecast__day-temp">{el.temp}°</p>
							<p className="forecast__day-low">{el.min}°</p>
						</div>
						<p className="forecast__day-main">{el.main}</p>
					</div>
				))}
			</div>
		</div>
	);
}
