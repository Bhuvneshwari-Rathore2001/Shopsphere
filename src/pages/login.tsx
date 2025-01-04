import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dispatch } from '../redux/store';
import { updateUserState } from '../redux/slice/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await axios.post(
      'http://localhost:4000/api/v1/login',
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (res.data.success) {
      dispatch(updateUserState(res.data.user));
      navigate('/');
    }
  };

  return (
    <section className='flex items-center justify-center h-[calc(100vh-84px)] font-serif'>
      <main className='w-full max-w-sm flex-col flex gap-3 border border-black text-sm py-6 px-8 '>
        <div className='w-4/5 m-auto flex flex-col gap-6'>
          <h1 className='font-bold text-xl'>Login</h1>

          <div className='flex flex-col gap-1'>
            <label className='font-medium'>Email</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-medium'>Password</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='flex flex-col items-center'>
            <button
              className='text-sm py-4 px-6 uppercase border border-black obj w-fit'
              onClick={handleLogin}
            >
              Login
            </button>
            <p className='text-center mt-4 text-xs'>
              Forgot password?
              <button
                className='font-semibold'
                onClick={() => navigate('/forget/password')}
              >
                Click me
              </button>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
