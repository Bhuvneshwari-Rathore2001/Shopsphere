const Info = () => {
  return (
    <div className='max-w-7xl flex m-auto gap-14 py-24 '>
      <div className='flex flex-col gap-3 items-center'>
        <div>icon</div>
        <div className='font-sans font-semibold text-3xl'>Secure Payments</div>
        <div className='text-gray-500 text-center'>
          Shop with confidence knowing that your transactions are safeguarded.
        </div>
      </div>
      <div className='flex flex-col gap-3 items-center'>
        <div>icon</div>
        <div className='font-sans font-semibold text-3xl'>Free Shipping</div>
        <div className='text-gray-500 text-center'>
          Shopping with no extra charges – savor the liberty of complimentary
          shipping on every order.
        </div>
      </div>
      <div className='flex flex-col gap-3 items-center'>
        <div>icon</div>
        <div className='font-sans font-semibold text-3xl'>Easy Returns</div>
        <div className='text-gray-500 text-center'>
          With our hassle-free Easy Returns, changing your mind has never been
          more convenient.
        </div>
      </div>
      <div className='flex flex-col gap-3 items-center'>
        <div>icon</div>
        <div className='font-sans font-semibold text-3xl'>Order Tracking</div>
        <div className='text-gray-500 text-center'>
          Stay in the loop with our Order Tracking feature – from checkout to
          your doorstep.
        </div>
      </div>
    </div>
  );
};

export default Info;
