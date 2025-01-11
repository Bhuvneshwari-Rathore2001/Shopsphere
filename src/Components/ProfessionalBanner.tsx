const ProfessionalBanner = () => {
  return (
    <div className='flex'>
      <div className='w-1/2 flex items-center px-20'>
        <div className='flex flex-col gap-6'>
          <div className='uppercase font-semibold text-xs tracking-tight leading-5'>
            Work & Office Attire
          </div>
          <div className='lg:text-5xl md:text-3xl text-xl font-sans'>
            Professional pinstripe blazers collection
          </div>
          <div className='font-bold lg:text-base md:text-sm text-xs text-gray-500 '>
            Elevate your workwear with our Professional Pinstripe Blazers
            Collection, where tailored sophistication meets modern confidence
            for a powerfully polished office look.
          </div>
          <button className='uppercase text-xs border border-black lg:py-5 md:py-4 py-3 lg:px-8 md:px-6 px-4 w-fit'>
            shop now
          </button>
        </div>
      </div>
      <div className='bg-[url("https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-05-1.jpg")] h-screen bg-no-repeat bg-right-bottom bg-cover w-1/2' />
    </div>
  );
}

export default ProfessionalBanner;
