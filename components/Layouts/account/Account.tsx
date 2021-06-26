import React, { FC } from 'react'

import styles from './Account.module.scss'

type accountProps = {
  avatar: string
  name: string
}

const Account: FC<accountProps> = ({ avatar, name }) => {
  return (
    <div className={styles.account}>
      <img src={avatar} alt='Avatar' />
      <span>{name}</span>
    </div>
  )
}

export default Account
