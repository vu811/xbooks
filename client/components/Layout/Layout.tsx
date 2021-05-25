import React, { FC } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Layout as Layoutx } from 'antd';
const { Content } = Layoutx;
import styles from './Wrapper.module.scss';

const Layout: FC = ({ children }) => {
  return (
    <Layoutx className='layout'>
      <Header />
      <Content>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer />
    </Layoutx>
  );
};

export default Layout;
