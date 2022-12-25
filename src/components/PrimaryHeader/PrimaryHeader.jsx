import "./primary-header.scss";

export default function PrimaryHeader() {
	return (
		<div className="header">
			<h3 className="header__title">React Weather Forecast</h3>
			<a href="https://github.com/abdulrehmandev/weather-forecast">
				<img src="./github-icon.png" alt="" className="header__icon" />
			</a>
		</div>
	);
}
