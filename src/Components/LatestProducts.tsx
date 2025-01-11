import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/slice/productSlice';
import { dispatch, useSelector } from '../redux/store';
import LatestProductsCard from './LatestProductsCard';

const LatestProducts = () => {
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderComponent = () => {
    if (loading) {
      return 'loading....';
    }
    return (
      <div className=' grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-[42px] md:gap-y-20 gap-5 justify-items-center content-center max-w-7xl m-auto'>
        {products &&
          products.map((product) => (
            <LatestProductsCard key={product._id} product={product} />
          ))}
      </div>
    );
  };
  return (
    <div className='lg:my-20 md:my-12 sm:my-8'>
      <div className='flex justify-center items-center mb-16 max-w-7xl m-auto'>
        <h1 className='text-gray-800 lg:text-3xl md:text-2xl text-2xl font-bold font-sans w-full '>
          Latest <span className='text-pink-500'>Products</span>
        </h1>
        <Link
          to='/search'
          className='text-gray-800 text-bold text-lg hover:text-yellow-500 text-end w-full lg:text-base md:text-base sm:text-sm'
        >
          More...
        </Link>
      </div>
      <main className=' '>{renderComponent()}</main>
      {/* <div className='grid grid-cols-6 gap-14  m-14'>
        <Category />
      </div> */}
    </div>
  );
};

export default LatestProducts;
