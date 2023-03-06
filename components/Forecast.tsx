import { FunctionComponent } from "react";
import forecastStyles from '../styles/Forecast.module.scss';

interface ForecastProps {
  data: any,
}

const Forecast: FunctionComponent<ForecastProps> = ({ data }) => {
  return (
    <section className={forecastStyles.forecast}>
      <p className={forecastStyles.forecast__title}>Daily</p>
      <div className={forecastStyles.forecast__row}>
        {data.map((el: any) => (
          <div className={forecastStyles.forecast__day} key={el.day}>
            <p className={forecastStyles.forecast__day_title}>{el.day}</p>
            <img
              src={`./icons/${el.icon}.png`}
              alt=""
              className={forecastStyles.forecast__day_icon}
            />
            <div className={forecastStyles.forecast__day_temp_row}>
              <p className={forecastStyles.forecast__day_temp}>{el.temp}°</p>
              <p className={forecastStyles.forecast__day_low}>{el.min}°</p>
            </div>
            <p className={forecastStyles.forecast__day_main}>{el.main}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Forecast;