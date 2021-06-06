import React, { FC, useState } from 'react';
import { SignLayout } from 'components/Layouts';
import { Form, Input, Button, Row, Col, Divider } from 'antd';
import {
  FacebookOutlined,
  GoogleOutlined
} from '@ant-design/icons';

import styles from 'styles/Register.module.scss';
interface RegisterProps {

}

const Register: FC<RegisterProps> = () => {
  const [form] = Form.useForm()
  const [isFormInvalid, setIsFormInvalid] = useState(false)

  const handleRegister = (values: any) => {
    console.log('sucess', values)
  }

  const onRegisterFailed = (errorInfo: any) => {
    console.log('failed', errorInfo)
  }

  const handleOnFieldChange = () => {
    const isInValid = () => form.getFieldsError().some((item) => item.errors.length > 0)
    setIsFormInvalid(isInValid)
  }

  return (
    <div className={styles.register}>
      <div className={styles.signUpTitle}>Đăng ký</div>
      <div>
        <Form
          form={form}
          onFinish={handleRegister}
          onFinishFailed={onRegisterFailed}
          onFieldsChange={handleOnFieldChange}
        >
          <div className={styles.formItem}>
            <Form.Item
              name='email'
              rules={[
                { required: true, message: 'Vui lòng nhập đia chỉ email' },
                { type: 'email', message: 'Vui lòng nhập đia chỉ email hợp lệ' }
              ]}
            >
              <Input placeholder='Email' />
            </Form.Item>
          </div>
          <div className={styles.formItem}>
            <Form.Item
              name='password'
              rules={[
                { required: true, type: 'string', message: 'Vui lòng nhập mật khẩu' },
                { min: 6, message: 'Mật khẩu tối thiểu 6 kí tự' },
                { max: 16, message: 'Mật khẩu tối đa 16 kí tự' }
              ]}
            >
              <Input.Password placeholder='Mật khẩu' />
            </Form.Item>
          </div>
          <div className={styles.formItem}>
            <Button
              htmlType='submit'
              className={styles.btnSignUp}
              type='primary'
              danger
              disabled={isFormInvalid}
            >
              Đăng ký
            </Button>
          </div>
          <Divider className={styles.devider}>HOẶC</Divider>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Button className={styles.btnSocialMedia} icon={<FacebookOutlined />} type='primary'>Facebook</Button>
            </Col>
            <Col span={12}>
              <Button className={styles.btnSocialMedia} icon={<GoogleOutlined />} type='primary' danger>Google</Button>
            </Col>
          </Row>
          <Row className={styles.alreadyExistedAccount}>
            <div>Bạn đã có tài khoản? <span><a href='/login'>Đăng nhập</a></span></div>
          </Row>
        </Form>
      </div>
    </div>
  )
};

Register.Layout = SignLayout;
Register.HeaderText = 'Đăng ký';

export default Register;
