import React, { FC, useState } from 'react'
import styles from 'styles/Register.module.scss'
import { Form, Input, Button, Row, Divider } from 'antd'
import { providers, getSession } from 'next-auth/client'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { AuthProvider } from 'components/commons/authProvider'
import { AuthProviderProps } from 'components/commons/authProvider/AuthProvider'

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
      headerText: 'Đăng ký'
    }
  }
}

const Register: FC<AuthProviderProps> = ({ providers }) => {
  const [form] = Form.useForm()
  const [isFormInvalid, setIsFormInvalid] = useState(false)

  const handleRegister = async (values: any) => {
    const { email, password } = values
    try {
      const body = { email, password }
      await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
    } catch (error) {
      console.error(error)
    }
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
        <Form form={form} onFinish={handleRegister} onFinishFailed={onRegisterFailed} onFieldsChange={handleOnFieldChange}>
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
              Đăng ký
            </Button>
          </div>
          <Divider className={styles.devider}>hoặc sử dụng</Divider>
          <Row gutter={[8, 8]}>
            <AuthProvider providers={providers} />
          </Row>
          <Row className={styles.alreadyExistedAccount}>
            <div>
              Bạn đã có tài khoản? <Link href='/login'>Đăng nhập</Link>
            </div>
          </Row>
        </Form>
      </div>
    </div>
  )
}
export default Register
