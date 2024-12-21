import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { Carousel } from '../Components/Carousel';
import { IProduct } from '../types/product';
import { ICart } from '../types/cart';
import toast from 'react-hot-toast';


const ProductDetail = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState<IProduct>();
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:4000/api/v1/product/${id}`);
      if (res.data.success) {
        setProductDetails(res.data.product);
      }
    };

    fetchProduct();
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      setCart(JSON.parse(cartItems));
    }
  }, []);

  const handleAddToCart = () => {
    const productItem = {
      product: productDetails?._id,
      name: productDetails?.name,
      price: productDetails?.price,
      image: productDetails?.images[0].url,
      stock: productDetails?.stock,
      quantity: count,
    };

    console.log(productItem);
    setCart((prevCart) => {
      const updatedCart = [...prevCart, productItem]
      localStorage.setItem("cartItems",JSON.stringify(updatedCart))
      return updatedCart as ICart[];
    });

    toast.success(`${productItem.name} is added on cart`)
  };

  const decreaseProductQty = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increaseProductQty = () => {
    if (productDetails && count < productDetails?.stock) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      {productDetails && (
        <div className='flex items-center justify-center max-w-5xl m-auto h-[calc(100vh-84px)]'>
          <div className='flex gap-20 flex-1'>
            <div className='w-full'>
              <Carousel images={productDetails.images} />
              {/* <div className='size-12'></div> */}
            </div>
            <div className='w-full flex flex-col gap-3'>
              <div className='flex flex-col gap-1'>
                <div className='font-lg text-4xl text-gray-900'>
                  {productDetails.name}
                </div>
                <span className='text-gray-500 text-sm'>id</span>
              </div>
              <div className='text-gray-900 text-lg'>
                {productDetails.description}
              </div>

              <div className='flex gap-3 items-center'>
                <div className='text-yellow-700'>
                  <BsStarFill />
                </div>
                <div>{productDetails.reviews}</div>
              </div>
              <div className='text-pink-700 font-semibold text-lg'>
                {productDetails.price}
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

export default ProductDetail;
