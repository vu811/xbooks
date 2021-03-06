import React, { FC } from 'react'
import { Header } from 'components/layouts/header'
import { Footer } from 'components/layouts/footer'
import { Layout as Layoutx } from 'antd'
const { Content } = Layoutx
import styles from './scss/Default.module.scss'

const Default: FC = ({ children }) => {
  return (
    <Layoutx className={styles.layout}>
      <Header />
      <Content className={styles.main}>
        <div className={styles.content}>{children}</div>
      </Content>
      <Footer />
    </Layoutx>
  )
}

export default Default
