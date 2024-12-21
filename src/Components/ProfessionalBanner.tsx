const ProfessionalBanner = () => {
  return (
    <div className='flex'>
      <div className='w-1/2 flex items-center px-20'>
        <div className='flex flex-col gap-6'>
          <div className='uppercase font-semibold text-xs tracking-tight leading-5'>
            Work & Office Attire
          </div>
          <div className='text-5xl font-sans'>
            Professional pinstripe blazers collection
          </div>
          <div className='font-bold text-base text-gray-500 '>
            Elevate your workwear with our Professional Pinstripe Blazers
            Collection, where tailored sophistication meets modern confidence
            for a powerfully polished office look.
          </div>
          <button className='uppercase text-xs border border-black px-8 py-5 w-fit'>
            shop now
          </button>
        </div>
      </div>
      <div className='bg-[url("https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-05-1.jpg")] h-screen bg-no-repeat bg-right-bottom bg-cover w-1/2' />
    </div>
  );
}

export default ProfessionalBanner;
