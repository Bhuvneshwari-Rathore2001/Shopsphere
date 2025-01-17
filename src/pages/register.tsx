import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { dispatch } from '../redux/store';
import { updateUserState } from '../redux/slice/userSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarPreview, setAvatarPreview] = useState<File|null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const RegisterHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    
    const res = await axios.post(
      
      'http://localhost:4000/api/v1/register',
      {
        name: name,
        email: email,
        password: password,
        avatar:avatar
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (res.data.success) {
      dispatch(updateUserState(res.data.user))
      navigate('/');
    }
     
    setLoading(false);
  };

  const onHandleAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first file from the input
    console.log(e.target.files)
    if (file) {
      setAvatarPreview(file); // Update the avatar state

      const reader = new FileReader();
      reader.readAsDataURL(file); // Read file as a data URL
      reader.onloadend = () => {
        if (reader.readyState === 2) {
          console.log(reader.result)
          setAvatar(reader.result as string); // Update the preview
        }
      };
    }else{
      setAvatar('')
      setAvatarPreview(null)
    }
  };

  return (
    <section className='flex items-center justify-center h-[calc(100vh-84px)] bg-pink-50 p-5'>
      <main className='w-full max-w-sm bg-white text-sm py-5'>
        <div className='w-4/5 m-auto flex flex-col gap-2'>
          <h1 className='text-[#4a4848] font-bold md:text-xl text-lg'>
            Register
          </h1>

          <div className='flex flex-col gap-1 md:text-base text-sm'>
            <label className='text-[#4a4848]'>Name</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded md:p-2 p-1'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <div className='flex flex-col gap-1 md:text-base text-sm'>
            <label className='text-[#4a4848]'>Confirm password</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded md:p-2 p-1'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className='flex gap-2 items-center justify-center'>
            {avatarPreview && (
              <img
                className='size-10 rounded-full'
                src={URL.createObjectURL(avatarPreview)}
                alt='preview'
              />
            )}
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded md:p-2 p-1'
              type='file'
              onChange={onHandleAvatar}
            />
          </div>

          <div>
            <button
              className='w-full h-12 bg-pink-500/80 text-white flex border-pink-600 border rounded md:text-lg text-base items-center justify-center uppercase mt-3 hover:bg-pink-500/90'
              onClick={RegisterHandler}
              disabled={loading}
            >
              {loading ? <div>Loading...</div> : <div>Register</div>}
            </button>

            <p className='text-center mt-2 text-[#4a4848] text-xs md:text-sm'>
              Already Signup?
              <Link
                to='/login'
                className='text-[#252424] font-bold hover:text-pink-500 p-1'
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
