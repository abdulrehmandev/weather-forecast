import React, { FunctionComponent } from 'react';
import footerStyles from '../styles/Footer.module.scss';

const Footer: FunctionComponent = () => {
  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.footer__text}>
        Coded by{" "}
        <a className={footerStyles.footer__link} href="https://abdulrehmadev.github.io/">
          Abdul Rehman
        </a>
      </p>
    </footer>
  );
}

export default Footer;