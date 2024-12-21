const Banner = () => {
  return (
    <div className='relative'>
      <div className='bg-[url("https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-01.jpg")] h-screen bg-no-repeat w-full bg-center bg-cover ' />
      <div className='text-white absolute top-[50vh] text-center max-w-[50%] left-[50vh]'>
        <div className='uppercase font-bold'>Casual & Everyday</div>
        <div>Effortlessly blend comfort & style!</div>
        <div className='font-bold'>
          Effortlessly blend comfort and style with our Casual & Everyday
          collection, featuring cozy sweaters, versatile denim, laid-back tees,
          and relaxed-fit joggers for your everyday adventures
        </div>
        <button className='uppercase'>view collection</button>
      </div>
    </div>
  );
}

export default Banner
