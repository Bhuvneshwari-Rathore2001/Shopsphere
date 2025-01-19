import axios from 'axios';
import { ChangeEvent, useState } from 'react';

const NewProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<File[]>([])
  const [message, setMessage] = useState('');

  const handleAddProduct = async (e: any) => {
    e.preventDefault();
    const res = await axios.post(
      'http://localhost:4000/api/v1/admin/product/new',
      {
        name: name,
        stock: stock,
        category: category,
        description: desc,
        price: price,
        images: images,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(images);
    if (res.data.success) {
      setMessage('Product added sucessfully');
    } else {
      setMessage('Something went Wrong');
    }
  };

  const onHandleImage = (e: ChangeEvent<HTMLInputElement>) => {
    
    if (e.target.files) {
      // converting files(object) into array
      const files = Array.from(e.target.files);
      if (files) {
        setImagesPreview(files);
        files.forEach((file) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            if (reader.readyState === 2) {
              setImages((oldImages) => [...oldImages, reader.result] as File[]);
            }
          };
        });
      }
    }
  };
  
  return (
    <form
      className='flex items-center justify-center bg-gray-100 h-screen'
      onSubmit={handleAddProduct}
    >
      <main className='w-full max-w-sm flex-col flex gap-3 bg-white text-sm'>
        <div className='w-4/5 m-auto flex flex-col gap-4'>
          <h1 className='text-[#4a4848] font-bold text-xl'>Product</h1>

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
              multiple
              type='file'
              id='image'
              name='image'
              accept='image/*' // Only accept image files
              onChange={onHandleImage} // Update state with the selected file
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
            />
            <div className='flex justify-center gap-3'>
              {imagesPreview.map(
                (file) =>
                  file && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt='Preview'
                      className='size-14'
                    />
                  )
              )}
            </div>
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
              Add
            </button>
          </div>

          <div>{message}</div>
        </div>
      </main>
    </form>
  );
};

export default NewProduct;
