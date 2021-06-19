import React, { FC } from 'react'
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons'
import { Button, Col } from 'antd'
import { signIn } from 'next-auth/client'

import styles from './AuthProvider.module.scss'

export interface ProviderProp {
  id: string
  name: string
}

export interface AuthProviderProps {
  providers: ProviderProp[]
}

const AuthProvider: FC<AuthProviderProps> = ({ providers }) => {
  return (
    <>
      {Object.values(providers).map((provider) => {
        const icon = provider.name === 'Facebook' ? <FacebookOutlined /> : <GoogleOutlined />
        return (
          <Col key={provider.name} span={12}>
            <Button className={styles.btnSocialMedia} icon={icon} type='primary' danger={provider.name === 'Google'} onClick={() => signIn(provider.id)}>
              {provider.name}
            </Button>
          </Col>
        )
      })}
    </>
  )
}

export default AuthProvider
