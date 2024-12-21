import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {

    const navigate = useNavigate()

  const [shippingInfo] = useState({
    address: '',
    city: '',
    state: '',
    country: '',
    pinCode: '',
  });

  const chngeHandler = () => {
    // setShippingInfo(prev=>({...prev, [e.target.name]: e.target.value}));
  };

  return (
    <div className='h-screen w-screen'>
      <button
        className='bg-gray-800 hover:bg-gray-700 text-white border-none outline-none cursor-pointer rounded-full h-10 w-10 fixed top-8 left-8 transition-all flex items-center justify-center group'
        onClick={() => navigate('/cart')}
      >
        <BiArrowBack className='group-hover:-translate-x-1 ' />
      </button>

      <div className='flex items-center justify-center mt-10'>
        <div className='shadow-sm shadow-yellow-500 p-10 rounded-2xl w-1/4 gap-4'>
          <div>
            <h1 className='text-[#4a4848] text-3xl font-bold mb-8'>
              Shipping <span className='text-yellow-500'>Address</span>
            </h1>
          </div>

          <div>
            <form className='flex flex-col gap-4'>
              <input
                required
                type='text'
                placeholder='Address'
                name='address'
                value={shippingInfo.address}
                onChange={chngeHandler}
                className='border border-gray-200 w-full bg-gray-100 rounded-md px-4 py-2 mt-2'
              />

              <input
                required
                type='text'
                placeholder='City'
                name='city'
                value={shippingInfo.city}
                onChange={chngeHandler}
                className='border border-gray-200 w-full bg-gray-100 rounded-md px-4 py-2 mt-2'
              />

              <input
                required
                type='text'
                placeholder='State'
                name='state'
                value={shippingInfo.state}
                onChange={chngeHandler}
                className='border border-gray-200 w-full bg-gray-100 rounded-md px-4 py-2 mt-2'
              />

              <select
                className='
                text-gray-700 bg-inherit text-sm border border-gray-200 w-full bg-gray-100 rounded-md px-4 py-2 mt-2'
                name='country'
                required
                value={shippingInfo.country}
                onChange={chngeHandler}
              >
                <option value=''>Choose Country</option>
                <option value='india'>India</option>
                <option value='usa'>USA</option>
                <option value='uk'>UK</option>
                <option value='maleysia'>Maleysia</option>
              </select>

              <input
                required
                type='number'
                placeholder='Pin code'
                name='pinCode'
                value={shippingInfo.pinCode}
                onChange={chngeHandler}
                className='border border-gray-200 w-full bg-gray-100 rounded-md px-4 py-2 mt-2'
              />

              <div className='bg-gray-800 hover:bg-gray-700 text-white py-3 mt-6 rounded-md group px-8 w-full flex items-center justify-center'>
                <button
                  type='submit'
                  className='group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition font-bold'
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
