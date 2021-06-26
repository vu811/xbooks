import React, { FC, useState } from 'react'
import { Form, Input, Button, Row, Divider } from 'antd'
import Link from 'next/link'
import { providers, getSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'
import { AuthProvider } from 'components/commons/authProvider'
import { AuthProviderProps } from 'components/commons/authProvider/AuthProvider'

import styles from 'styles/Register.module.scss'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context
  const session = await getSession({ req })
  if (session && res && session.accessToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      providers: await providers(),
      isSignLayout: true,
      headerText: 'Đăng nhập'
    }
  }
}

const Login: FC<AuthProviderProps> = ({ providers }) => {
  const [form] = Form.useForm()
  const [isFormInvalid, setIsFormInvalid] = useState(false)

  const handleLogin = async (values: any) => {}

  const onFinishFailed = (errorInfo: any) => {
    console.log('failed', errorInfo)
  }

  const handleOnFieldChange = () => {
    const isInValid = () => form.getFieldsError().some((item) => item.errors.length > 0)
    setIsFormInvalid(isInValid)
  }

  return (
    <div className={styles.register}>
      <div className={styles.signUpTitle}>Đăng nhập</div>
      <div>
        <Form form={form} onFinish={handleLogin} onFinishFailed={onFinishFailed} onFieldsChange={handleOnFieldChange}>
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
            <Button htmlType='submit' className={styles.btnSignUp} type='primary' danger disabled={isFormInvalid}>
              Đăng nhập
            </Button>
          </div>
          <Divider className={styles.devider}>hoặc sử dụng</Divider>
          <Row gutter={[8, 8]}>
            <AuthProvider providers={providers} />
          </Row>
          <Row className={styles.alreadyExistedAccount}>
            <div>
              Bạn đã chưa có tài khoản? <Link href='/register'>Đăng ký</Link>
            </div>
          </Row>
        </Form>
      </div>
    </div>
  )
}
export default Login
