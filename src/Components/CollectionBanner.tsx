
const CollectionBanner = () => {
  return (
    <div className='bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0),rgba(0,0,0,0.9)),url("https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-02.jpg")] h-screen w-full relative bg-center bg-cover bg-no-repeat bg-transparent'>
      <div className='absolute lg:top-9 md:top-7 top-24 lg:right-10 md:right-7 text-white flex flex-col lg:gap-4 md:gap-3 gap-1'>
        <div className='bg-[url("https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-03-b.jpg")] lg:h-[400px] lg:w-[500px] md:h-96 md:w-[60-vw] h-80 w-[57vw] bg-no-repeat'></div>
        <div className='text-start lg:text-4xl md:text-3xl text-xl font-bold font-sans w-[500px]'>
          Explore our exquisite Bag Collection now!
        </div>
        <button className='text-sm lg:py-5 md:py-4 py-3 lg:px-8 md:px-6 px-4 font-serif uppercase bg-black/90  w-fit'>
          view collection
        </button>
      </div>
    </div>
  );
}

export default CollectionBanner
