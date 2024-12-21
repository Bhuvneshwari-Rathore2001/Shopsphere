import { AiFillFileText } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { RiDashboardFill, RiShoppingBag2Fill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const sidebarLinks = [
    {
      id: 1,
      text: 'Dashboard',
      url: '/admin/dashboard',
      icon: RiDashboardFill,
    },
    {
      id: 2,
      text: 'Orders',
      url: '/admin/orders',
      icon: RiShoppingBag2Fill,
    },
    {
      id: 3,
      text: 'Products',
      url: '/admin/products',
      icon: IoIosPeople,
    },
    {
      id: 4,
      text: 'Users',
      url: '/admin/users',
      icon: AiFillFileText,
    },
    {
      id: 5,
      text: 'Reviews',
      url: '/admin/reviews',
      icon: AiFillFileText,
    },
  ];

  return (
    <aside className='w-full flex-col gap-5 flex'>
      {sidebarLinks.map((link) => (
        <div key={link.id}>
          <Link
            to={link.url}
            className='flex items-center gap-2 ml-12 py-1'
            style={{
              color: location.pathname.includes(link.url)
                ? 'rgb(0,115,255)'
                : 'rgb(31, 41, 55)',
              backgroundColor: location.pathname.includes(link.url)
                ? 'rgba(0,115,255,0.1)'
                : 'white',
            }}
          >
            <link.icon />
            {link.text}
          </Link>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
