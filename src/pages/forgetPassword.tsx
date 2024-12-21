import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <section className='flex items-center justify-center bg-orange-50 h-screen'>
      <main className='w-full max-w-sm flex-col flex gap-3 bg-white text-sm'>
        <img
          src='https://www.printvenue.com/bundles/rocketfrontend/images/singup-popup---first-order-free_03.jpg'
          alt='login_image'
          className='h-52 object-fill'
        />
        <div className='w-4/5 m-auto flex flex-col gap-4'>
          <h1 className='text-[#4a4848] font-bold text-xl'>Forget Password</h1>

          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Email</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <button className='w-full h-12 bg-red-600 text-white flex border-red-600 border rounded text-lg items-center justify-center uppercase mt-3'>
              Request Login Link
            </button>
            <p className='text-center mt-2 text-[#4a4848] text-xs'>
              Already know password?
              <button
                className='text-[#252424] font-bold'
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ForgetPassword;
