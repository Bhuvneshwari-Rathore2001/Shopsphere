import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BsStarFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { Carousel } from '../Components/Carousel';
import { fetchProduct } from '../redux/slice/productDetailsSlice';
import { dispatch, useSelector } from '../redux/store';
import { ICart } from '../types/cart';

const ProductDetails = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState<ICart[]>([]);
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(id as string));
    console.log(product);
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      setCart(JSON.parse(cartItems));
    }
  }, []);

  const handleAddToCart = () => {
    const productItem = {
      product: product?._id,
      name: product?.name,
      price: product?.price,
      image: product?.images[0].url,
      stock: product?.stock,
      quantity: count,
    };

    console.log(productItem);
    setCart((prevCart) => {
      const updatedCart = [...prevCart, productItem];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart as ICart[];
    });

    toast.success(`${productItem.name} is added on cart`);
  };

  const decreaseProductQty = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increaseProductQty = () => {
    if (product && count < product?.stock) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      {product && (
        <div className='flex items-center justify-center max-w-5xl m-auto h-[calc(100vh-84px)]'>
          <div className='flex gap-20 flex-1'>
            <div className='w-full'>
              <Carousel images={product.images} />
              {/* <div className='size-12'></div> */}
            </div>
            <div className='w-full flex flex-col gap-3'>
              <div className='flex flex-col gap-1'>
                <div className='font-lg text-4xl text-gray-900'>
                  {product.name}
                </div>
                <span className='text-gray-500 text-sm'>id</span>
              </div>
              <div className='text-gray-900 text-lg'>{product.description}</div>

              <div className='flex gap-3 items-center'>
                <div className='text-yellow-700'>
                  <BsStarFill />
                </div>
                <div>{product.reviews}</div>
              </div>
              <div className='text-pink-700 font-semibold text-lg'>
                {product.price}
              </div>
              <div className='flex gap-5 items-center'>
                <button
                  onClick={decreaseProductQty}
                  className='bg-[rgba(0,0,0,0.7)] text-white hover:bg-black hover:text-pink-500 size-8 text-center'
                >
                  -
                </button>
                <div>{count}</div>
                <button
                  onClick={increaseProductQty}
                  className='bg-[rgba(0,0,0,0.7)] text-white hover:bg-black hover:text-pink-500 size-8 text-center'
                >
                  +
                </button>
              </div>
              <button
                className='bg-[rgba(0,0,0,0.7)] text-white hover:bg-black hover:text-pink-500 py-4'
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
