import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IProduct } from '../types/product';
interface ILatestProductCard {
  product: IProduct;
}

const LatestProductsCard = ({ product }: ILatestProductCard) => {
  return (
    <>
      <Link
        to={`/product/details/${product._id}`}
        className='w-72 border-black border-2 shadow-[8px_8px_0px_0px_rgb(168,85,247)] pb-5 relative group hover:scale-105'
      >
        <div className='flex flex-col gap-1  p-[3px] w-full h-full leading-3'>
          <img
            src={product.images[0].url}
            alt='macbook'
            className='object-fill h-52'
          />
          <div className='flex flex-col gap-2 mt-4 px-5'>
            <p className='font-bold text-md items-center justify-center flex text-gray-700'>
              {product.name}
            </p>
            <p className='text-sm items-center justify-center flex text-gray-800'>
              {product.description}
            </p>
            <p className='font-bold text-md items-center justify-center flex text-gray-800'>
              Rs.{product.price}
            </p>
          </div>
        </div>
        <div className='absolute top-0 left-0 bg-transparent h-full w-full opacity-0  group-hover:opacity-100 flex items-center justify-center'>
          <button className='flex bg-[rgba(0,0,0,0.5)] hover:bg-black hover:text-pink-500 hover:rotate-45 transition-all h-12 w-12 rounded-full items-center justify-center text-base'>
            <FaPlus />
          </button>
        </div>
      </Link>
    </>
  );
};

export default LatestProductsCard;
