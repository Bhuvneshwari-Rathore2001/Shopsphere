const Footer = () => {
  return (
    <div>
      <div className='flex max-w-5xl m-auto py-16 gap-48'>
        <div className='flex flex-col gap-3 text-lg'>
          <div className='font-semibold'>Menu</div>
          <div className='flex flex-col gap-1 text-gray-500'>
            <div>Home</div>
            <div>Shop</div>
            <div>About Us</div>
            <div>Contact Us</div>
          </div>
        </div>
        <div className='flex flex-col gap-3 text-lg'>
          <div className='font-semibold'>Categories</div>
          <div className='flex flex-col gap-1 text-gray-500'>
            <div>Casual</div>
            <div>Work & Office</div>
            <div>Activewear</div>
            <div>Evening Dresses</div>
          </div>
        </div>
        <div className='flex flex-col gap-3 text-lg'>
          <div className='font-semibold'>Resources</div>
          <div className='flex flex-col gap-1 text-gray-500'>
            <div>Contact Support</div>
            <div>FAQ</div>
            <div>Live Chat</div>
            <div>Returns</div>
          </div>
        </div>
        <div className='flex flex-col gap-3 text-lg'>
          <div className='font-semibold'>Social Media</div>
          <div className='flex flex-col gap-1 text-gray-500'>
            <div>Facebook</div>
            <div>Twitter</div>
            <div> Instagram</div>
            <div>Pinterest</div>
          </div>
        </div>
      </div>
      <div className="bg-black py-3 text-white">
        <div className="text-center">
          This is a demo store for testing purposes — no orders shall be
          fulfilled. Dismiss
        </div>
      </div>
    </div>
  );
}

export default Footer
