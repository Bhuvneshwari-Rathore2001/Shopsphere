const Info = () => {
  return (
    <div className='max-w-7xl grid md:grid-cols-4 grid-cols-2 m-auto gap-14 py-24 items-center justify-center'>
      <div className='flex flex-col md:gap-3 gap-1 items-center'>
        <div>icon</div>
        <div className='font-sans font-semibold lg:text-2xl md:text-xl text-lg'>
          Secure Payments
        </div>
        <div className='text-gray-500 text-center md:text-base text-sm'>
          Shop with confidence knowing that your transactions are safeguarded.
        </div>
      </div>
      <div className='flex flex-col md:gap-3 gap-1 items-center'>
        <div>icon</div>
        <div className='font-sans font-semibold lg:text-2xl md:text-xl text-lg'>
          Free Shipping
        </div>
        <div className='text-gray-500 text-center md:text-base text-sm'>
          Shopping with no extra charges – savor the liberty of complimentary
          shipping on every order.
        </div>
      </div>
      <div className='flex flex-col md:gap-3 gap-1 items-center'>
        <div>icon</div>
        <div className='font-sans font-semibold lg:text-2xl md:text-xl text-lg'>
          Easy Returns
        </div>
        <div className='text-gray-500 text-center md:text-base text-sm'>
          With our hassle-free Easy Returns, changing your mind has never been
          more convenient.
        </div>
      </div>
      <div className='flex flex-col md:gap-3 gap-1 items-center'>
        <div>icon</div>
        <div className='font-sans font-semibold lg:text-2xl md:text-xl text-lg'>
          Order Tracking
        </div>
        <div className='text-gray-500 text-center md:text-base text-sm'>
          Stay in the loop with our Order Tracking feature – from checkout to
          your doorstep.
        </div>
      </div>
    </div>
  );
};

export default Info;
