import React, { FC } from 'react'
import { Footer } from 'components/layouts/footer'
import { Layout as Layoutx } from 'antd'
const { Content } = Layoutx
import styles from './scss/Sign.module.scss'
import Link from 'next/link'

const Sign = ({ children, headerText }) => {
  return (
    <Layoutx className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href='/'>
              <span>XBOOKS</span>
            </Link>
            <span className={styles.headerText}>{headerText}</span>
          </div>
        </div>
      </header>
      <Content className={styles.main}>
        <div className={styles.content}>{children}</div>
      </Content>
      <Footer />
    </Layoutx>
  )
}

export default Sign
