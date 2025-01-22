import { useNavigate } from 'react-router-dom';
import { useSelector } from '../redux/store';

function OrderPriceDetails() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingCharges = 200;
  const discount = (subTotal * 40) / 100;
  const tax = (subTotal * 18) / 100;
  const total = subTotal + tax + shippingCharges;

  const handlePayment = () => {
    const data = {
      subTotal,
      shippingCharges,
      tax,
      total,
    };

    sessionStorage.setItem('orderInfo', JSON.stringify(data));
    navigate('/payment');
  };
  return (
    <div className='h-full'>
      <header className='mt-10 pl-10 pb-5'>
        <h2 className='text-3xl font-bold text-gray-800'>
          Order <span className='text-pink-500'>Details</span>
        </h2>
        <p className='text-md mt-2 text-gray-700'>
          Checkout price breakdown of all your items here
        </p>
      </header>
      <section className='overflow-y-auto h-[69vh] no-scrollbar pb-10'>
        <div className='px-4 py-4 flex flex-col gap-5 shadow-sm mx-10 border border-gray-200 rounded-2xl'>
          <section className='flex justify-between px-4'>
            <label className='font-semibold text-gray-700 text-lg'>
              Subtotal
            </label>
            <span className='text-gray-700 text-lg'>{subTotal}</span>
          </section>
          <section className='flex justify-between px-4'>
            <label className='font-semibold text-gray-700 text-lg'>
              Shipping Charges
            </label>
            <span className='text-gray-700 text-lg'>50</span>
          </section>
          <section className='flex justify-between px-4'>
            <label className='font-semibold text-gray-700 text-lg'>
              Discount
            </label>
            <span className='text-green-700 font-bold text-lg'>
              - {discount}
            </span>
          </section>
          <section className='flex justify-between px-4'>
            <label className='font-semibold text-gray-700 text-lg'>
              Taxes (18% GST)
            </label>
            <span className='text-green-700 font-bold text-lg'>{tax}</span>
          </section>
          <div className='border border-b-2'></div>
          <section className='flex justify-between border-t pt-4 px-4'>
            <label className='font-semibold text-gray-700 text-lg'>
              Total Payable Amount
            </label>
            <span className='text-gray-700 text-lg'>{total}</span>
          </section>
        </div>

        <div
          className={'flex flex-col px-10 mt-5 border-t border-gray-200 pt-4'}
        >
          <button className='bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-md group px-8 mt-5'>
            <button onClick={handlePayment}>
              <div className='group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition font-bold'>
                Proceed to Payment
              </div>
            </button>
          </button>
        </div>
      </section>
    </div>
  );
}

export default OrderPriceDetails;
