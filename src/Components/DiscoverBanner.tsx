
const DiscoverBanner = () => {
  return (
    <div className='bg-[url("https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-03.jpg")] h-screen w-full relative bg-cover bg-center bg-no-repeat'>
      <div className='bg-[url("https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-05-a-black.jpg")] h-[80%] w-2/5 absolute -top-28 left-[5%] bg-cover bg-no-repeat bg-center'>
        <div className="absolute -bottom-56 text-white flex flex-col gap-2">
          <div className='text-5xl font-sans'>
            Discover the allure of fashion reinvented!
          </div>
          <div className='font-bold text-base'>
            Dive into a world of style with our latest collection! Shop now and
            redefine your wardrobe narrative!
          </div>
          <button className='uppercase text-xs border border-white px-8 py-5 w-fit'>
            shop now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiscoverBanner
