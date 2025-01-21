import { useState } from 'react';
import { ICart } from '../types/cart';

function OrderItem(item: ICart) {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <div className='flex border-l-4 border-gray-800 px-4 gap-3'>
      <div className='grid grid-cols-3 items-center content-center'>
        <img className='max-w-12 rounded-md' src={item.image} alt='Lighter' />
        <h3 className='text-xl font-semibold mb-1 text-pink-500 flex-1'>
          {item.name}
        </h3>
        <div>
          Quantity : {quantity} X ${item.price} = ${quantity * item.price}
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
