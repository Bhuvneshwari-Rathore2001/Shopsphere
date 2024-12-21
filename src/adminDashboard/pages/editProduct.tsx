import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface IMessage {
  type: 'success' | 'error';
  message: string;
}

const EditProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState([]);
  const [message, setMessage] = useState<IMessage>();


  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`http://localhost:4000/api/v1/product/${id}`);
      const {success,product} = data
      if (success) {
        setName(product.name);
        setPrice(product.price);
        setDesc(product.description);
        setStock(product.stock);
        setCategory(product.category);
        setImage(product.image);
      }
    };

    fetchProduct();
  }, []);

  const handleEditProduct = async (e: any) => {
    e.preventDefault();
    const body = {
        name: name,
        description: desc,
        price: price,
        category: category,
        stock: stock,
        images: [],
      }
      const config = {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      };
   try {
    
     const { data } = await axios.put(
       `http://localhost:4000/api/v1/admin/product/${id}`,
       body,
       config
     );
     if (data.success) {
       setMessage({ type: 'success', message: "Updated successfully" });
     }
   } catch (error) {
       setMessage({ type: 'error', message: 'Something went Wrong' });

   }
    
    
  };
  return (
    <form
      className='flex items-center justify-center bg-gray-100 h-screen'
      onSubmit={handleEditProduct}
    >
      <main className='w-full max-w-sm flex-col flex gap-3 bg-white text-sm'>
        <div className='w-4/5 m-auto flex flex-col gap-4'>
          <h1 className='text-[#4a4848] font-bold text-xl'>
            Update Product here
          </h1>

          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Product name</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Price</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='number'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Product Description</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='text'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='category' className='text-[#4a4848]'>
              Select a Category:
            </label>
            <select
              id='category'
              name='category'
              value={category} // Bind the state
              onChange={(e) => setCategory(e.target.value)} // Update the state
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
            >
              <option value='Men'>Men</option>
              <option value='Women'>Women</option>
              <option value='Kids'>Kids</option>
              <option value='Home & Living'>Home & Living</option>
              <option value='Beauty'>Beauty</option>
            </select>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='image' className='text-[#4a4848]'>
              Upload an Image:
            </label>
            <input
              type='file'
              id='image'
              name='image'
              accept='image/*' // Only accept image files
              // onChange={(e) => setImage(e.target.files)} // Update state with the selected file
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Stock</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='number'
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div>
            <button className='w-full h-12 bg-red-600 text-white flex border-red-600 border rounded text-lg items-center justify-center uppercase mt-3'>
              Update
            </button>
          </div>
          {message && <div className={message.type==="success" ? "text-green-800" : "text-red-800"}>{message.message}</div>}
        </div>
      </main>
    </form>
  );
};

export default EditProduct;
