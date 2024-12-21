import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsTable } from '../Components/ProductsTable';


const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:4000/api/v1/products');
      if (res.data.success) {
        setProducts(res.data.products)
      }
      console.log(res.data.products);
    };
    fetchProducts()
  }, []);


  return (
    <div className='my-10'>
      <div className='flex justify-end'>
        <button
          onClick={() => navigate('new')}
          className='bg-blue-300 px-2 py-1 rounded text-gray-800'
        >
          Add product
        </button>
      </div>
      <div className='mt-10'>
        <ProductsTable products={products} />
      </div>
    </div>
  );
};

export default Products;
