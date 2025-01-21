import { Country, State } from 'country-state-city';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { StepperWithIcon } from '../Components/Stepper';
import { useSelector } from '../redux/store';


const Shipping = () => {
  const navigate = useNavigate();
const {shippingInfo}  = useSelector(
  (state) => state.cart
);
  const [address, setAddress] = useState(shippingInfo?.address||"");
  const [country, setCountry] = useState(shippingInfo?.country || '');
  const [state, setState] = useState(shippingInfo?.state || '');
  const [city, setCity] = useState(shippingInfo?.city || '');
  const [pinCode, setPinCode] = useState<number>(shippingInfo?.pinCode);
  const [phoneNo, setPhoneNo] = useState<number>(shippingInfo?.phoneNo);

  const handleShipping = (e:any) => {
    e.preventDefault()
    const shippingItem = {
      address: address,
      country: country,
      state: state,
      city: city,
      pinCode: pinCode,
      phoneNo: phoneNo,
    };
    localStorage.setItem('shippingInfo', JSON.stringify(shippingItem));
    navigate('/order/confirm');
  };

  return (
    <div className='h-screen w-screen'>
      <button
        className='bg-gray-800 hover:bg-gray-700 text-white border-none outline-none cursor-pointer rounded-full h-10 w-10 fixed top-8 left-8 transition-all flex items-center justify-center group'
        onClick={() => navigate('/cart')}
      >
        <BiArrowBack className='group-hover:-translate-x-1 ' />
      </button>
      <StepperWithIcon />

      <div className='flex items-center justify-center mt-10'>
        <div className='shadow-sm shadow-yellow-500 p-10 rounded-2xl w-1/4 gap-4'>
          <div>
            <h1 className='text-[#4a4848] text-3xl font-bold mb-8'>
              Shipping <span className='text-yellow-500'>Address</span>
            </h1>
          </div>

          <div>
            <form className='flex flex-col gap-4' onSubmit={handleShipping}>
              <input
                required
                type='text'
                placeholder='Address'
                name='address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className='border border-gray-200 w-full bg-gray-100 rounded-md px-4 py-2 mt-2'
              />

              <input
                required
                type='text'
                placeholder='City'
                name='city'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className='border border-gray-200 w-full bg-gray-100 rounded-md px-4 py-2 mt-2'
              />

              <input
                required
                type='number'
                placeholder='Pin code'
                name='pinCode'
                value={pinCode}
                onChange={(e) => setPinCode(Number(e.target.value))}
                className='border border-gray-200 w-full bg-gray-100 rounded-md px-4 py-2 mt-2'
              />

              <input
                required
                type='number'
                placeholder='Phone No.'
                name='phoneNo'
                value={phoneNo}
                onChange={(e) => setPhoneNo(Number(e.target.value))}
                className='border border-gray-200 w-full bg-gray-100 rounded-md px-4 py-2 mt-2'
              />

              <select
                className='
                text-gray-700 bg-inherit text-sm border border-gray-200 w-full bg-gray-100 rounded-md px-4 py-2 mt-2'
                name='country'
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value=''>Choose Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
              {country && (
                <select
                  className='
                text-gray-700 bg-inherit text-sm border border-gray-200 w-full bg-gray-100 rounded-md px-4 py-2 mt-2'
                  name='state'
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value=''>Choose State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              )}

              <div className='bg-gray-800 hover:bg-gray-700 text-white py-3 mt-6 rounded-md group px-8 w-full flex items-center justify-center'>
                <button
                  type='submit'
                  className='group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition font-bold'
                >
                  Continue
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
