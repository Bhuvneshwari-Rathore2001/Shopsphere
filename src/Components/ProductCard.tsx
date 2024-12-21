import { FaPlus } from 'react-icons/fa';
type ProductsProps = {
  productId?: string;
  photo: string;
  name: string;
  desc:string;
  price: number;
  stock: number;
  handler: () => void;
};
const ProductCard = ({
  // productId,
  photo,
  name,
  desc,
  price,
  // stock,
  handler,
}: ProductsProps) => {
  return (
    <section className='relative group'>
      <div className='flex flex-col  gap-0 relative w-auto h-auto group'>
        <div className='bg-yellow-600 h-44 w-[240px]'></div>
        <div className='bg-gray-800 h-32 w-[240px]'></div>
      </div>

      <div className='flex flex-col gap-0 absolute top-0 left-0 bottom-0 p-[6px] w-full h-full leading-3'>
        <img src={photo} alt='macbook' className='object-fill h-52' />
        <p className='font-semibold text-sm items-center justify-center flex text-gray-100'>
          {name}
        </p>
        <p className='text-sm items-center justify-center flex text-gray-200'>
          {desc}
        </p>
        <p className='font-semibold text-sm items-center justify-center flex text-gray-100'>
          {price}
        </p>
      </div>
      <div className='absolute top-0 left-0 bg-[#0000006b] h-full w-full opacity-0  group-hover:opacity-100 flex items-center justify-center'>
        <button
          onClick={() => handler()}
          className='flex bg-white hover:rotate-45 transition-all h-12 w-12 rounded-full items-center justify-center text-base'
        >
          <FaPlus />
        </button>
      </div>
    </section>
  );
};

export default ProductCard;
