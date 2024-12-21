import { useState } from 'react';
import ProductCard from '../Components/ProductCard';

const Search = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);

  const isNextPage = page > 1;
  const isPrevPage = page < 4;

  const addToCartHandler = () => {};

  return (
    <div className='flex flex-1'>
      <div className='flex flex-col min-h-[90vh] w-[450px] px-10'>
        <h2 className='text-gray-800 text-3xl font-bold pt-10 pb-5'>
          Filters
        </h2>
        <div className='pt-10 pb-5 flex flex-col gap-10'>
          <div>
            <h4 className='text-lg font-semibold text-gray-700'>Sort</h4>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className='
              bg-gray-200 rounded-md px-4 py-2 mt-2 outline-0 w-full'
            >
              <option value=''>None</option>
              <option value='asc'>Price (Low to High)</option>
              <option value='dsc'>Price (High to Low)</option>
            </select>
          </div>

          <div>
            <h4>Max Price: {maxPrice || ''}</h4>
            <input
              className='bg-gray-200 rounded-md px-4 py-2 mt-2 outline-0 w-full'
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              type='range'
              min={100}
              max={100000}
            />
          </div>

          <div>
            <h4 className='text-lg font-semibold text-gray-700'>Category</h4>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='
              bg-gray-200 rounded-md px-4 py-2 mt-2 outline-0 w-full'
            >
              <option value=''>All</option>
              <option value='asc'>Sample 1</option>
              <option value='dsc'>Sample 2</option>
            </select>
          </div>
        </div>
      </div>
      <div className='border-l border-gray-300 w-full'>
        <header className='pt-10 pl-10  text-gray-800 w-full'>
          <h2 className='text-3xl font-bold '>Products</h2>
        </header>
        <div className='px-10 flex flex-col gap-0'>
          <input
            className='bg-gray-200 rounded-md px-4 py-2 outline-0 mt-10 w-1/2 text-gray-700'
            placeholder='Search by name...'
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className='flex flex-col gap-10 my-10'>
            <div className='flex flex-wrap justify-start items-start gap-5'>
              <ProductCard
                productId='3433'
                photo='https://www.stylesgap.com/wp-content/uploads/2014/08/Latest-Indian-Ethnic-Wear-Dresses-Stylish-Suits-Formal-Collection-for-Women-24.jpg'
                name='Women Ethenic Wear'
                desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                price={545}
                stock={5656}
                handler={addToCartHandler}
              />
              <ProductCard
                productId='3433'
                photo='https://www.stylesgap.com/wp-content/uploads/2014/08/Latest-Indian-Ethnic-Wear-Dresses-Stylish-Suits-Formal-Collection-for-Women-24.jpg'
                name='Women Ethenic Wear'
                desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                price={545}
                stock={5656}
                handler={addToCartHandler}
              />
              <ProductCard
                productId='3433'
                photo='https://www.stylesgap.com/wp-content/uploads/2014/08/Latest-Indian-Ethnic-Wear-Dresses-Stylish-Suits-Formal-Collection-for-Women-24.jpg'
                name='Women Ethenic Wear'
                desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                price={545}
                stock={5656}
                handler={addToCartHandler}
              />
              <ProductCard
                productId='3433'
                photo='https://www.stylesgap.com/wp-content/uploads/2014/08/Latest-Indian-Ethnic-Wear-Dresses-Stylish-Suits-Formal-Collection-for-Women-24.jpg'
                name='Women Ethenic Wear'
                desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                price={545}
                stock={5656}
                handler={addToCartHandler}
              />
              <ProductCard
                productId='3433'
                photo='https://www.stylesgap.com/wp-content/uploads/2014/08/Latest-Indian-Ethnic-Wear-Dresses-Stylish-Suits-Formal-Collection-for-Women-24.jpg'
                name='Women Ethenic Wear'
                desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                price={545}
                stock={5656}
                handler={addToCartHandler}
              />
              <ProductCard
                productId='3433'
                photo='https://www.stylesgap.com/wp-content/uploads/2014/08/Latest-Indian-Ethnic-Wear-Dresses-Stylish-Suits-Formal-Collection-for-Women-24.jpg'
                name='Women Ethenic Wear'
                desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                price={545}
                stock={5656}
                handler={addToCartHandler}
              />
              <ProductCard
                productId='3433'
                photo='https://www.stylesgap.com/wp-content/uploads/2014/08/Latest-Indian-Ethnic-Wear-Dresses-Stylish-Suits-Formal-Collection-for-Women-24.jpg'
                name='Women Ethenic Wear'
                desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                price={545}
                stock={5656}
                handler={addToCartHandler}
              />
              <ProductCard
                productId='3433'
                photo='https://www.stylesgap.com/wp-content/uploads/2014/08/Latest-Indian-Ethnic-Wear-Dresses-Stylish-Suits-Formal-Collection-for-Women-24.jpg'
                name='Women Ethenic Wear'
                desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                price={545}
                stock={5656}
                handler={addToCartHandler}
              />
            </div>
            <article className='flex items-center justify-center gap-10'>
               <button
                  className='flex p-2 rounded-md disabled:cursor-not-allowed
                bg-gray-800 hover:bg-gray-700 text-white px-10 py-2 font-semibold group'
                  disabled={!isPrevPage}
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  <div className='group-hover:translate-x-[-4px]  group-hover:translate-y-[-4px]'>
                    {' '}
                    Prev
                  </div>
                </button>
               
              <span className='text-gray-700 text-md'>
                {page} of {4}
              </span>
              
                <button
                  className='flex p-2 rounded-md disabled:cursor-not-allowed
                bg-gray-800 hover:bg-gray-700 text-white px-10 py-2 font-semibold group'
                  disabled={!isNextPage}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  <div className='group-hover:translate-x-[-4px]  group-hover:translate-y-[-4px]'>
                    {' '}
                    Next
                  </div>
                </button>
              
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
