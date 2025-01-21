import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { ICart } from '../types/cart';
import { useDispatch } from '../redux/store';
import { updateQuantity } from '../redux/slice/cartSlice';

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
        <img className='max-w-40 rounded-md' src={item.image} alt='Lighter' />
      </div>
      <div className='px-5 max-w-md flex flex-col gap-3 w-full'>
        <div className='flex items-center justify-between'>
          <h3 className='text-xl font-semibold mb-1 text-pink-500'>
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

        <div className='flex flex-col gap-2'>
          <div>Quantity : {item.quantity}</div>
          <div className='flex gap-5 items-center'>
            <button
              onClick={decreaseProductQty}
              className='bg-[rgba(0,0,0,0.7)] text-white hover:bg-black hover:text-pink-500 size-8 text-center'
            >
              -
            </button>
            <div>{item.quantity}</div>
            <button
              onClick={increaseProductQty}
              className='bg-[rgba(0,0,0,0.7)] text-white hover:bg-black hover:text-pink-500 size-8 text-center'
            >
              +
            </button>
          </div>
          <div className=' '>
            Price :{' '}
            <span className='text-pink-500 font-bold text-xl ml-4'>
              ₹{item.price}
            </span>
          </div>
          <div className=' '>
            Sub Total :{' '}
            <span className='text-pink-500 font-bold text-xl ml-4'>
              ₹{subTotal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
