import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className='flex'>
      <div className='py-10 w-3/12 px-10'>
        <Sidebar />
      </div>
      <div className='w-full pb-10 px-10 overflow-y-auto bg-gray-100 h-[calc(100vh-84px)]'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
