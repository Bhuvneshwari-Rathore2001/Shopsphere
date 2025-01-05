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
      <div className=' flex flex-1 gap-[42px] gap-y-20 flex-wrap max-w-7xl m-auto'>
        {products &&
          products.map((product) => (
            <LatestProductsCard key={product._id} product={product} />
          ))}
      </div>
    );
  };
  return (
    <div className='my-20'>
      <div className='flex justify-center items-center mb-16 max-w-7xl m-auto'>
        <h1 className='text-gray-800 text-5xl font-bold font-sans w-full '>
          Latest <span className='text-pink-500'>Products</span>
        </h1>
        <Link
          to='/search'
          className='text-gray-800 text-bold text-lg hover:text-yellow-500 text-end w-full'
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
