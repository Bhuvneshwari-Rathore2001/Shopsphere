const Footer = () => {
  return (
    <div>
      <div className='grid md:grid-cols-4 grid-cols-2 max-w-5xl m-auto lg:py-16 md:py-12 py-9 lg:gap-48 md:gap-20 gap-10 justify-items-center content-center'>
        <div className='flex flex-col lg:gap-3 md:gap-2 gap-1 lg:text-lg md:text-base text-sm'>
          <div className='font-semibold'>Menu</div>
          <div className='flex flex-col gap-1 text-gray-500'>
            <div>Home</div>
            <div>Shop</div>
            <div>About Us</div>
            <div>Contact Us</div>
          </div>
        </div>
        <div className='flex flex-col lg:gap-3 md:gap-2 gap-1 lg:text-lg md:text-base text-sm'>
          <div className='font-semibold'>Categories</div>
          <div className='flex flex-col gap-1 text-gray-500'>
            <div>Casual</div>
            <div>Work & Office</div>
            <div>Activewear</div>
            <div>Evening Dresses</div>
          </div>
        </div>
        <div className='flex flex-col lg:gap-3 md:gap-2 gap-1 lg:text-lg md:text-base text-sm'>
          <div className='font-semibold'>Resources</div>
          <div className='flex flex-col gap-1 text-gray-500'>
            <div>Contact Support</div>
            <div>FAQ</div>
            <div>Live Chat</div>
            <div>Returns</div>
          </div>
        </div>
        <div className='flex flex-col lg:gap-3 md:gap-2 gap-1 lg:text-lg md:text-base text-sm'>
          <div className='font-semibold'>Social Media</div>
          <div className='flex flex-col gap-1 text-gray-500'>
            <div>Facebook</div>
            <div>Twitter</div>
            <div> Instagram</div>
            <div>Pinterest</div>
          </div>
        </div>
      </div>
      <div className='bg-black md:py-3 py-1 text-white'>
        <div className='text-center md:text-base text-xs'>
          This is a demo store for testing purposes — no orders shall be
          fulfilled. Dismiss
        </div>
      </div>
    </div>
  );
}

export default Footer
