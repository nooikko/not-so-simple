import 'tailwindcss/tailwind.css';
import 'antd/dist/antd.css';
import { Input, Form, Button } from 'antd';
import cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { Card } from '@components/general';
import axios from 'axios';
import { useState } from 'react';

interface FormType {
  email: string;
  password: string;
}

interface LoginResponseType {
  token: string;
}

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFinish = async (formData: FormType) => {
    setLoading(true);
    try {
      const { data } = await axios.post<LoginResponseType>('/api/login', {
        ...formData,
      });

      if (data?.token) {
        cookies.set('token', data.token);
      }

      router.push('/admin');

      setLoading(false);
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <div className='bg-gray-100 h-full w-full flex items-center justify-around'>
      <Card>
        <div className='w-96 flex flex-col'>
          <h1 className='text-2xl font-medium text-purple-600 mb-10'>Login</h1>
          <Form layout='vertical' onFinish={onFinish}>
            <Form.Item
              label='Email Address'
              name='email'
              rules={[{ required: true, message: 'Email Address is required' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Password'
              name='password'
              rules={[{ required: true, message: 'Password is required' }]}
            >
              <Input.Password />
            </Form.Item>
            <div className='text-center text-red-600'>{error}</div>
            <div className='flex justify-end mt-24'>
              <Button htmlType='submit' type='primary' loading={loading}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
