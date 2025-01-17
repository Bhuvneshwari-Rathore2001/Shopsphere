import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { updateUserState } from '../redux/slice/userSlice';
import { dispatch } from '../redux/store';

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
    <section className='flex items-center justify-center font-serif h-[calc(100vh-84px)] bg-pink-50 p-5'>
      <main className='w-full max-w-sm flex-col flex gap-3 border bg-white py-5 '>
        <div className='w-4/5 m-auto flex flex-col gap-6'>
          <h1 className='text-[#4a4848] font-bold md:text-xl text-lg'>Login</h1>

          <div className='flex flex-col gap-1 md:text-base text-sm'>
            <label className='text-[#4a4848]'>Email</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded md:p-2 p-1'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-1 md:text-base text-sm'>
            <label className='text-[#4a4848]'>Password</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded md:p-2 p-1'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='flex flex-col items-center'>
            <button
              className='w-full h-12 bg-pink-500/80 text-white flex border-pink-600 border rounded md:text-lg text-base items-center justify-center uppercase mt-3 hover:bg-pink-500/90'
              onClick={handleLogin}
            >
              Login
            </button>
            <p className='text-center mt-2 text-[#4a4848] text-xs md:text-sm'>
              Forgot password?
              <Link
                to='/forget/password'
                className='text-[#252424] font-bold hover:text-pink-500 p-1'
              >
                Click me
              </Link>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
