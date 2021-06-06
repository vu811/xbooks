import { Input } from 'antd';
import React, { FC } from 'react';
import {
  UserOutlined 
} from '@ant-design/icons';

import styles from './Header.module.scss';

const Header : FC = () => {
  return (
    <header className={styles.header} >
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          XBOOKS
        </div>
        <div className={styles.headerLineSecond}>
          <div className={styles.searchBox}>
          <Input placeholder='Tìm kiếm trên XBOOKS' />
          </div>
          <div className={styles.login}><UserOutlined />
            <span className={styles.loginText}>Đăng nhập</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
