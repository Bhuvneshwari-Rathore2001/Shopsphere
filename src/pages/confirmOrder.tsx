import { Link } from 'react-router-dom';
import OrderPriceDetails from '../Components/OrderPriceDetails';
import { useSelector } from '../redux/store';
import OrderItem from './orderItem';

const ConfirmOrder = () => {
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  return (
    <div className='h-[calc(100vh-84px)]'>
      {cartItems.length > 0 ? (
        <div className='flex max-md:flex-col'>
          <div className='flex-1 border-r border-gray-300'>
            <div className=' text-gray-800'>
              <header className='pt-10 pl-10 pb-5 border-b border-gray-300'>
                <h2 className='text-3xl font-bold '>
                  Your <span className='text-pink-500'>Shipping Info</span>
                </h2>
              </header>
              <section className='p-10 flex flex-col gap-10'>
                <div className='flex gap-5'>
                  <div>NAme:</div>
                  <div>{user?.name}</div>
                </div>
                <div className='flex gap-5'>
                  <div>Phone:</div>
                  <div>{shippingInfo.phoneNo}</div>
                </div>
                <div className='flex gap-5'>
                  <div>Address:</div>
                  <div>{shippingInfo.phoneNo}</div>
                </div>
              </section>
              <header className='pt-10 pl-10 pb-5 border-b border-gray-300'>
                <h2 className='text-3xl font-bold '>
                  Your <span className='text-pink-500'>Cart Items</span>
                </h2>
              </header>
              <section className='p-10 flex flex-col gap-10'>
                {cartItems.map((item, index) => (
                  <OrderItem key={index} {...item} />
                ))}
              </section>
            </div>
          </div>
          <div className='w-4/12 h-full flex-1'>
            <OrderPriceDetails />
          </div>
        </div>
      ) : (
        <div className='items-center justify-center flex h-[calc(100vh-84px)] w-screen'>
          <div className='flex flex-col gap-4 items-center justify-center'>
            <img
              src='https://static.vecteezy.com/system/resources/previews/000/496/007/original/vector-add-to-cart-icon-design.jpg'
              className='h-48 w-48'
            />
            <div className='flex flex-col items-center justify-center'>
              <h1>Hey! it feels so light!</h1>
              <p className='text-[rgb(42,42,42)] text-xs'>
                There is nothing in your order. Let's add some items.
              </p>
            </div>
            <Link
              to='/'
              className='uppercase  border-orange-700 p-2 border-2 text-sm text-orange-700'
            >
              Add items from wishlist
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmOrder;
