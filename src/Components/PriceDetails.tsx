import { Link } from 'react-router-dom';
import { useSelector } from '../redux/store';

function PriceDetails() {
  const { cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingCharges = 200;
  const discount = (subtotal * 40) / 100;
  const total = subtotal - discount + shippingCharges;

  return (
    <div className='h-full'>
      <header className='mt-10 pl-10 pb-5'>
        <h2 className='lg:text-3xl md:text-2xl text-xl font-bold text-gray-800'>
          Price <span className='text-pink-500'>Details</span>
        </h2>
        <p className='md:text-base text-sm mt-2 text-gray-700'>
          Checkout price breakdown of all your items here
        </p>
      </header>
      <section >
        <div className='px-4 py-4 flex flex-col gap-5 shadow-sm mx-10 border border-gray-200 rounded-2xl'>
          <section className='flex justify-between px-4'>
            <label className='font-semibold text-gray-700 md:text-lg text-base'>
              Subtotal
            </label>
            <span className='text-gray-700 md:text-lg text-base'>
              {subtotal}
            </span>
          </section>
          <section className='flex justify-between px-4'>
            <label className='font-semibold text-gray-700 md:text-lg text-base'>
              Shipping Charges
            </label>
            <span className='text-gray-700 md:text-lg text-base'>50</span>
          </section>
          <section className='flex justify-between px-4'>
            <label className='font-semibold text-gray-700 md:text-lg text-base'>
              Discount
            </label>
            <span className='text-green-700 font-bold md:text-lg text-base'>
              - {discount}
            </span>
          </section>
          <section className='flex justify-between border-t px-4'>
            <label className='font-semibold text-gray-700 md:text-lg text-base'>
              Total
            </label>
            <span className='text-gray-700 md:text-lg text-base'>{total}</span>
          </section>
        </div>
        <div
          className={'flex flex-col px-10 border-t border-gray-200 pt-4'}
        >
          <button className='bg-gray-800 hover:bg-gray-700 text-white md:py-4 py-2 rounded-md group px-8'>
            <Link to='/shipping'>
              <div className='group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition font-bold'>
                Checkout
              </div>
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default PriceDetails;
