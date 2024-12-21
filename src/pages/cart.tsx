import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';
import PriceDetails from '../Components/PriceDetails';
import { ICart } from '../types/cart';

const Cart = () => {
  const [cartItems, setCartItems] = useState<ICart[]>([]);

  useEffect(() => {
    let items = localStorage.getItem('cartItems');
    if (items) {
      setCartItems(JSON.parse(items));
    }
  }, []);

  return (
    <div className='h-[calc(100vh-84px)]'>
      {cartItems.length > 0 ? (
        <div className='flex'>
          <div className='flex-1 border-r border-gray-300'>
            <div className=' text-gray-800'>
              <header className='pt-10 pl-10 pb-5 border-b border-gray-300'>
                <h2 className='text-3xl font-bold '>
                  Your <span className='text-pink-500'>Cart</span>
                </h2>
                <p className='text-md mt-2 text-gray-700'>
                  Checkout all your items and modify quantity as needed from
                  here
                </p>
              </header>
              <section className='p-10 flex flex-col gap-10 h-[69vh] overflow-y-auto no-scrollbar'>
                {cartItems.map((item, index) => (
                  <CartItem key={index} {...item} />
                ))}
              </section>
            </div>
          </div>
          <div className='w-4/12 h-full'>
            <PriceDetails />
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
                There is nothing in your bag. Let's add some items.
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

export default Cart;
