import { Input, Row, Col } from 'antd'
import React, { FC } from 'react'
import { UserOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/client'
import { Account } from 'components/layouts/account'

import styles from './Header.module.scss'

const Header: FC = () => {
  const [session, loading] = useSession()
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Row>
          <Col span={18}>
            <Link href='/'>
              <span className={styles.logo}>XBOOKS</span>
            </Link>
            <div className={styles.headerLineSecond}>
              <div className={styles.searchBox}>
                <Input placeholder='Tìm kiếm trên XBOOKS' />
              </div>
            </div>
          </Col>
          <Col className={styles.userSection} span={6}>
            {session ? (
              <Account avatar={session?.user?.image} name={session?.user?.name} />
            ) : (
              <div className={styles.login}>
                <UserOutlined />
                <Link href='/login'>
                  <span className={styles.loginText}>Đăng Nhập</span>
                </Link>
              </div>
            )}
            {/* Temp Signout, implement later */}
            <div style={{ cursor: 'pointer', marginLeft: '10px' }} onClick={() => signOut()}>
              Đăng xuất
            </div>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default Header
