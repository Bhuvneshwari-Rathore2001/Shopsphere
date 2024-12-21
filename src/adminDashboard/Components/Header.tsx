import { BsSearch } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa';
const userImg =
  'https://cdn.vectorstock.com/i/1000v/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg';

const Header = () => {
  return (
    <div>
      <div className='flex flex-row border-b-2 border-b-gray-200 justify-between items-center py-2'>
        <div className='flex items-center gap-3 px-4 py-3 w-5/12'>
          <BsSearch />
          <input
            type='text'
            placeholder='Search for data, users, docs'
            className='w-2/5 focus:w-full text-gray-700 bg-gray-50 focus:outline-gray-300 rounded-md outline-gray-300 outline outline-1 py-1 px-2 focus:bg-white'
          />
        </div>
        <div className='flex items-center gap-5 px-4 py-3'>
          <FaRegBell />
          <img src={userImg} alt='User' className='h-7 w-7' />
        </div>
      </div>
    </div>
  );
};

export default Header;
