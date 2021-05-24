import {
  GiftOutlined,
  LoginOutlined,
  ReadOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';

const { SubMenu } = Menu;

const Header: FC = () => {
  const router = useRouter();
  const [current, setCurrent] = useState('mail');
  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    router.push(`/${e.key}`);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <img src='/logo-x.png' alt='logo' onClick={() => setCurrent(null)} />
        </Link>
      </div>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode='horizontal'
        className={styles.menu}
        theme='dark'
      >
        <SubMenu key='books' icon={<ReadOutlined />} title='Books'>
          <Menu.ItemGroup title='Nonfiction'>
            <Menu.Item key='business'>Business/economics</Menu.Item>
            <Menu.Item key='health'>Health/fitness</Menu.Item>
            <Menu.Item key='science'>Science</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title='Fiction'>
            <Menu.Item key='romance'>Romance</Menu.Item>
            <Menu.Item key='horror'>Horror</Menu.Item>
            <Menu.Item key='comic'>Comic book</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key='giveaway' disabled icon={<GiftOutlined />}>
          Giveaway
        </Menu.Item>
        <Menu.Item key='register' icon={<UserAddOutlined />}>
          Register
        </Menu.Item>
        <Menu.Item key='login' icon={<LoginOutlined />}>
          Login
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
