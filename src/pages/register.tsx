import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarPreview, setAvatarPreview] = useState<File|null>(null);
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const RegisterHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(avatar);

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
      setUser(res.data.user);
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
    <section className='flex items-center justify-center  h-screen'>
      <main className='w-full max-w-sm flex-col flex gap-3 bg-orange-50 text-sm'>
        <img
          src='https://www.printvenue.com/bundles/rocketfrontend/images/singup-popup---first-order-free_03.jpg'
          alt='login_image'
          className='h-48 object-fill'
        />
        <div className='w-4/5 m-auto flex flex-col gap-2'>
          <h1 className='text-[#4a4848] font-bold text-xl'>Register</h1>

          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Name</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Email</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Password</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Confirm password</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
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
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='file'
              onChange={onHandleAvatar}
            />
          </div>

          <div>
            <button
              className='w-full h-12 bg-red-600 text-white flex border-red-600 border rounded text-lg items-center justify-center uppercase mt-3'
              onClick={RegisterHandler}
              disabled={loading}
            >
              {loading ? <div>Loading...</div> : <div>Register</div>}
            </button>

            <p className='text-center mt-2 text-[#4a4848] text-xs'>
              Already Signup?
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

export default Register;
