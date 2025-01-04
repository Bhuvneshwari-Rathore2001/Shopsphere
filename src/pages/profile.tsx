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
    <div className='flex items-center justify-center max-w-5xl m-auto h-[calc(100vh-84px)]'>
      <div className='flex gap-20 flex-1 items-center'>
        <div className='w-full flex flex-col gap-3'>
          <div className='relative group'>
            <img
              src={avatar || user?.avatar.url || '/assets/user_placeholder.jpg'}
              alt='avatar'
              className='h-72'
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
            className='bg-[rgba(0,0,0,0.7)] text-white hover:bg-black hover:text-pink-500 py-2 px-3'
            onClick={() => {
              setIsUpdate(!isUpdate);
              if (isUpdate) {
                console.log("im calling")
                updateUser();
              }
            }}
            disabled={loading}
          >
            {isUpdate ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <div className='font-lg text-4xl text-gray-900'>Profile</div>
            <span className='text-gray-500 text-sm'>{user?._id}</span>
          </div>
          <div className='text-gray-900 text-lg grid grid-cols-2 grid-rows-3'>
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
          <button className='bg-[rgba(0,0,0,0.7)] text-white hover:bg-black hover:text-pink-500 py-3'>
            My Orders
          </button>
          <button className='bg-[rgba(0,0,0,0.7)] text-white hover:bg-black hover:text-pink-500 py-3'>
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
