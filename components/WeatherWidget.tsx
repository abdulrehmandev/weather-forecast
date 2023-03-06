import { FunctionComponent } from "react";
import weatherStyles from '../styles/WeatherWidget.module.scss';

interface WeatherWidgetProps {
  data: any,
}

const WeatherWidget: FunctionComponent<WeatherWidgetProps> = ({ data }) => {
  return (
    <section className={weatherStyles.weather}>
      <div className={weatherStyles.weather__header}>
        <p className={weatherStyles.weather__title}>Current Weather</p>
      </div>
      <div className={weatherStyles.weather__body}>
        <p className={weatherStyles.weather__location}>{data.location}</p>
        <div className={weatherStyles.weather__temp_body}>
          <img
            src={`./icons/${data.icon}.png`}
            alt=""
            className={weatherStyles.weather__icon}
          />
          <p className={weatherStyles.weather__temp}>{data.temp}°</p>
        </div>
        <p className={weatherStyles.weather__main}>{data.main}</p>
        <div className={weatherStyles.weather__details}>
          <p className={weatherStyles.weather__detail}>
            <span>Feels Like</span>
            <span>{data.feels_like} °</span>
          </p>
          <p className={weatherStyles.weather__detail}>
            <span>Wind</span>
            <span>
              {((data.wind * 3600) / 1000).toFixed(1)} kmph
            </span>
          </p>
          <p className={weatherStyles.weather__detail}>
            <span>Visibility</span>
            <span>
              {data.visibility / 1000} km
            </span>
          </p>
          <p className={weatherStyles.weather__detail}>
            <span>Humidity</span>
            <span>{data.humidity} %</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WeatherWidget;