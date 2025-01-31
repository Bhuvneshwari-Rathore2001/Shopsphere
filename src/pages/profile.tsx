import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useSelector } from '../redux/store';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [loading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [avatar, setAvatar] = useState('');

  const onHandleAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first file from the input
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Read file as a data URL
      reader.onloadend = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result as string); // Update the preview
          setIsUpdate(true);
        }
      };
    } else {
      setAvatar('');
    }
  };

  const updateUser = async () => {
    setLoading(true)
    const { data } = await axios.put(
      'http://localhost:4000/api/v1/me/update',
      {
        name: name,
        email: email,
        avatar: avatar,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (data.success) {
      toast.success(data.msg)
    }
    setLoading(false)
  };

  return (
    <div className='flex items-center justify-center md:max-w-5xl md:m-auto m-5 h-[calc(100vh-84px)] '>
      <div className='flex flex-col md:flex-row md:gap-20 gap-5 flex-1 items-center'>
        <div className='w-full flex flex-col gap-3'>
          <div className='relative group'>
            <img
              src={avatar || user?.avatar.url || '/assets/user_placeholder.jpg'}
              alt='avatar'
              className='md:h-72 h-56'
            />
            <label
              htmlFor='avatar'
              className='absolute top-0 h-full w-full flex justify-center items-center group-hover:visible invisible transition-all bg-black/25 hover:cursor-pointer rounded text-white'
            >
              Choose Image
            </label>
            <input
              type='file'
              id='avatar'
              className='invisible'
              onChange={onHandleAvatar}
            />
          </div>

          <button
            className='w-full md:py-3 py-1 bg-pink-500/80 text-white flex border-pink-600 border rounded md:text-lg text-sm items-center justify-center uppercase mt-3 hover:bg-pink-500/90'
            onClick={() => {
              setIsUpdate(!isUpdate);
              if (isUpdate) {
                console.log('im calling');
                updateUser();
              }
            }}
            disabled={loading}
          >
            {isUpdate ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
        <div className='w-full flex flex-col md:gap-3 gap-1'>
          <div className='flex flex-col gap-1'>
            <div className='font-lg md:text-4xl text-lg text-gray-900'>
              Profile
            </div>
            <span className='text-gray-500 text-sm'>{user?._id}</span>
          </div>
          <div className='text-gray-900 md:text-lg text-sm grid grid-cols-2 grid-rows-3'>
            <div>Name</div>
            <input
              disabled={!isUpdate}
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div>Email</div>
            <input
              disabled={!isUpdate}
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>Joined on</div>
            <div>{user?.createdAt}</div>
          </div>
          <button className='w-full md:py-3 py-1 bg-pink-500/80 text-white flex border-pink-600 border rounded md:text-lg text-sm items-center justify-center uppercase mt-3 hover:bg-pink-500/90'>
            My Orders
          </button>
          <button className='w-full md:py-3 py-1 bg-pink-500/80 text-white flex border-pink-600 border rounded md:text-lg text-sm items-center justify-center uppercase mt-3 hover:bg-pink-500/90'>
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
