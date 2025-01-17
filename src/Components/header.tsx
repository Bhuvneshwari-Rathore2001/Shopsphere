import axios from 'axios';
import { useState } from 'react';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { resetUserState } from '../redux/slice/userSlice';
import { dispatch, useSelector } from '../redux/store';

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = async () => {
    setIsOpen(false);
    const res = await axios.get('http://localhost:4000/api/v1/logout', {
      withCredentials: true,
    });
    if (res.status === 200) {
      dispatch(resetUserState());
    }
  };

  return (
    <nav className='flex items-center justify-between lg:px-14 md:px-10 px-4 md:py-6 py-4 bg-white'>
      <i className='lg:text-3xl md:text-2xl text-xl text-pink-500 font-bold'>
        Shop<span className='text-black'>Sphere</span>
      </i>
      <div className='flex lg:gap-7 md:gap-4 gap-3 text-black items-center md:text-base text-sm' >
        <Link
          to={'/'}
          className='hover:text-[rgb(0,104,136)] p-1 cursor-pointer'
          onClick={() => setIsOpen(false)}
        >
          HOME
        </Link>
        <Link
          to={'/search'}
          className=' hover:text-[rgb(0,104,136)] p-1 cursor-pointer'
          onClick={() => setIsOpen(false)}
        >
          <FaSearch />
        </Link>
        <Link
          to={'/cart'}
          className=' hover:text-[rgb(0,104,136)] p-1 cursor-pointer'
          onClick={() => setIsOpen(false)}
        >
          <FaShoppingBag />
        </Link>

        {user ? (
          <div className='relative text-[rgb(46,46,46)  '>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className='p-1 cursor-pointer hover:text-[rgb(0,104,136)]'
            >
              <FaUser />
            </button>
            <dialog
              open={isOpen}
              className='absolute -bottom-36 px-2 py-6 -left-28 w-28 shadow-[0_1.5px_20.5px_-4px_#dddddd]'
            >
              <div className='flex flex-col items-center gap-3'>
                {user.role === 'Admin' ||
                  (user.role === 'Owner' && (
                    <Link
                      to='/admin/dashboard'
                      onClick={() => setIsOpen(false)}
                      className='text-[rgb(46,46,46) hover:text-[rgb(0,104,136)] p-1 cursor-pointer'
                    >
                      Admin
                    </Link>
                  ))}

                <Link
                  to='/orders'
                  onClick={() => setIsOpen(false)}
                  className='text-[rgb(46,46,46) hover:text-[rgb(0,104,136)] p-1 cursor-pointer'
                >
                  Orders
                </Link>
                <Link
                  to='/profile'
                  onClick={() => setIsOpen(false)}
                  className='text-[rgb(46,46,46) hover:text-[rgb(0,104,136)] p-1 cursor-pointer'
                >
                  Profile
                </Link>
                <button
                  onClick={logoutHandler}
                  className='text-[rgb(46,46,46) hover:text-[rgb(0,104,136)] p-1 cursor-pointer'
                >
                  Log out
                </button>
              </div>
            </dialog>
          </div>
        ) : (
          <Link to={'/register'}>SignUp</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
