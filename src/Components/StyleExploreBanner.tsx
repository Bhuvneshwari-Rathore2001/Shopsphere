const StyleExploreBanner = () => {
  return (
    <div className='bg-[url("https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-005.jpg")] h-screen w-full bg-no-repeat bg-cover bg-center flex items-center justify-end'>
      <div className='flex flex-col gap-6 text-white justify-center px-20 md:w-1/2 w-2/3'>
        <div className='uppercase font-semibold text-xs tracking-tight leading-5'>
          Explore
        </div>
        <div className='lg:text-5xl md:text-4xl text-2xl font-sans'>
          Elevate your wardrobe, embrace timeless style!
        </div>
        <div className='font-bold text-base'>
          Explore our collections today and experience the joy of fashion. Shop
          now for the epitome of chic sophistication!
        </div>
        <button className='uppercase text-xs border border-white px-8 py-5 w-fit'>
          shop now
        </button>
      </div>
    </div>
  );
};

export default StyleExploreBanner;
