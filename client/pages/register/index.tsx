import React, { FC } from 'react';
import { FsLayout } from '../../components/Layouts/FullScreen'
import styles from '../../styles/Register.module.scss';

const Register = () => {
  return (
    <div className={styles.register}>
      This is register form
    </div>
  )
};

Register.Layout = FsLayout;

export default Register;
