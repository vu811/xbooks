import React, { FC } from 'react';
import { Footer } from 'components/Footer';
import { Layout as Layoutx } from 'antd';
const { Content } = Layoutx;
import styles from './scss/Sign.module.scss';

const Sign = ({ children }) => {
  return (
    <Layoutx className={styles.layout} >
      <header className={styles.header} >
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            XBOOKS 
            <span className={styles.headerText}>{children.props.headerText}</span>
          </div>
      </div>
    </header>
      <Content className={styles.main}>
        <div className={styles.content}>
          {children}
        </div>
      </Content>
      <Footer />
    </Layoutx>
  );
};

export default Sign;
