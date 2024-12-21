import axios from 'axios';
import { useState } from 'react';
import {
  FaSearch,
  FaShoppingBag,
} from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IUser } from '../types/user';

interface IHeader {
  user:IUser,
  setUser:(val:IUser)=>void
}

const Header = ({user}:IHeader) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = async () => {
    setIsOpen(false);
    await axios.get('http://localhost:4000/api/v1/logout', {
      withCredentials: true,
    });
  };
  
  return (
    <nav className='flex items-center justify-between px-14 py-6 bg-white'>
      <i className='text-3xl text-pink-500 font-bold'>
        Shop<span className='text-black'>Sphere</span>
      </i>
      <div className='flex gap-7 text-black items-center'>
        <Link
          to={'/'}
          className='hover:text-[rgb(0,104,136)]'
          onClick={() => setIsOpen(false)}
        >
          HOME
        </Link>
        <Link
          to={'/search'}
          className=' hover:text-[rgb(0,104,136)]'
          onClick={() => setIsOpen(false)}
        >
          <FaSearch />
        </Link>
        <Link
          to={'/cart'}
          className=' hover:text-[rgb(0,104,136)]'
          onClick={() => setIsOpen(false)}
        >
          <FaShoppingBag />
        </Link>

        {user ? (
          <div className='relative text-[rgb(46,46,46) hover:text-[rgb(0,104,136)]'>
            <button onClick={() => setIsOpen((prev) => !prev)}>
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
                      className='text-[rgb(46,46,46) hover:text-[rgb(0,104,136)]'
                    >
                      Admin
                    </Link>
                  ))}

                <Link
                  to='/orders'
                  onClick={() => setIsOpen(false)}
                  className='text-[rgb(46,46,46) hover:text-[rgb(0,104,136)]'
                >
                  Orders
                </Link>
                <Link
                  to='/profile'
                  onClick={() => setIsOpen(false)}
                  className='text-[rgb(46,46,46) hover:text-[rgb(0,104,136)]'
                >
                  Profile
                </Link>
                <button
                  onClick={logoutHandler}
                  className='text-[rgb(46,46,46) hover:text-[rgb(0,104,136)]'
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
