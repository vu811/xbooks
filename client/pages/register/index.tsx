import React from 'react';
import { SignLayout } from 'components/Layouts'
import { Form, Input, Button, Row, Col, Divider } from 'antd';
import {
  FacebookOutlined,
  GoogleOutlined
 } from '@ant-design/icons'

import styles from 'styles/Register.module.scss';

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.signUpTitle}>Đăng ký</div>
      <div>
      <Form>
        <div className={styles.formItem}>
          <Input placeholder="Email" />
        </div>
        <div className={styles.formItem}>
          <Input.Password placeholder="Mật khẩu" />
        </div>
        <div className={styles.formItem}>
          <Button className={styles.btnSignUp} type="primary" danger>Đăng ký</Button>
        </div>
        <Divider className={styles.devider}>HOẶC</Divider>
        <Row gutter={[8, 8]}>
          <Col span={12}>
          <Button className={styles.btnSocialMedia} icon={<FacebookOutlined />} type="primary">Facebook</Button>
          </Col>
          <Col span={12}>
          <Button className={styles.btnSocialMedia} icon={<GoogleOutlined />} type="primary" danger>Google</Button>
          </Col>
        </Row>
      </Form> 
      </div>
    </div>
  )
};

 Register.Layout = SignLayout;
 Register.HeaderText = 'Đăng ký';

export default Register;
