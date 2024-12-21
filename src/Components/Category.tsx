const Category = () => {
  return (
    <section className='relative max-w-7xl m-auto'>
      <div className='flex flex-col  gap-0 relative w-auto h-auto group'>
        <div className='bg-orange-500 h-44 w-[200px]'></div>
        <div className='bg-black h-32 w-[200px]'></div>
      </div>

      <div className='flex flex-col gap-0 absolute top-0 left-0 bottom-0 text-white p-[6px] w-full h-full leading-3'>
        <img
          src='https://www.stylesgap.com/wp-content/uploads/2014/08/Latest-Indian-Ethnic-Wear-Dresses-Stylish-Suits-Formal-Collection-for-Women-24.jpg'
          alt='macbook'
          className='object-fill h-52'
        />
        <p className='font-bold text-base items-center justify-center flex'>
          Women's Ethenic Wear
        </p>
        <p className='font-extrabold text-3xl items-center justify-center flex'>
          50-80% OFF
        </p>
        <p className='font-bold text-base items-center justify-center flex'>
          Shop Now
        </p>
      </div>
    </section>
  );
}

export default Category