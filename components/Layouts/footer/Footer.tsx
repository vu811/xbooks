import React, { FC } from 'react'
import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrignt}>
        Made with{' '}
        <span role='img' aria-label='heart' aria-hidden='false'>
          ❤️
        </span>{' '}
        by XBOOKS
      </div>
    </footer>
  )
}

export default Footer
