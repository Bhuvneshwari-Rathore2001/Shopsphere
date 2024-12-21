import Banner from '../Components/Banner';
import CollectionBanner from '../Components/CollectionBanner';

import DiscoverBanner from '../Components/DiscoverBanner';

import FashionBanner from '../Components/FashionBanner';
import Footer from '../Components/Footer';
import Info from '../Components/Info';
import LatestProducts from '../Components/LatestProducts';
import ProfessionalBanner from '../Components/ProfessionalBanner';
import StyleExploreBanner from '../Components/StyleExploreBanner';
const Home = () => {
  // const latestProductsItems = [
  //   {
  //     id: 1,
  //     name: 'Woolen Wear',
  //     price: 300,
  //     stock: 400,
  //     desc: 'fhdfhsdhfdsfdsfjsdfh',
  //     category: 'women',
  //     img: 'https://www.pcworld.com/wp-content/uploads/2022/07/primary-1.jpg?quality=50&strip=all',
  //   },
  //   {
  //     id: 2,
  //     name: 'Woolen Wear',
  //     price: 300,
  //     stock: 400,
  //     desc: 'fhdfhsdhfdsfdsfjsdfh',
  //     category: 'women',
  //     img: 'https://www.pcworld.com/wp-content/uploads/2022/07/primary-1.jpg?quality=50&strip=all',
  //   },
  //   {
  //     id: 3,
  //     name: 'Woolen Wear',
  //     price: 300,
  //     stock: 400,
  //     desc: 'fhdfhsdhfdsfdsfjsdfh',
  //     category: 'women',
  //     img: 'https://www.pcworld.com/wp-content/uploads/2022/07/primary-1.jpg?quality=50&strip=all',
  //   },
  // ];

  // const addToCartHandler = () => {};
  return (
    <div className='bg-gray-50 border '>
      {/* <Carousel /> */}
      <Banner />
      <LatestProducts />
      <CollectionBanner />
      <ProfessionalBanner />
      <DiscoverBanner />
      <FashionBanner />
      <Info />
      <StyleExploreBanner />
      <Footer />
    </div>
  );
};

export default Home;
