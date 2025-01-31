import { FaTrash } from 'react-icons/fa';
import { updateQuantity } from '../redux/slice/cartSlice';
import { useDispatch } from '../redux/store';
import { ICart } from '../types/cart';

function CartItem(item: ICart) {
  const dispatch = useDispatch();

  const increaseProductQty = () => {
    if (item.quantity < item.stock) {
      dispatch(
        updateQuantity({ productId: item.product, quantity: item.quantity + 1 })
      );
    }
  };

  const decreaseProductQty = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ productId: item.product, quantity: item.quantity - 1 })
      );
    }
  };

  const subTotal = item.price * item.quantity;

  return (
    <div className='flex border-l-4 border-gray-800 px-4 gap-3'>
      <div>
        <img
          className='lg:max-w-40 md:max-w-36 max-w-28 rounded-md'
          src={item.image}
          alt='Lighter'
        />
      </div>
      <div className='px-5 max-w-md flex flex-col lg:gap-3 md:gap-2 gap-0 w-full'>
        <div className='flex items-center justify-between'>
          <h3 className='lg:text-xl md:text-lg text-base font-semibold mb-1 text-pink-500'>
            {item.name}
          </h3>
          <button
            className='hover:text-red-500 hover:scale-[1.3] cursor-pointer'
            // onClick={trashHandler}
          >
            <FaTrash />
          </button>
        </div>
        {/* <p className='text-gray-600'>{items.description}</p> */}

        <div className='flex flex-col md:gap-2 gap-1'>
          <div className='lg:text-base text-sm'>Quantity : {item.quantity}</div>
          <div className='flex gap-5 items-center'>
            <button
              onClick={decreaseProductQty}
              className='bg-[rgba(0,0,0,0.7)] text-white hover:bg-black hover:text-pink-500 lg:size-8 md:size-7 size-6 text-center'
            >
              -
            </button>
            <div className='lg:text-base text-sm'>{item.quantity}</div>
            <button
              onClick={increaseProductQty}
              className='bg-[rgba(0,0,0,0.7)] text-white hover:bg-black hover:text-pink-500 lg:size-8 md:size-7 size-6 text-center'
            >
              +
            </button>
          </div>
          <div className='lg:text-base text-sm'>
            Price :{' '}
            <span className='text-pink-500 font-bold lg:text-xl md:text-lg text-base ml-4'>
              ₹{item.price}
            </span>
          </div>
          <div className='lg:text-base text-sm'>
            Sub Total :{' '}
            <span className='text-pink-500 font-bold lg:text-xl md:text-lg text-base ml-4'>
              ₹{subTotal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
