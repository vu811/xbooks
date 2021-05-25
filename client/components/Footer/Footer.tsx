import React, { FC } from 'react';
import styles from './Footer.module.scss';

const Footer : FC = () => {
  return (
    <footer style={{ position: "sticky", bottom: "0" }} className={styles.footer}>X-Books ©2021 Created by Vu + Tuong</footer>
  );
};

export default Footer;
