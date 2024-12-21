
const CollectionBanner = () => {
  return (
    
      <div className='bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0),rgba(0,0,0,0.9)),url("https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-02.jpg")] h-screen w-full relative bg-center bg-cover bg-no-repeat bg-transparent'>
        <div className='absolute top-10 right-10 text-white flex flex-col gap-6'>
          <div className='bg-[url("https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-03-b.jpg")] h-[418px] w-[500px] bg-no-repeat'></div>
          <div className='text-center text-5xl font-bold font-sans w-[500px]'>
            Explore our exquisite Bag Collection now!
          </div>
          <button className='text-sm py-5 px-8 font-serif uppercase bg-black obj w-fit'>
            view collection
          </button>
        </div>
      </div>
    
  );
}

export default CollectionBanner
