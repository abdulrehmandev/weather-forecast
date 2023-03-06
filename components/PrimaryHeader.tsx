import React, { FunctionComponent } from 'react';
import headerStyles from '../styles/PrimaryHeader.module.scss';

const PrimaryHeader: FunctionComponent = () => {
  return (
    <header className={headerStyles.header}>
      <h3 className={headerStyles.header__title}>React Weather Forecast</h3>
      <a href="https://github.com/abdulrehmandev/weather-forecast">
        <img src="./github-icon.png" alt="" className={headerStyles.header__icon} />
      </a>
    </header>
  );
}

export default PrimaryHeader;