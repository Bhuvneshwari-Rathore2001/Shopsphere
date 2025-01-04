import { useSelector } from '../redux/store';

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className='flex items-center justify-center max-w-5xl m-auto h-[calc(100vh-84px)]'>
      <div className='flex gap-20 flex-1 items-center'>
        <div className='w-full flex flex-col gap-3'>
          <div className='relative group'>
            <img
              src={user?.avatar.url || '/assets/user_placeholder.jpg'}
              alt='avatar'
            />
            <label
              htmlFor='avatar'
              className='absolute top-0 h-full w-full flex justify-center items-center group-hover:visible invisible transition-all bg-black/25 hover:cursor-pointer rounded'
            >
              Choose Image
            </label>
            <input type='file' id='avatar' className='invisible' />
          </div>
          <button className='bg-[rgba(0,0,0,0.7)] text-white hover:bg-black hover:text-pink-500 py-2 px-3'>
            Edit Profile
          </button>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <div className='font-lg text-4xl text-gray-900'>Profile</div>
            <span className='text-gray-500 text-sm'>{user?._id}</span>
          </div>
          <div className='text-gray-900 text-lg grid grid-cols-2 grid-rows-3'>
            <div>Name</div>
            <div>{user?.name}</div>
            <div>Email</div>
            <div>{user?.email}</div>
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
