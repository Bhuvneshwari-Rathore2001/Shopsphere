import { ArrowDownTrayIcon, DocumentIcon } from '@heroicons/react/24/solid';
import { Card, IconButton, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../types/product';
import { Modal } from './Modal/Modal';
import { RiDeleteBin4Fill } from 'react-icons/ri';

interface IProductTable {
  products: IProduct[];
}

const TABLE_HEAD = [
  'Name',
  'Description',
  'Price',
  'Category',
  'Stock',
  'Actions',
];

export function ProductsTable({ products }: IProductTable) {
  const [openModal, setOpenModal] = useState(false);

  const onDeleteProduct = async (id: string) => {
    const res = await axios.delete(
      `http://localhost:4000/api/v1/admin/product/${id}`,
      {
        withCredentials: true,
      }
    );
    if(res.data.success){
      setOpenModal(false)
    }
  };
  return (
    <Card className='h-full w-full'>
      {products.length > 0 ? (
        <table className='w-full min-w-max text-left'>
          <thead className='shadow'>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className='p-4 pt-10'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-bold leading-none'
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='overflow-y-auto'>
            {products.map((product) => {
              return (
                <tr key={product._id}>
                  <td className='p-4'>
                    <Typography color='blue-gray' className='font-bold'>
                      {product.name}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography className='font-normal text-gray-600'>
                      {product.description}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography className='font-normal text-gray-600'>
                      {product.price}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography className='font-normal text-gray-600'>
                      {product.category}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography className='font-normal text-gray-600'>
                      {product.stock}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <div className='flex items-center gap-2'>
                      <Link to={`update/${product._id}`}>
                        <IconButton variant='text' size='sm'>
                          <DocumentIcon className='h-4 w-4 text-gray-900' />
                        </IconButton>
                      </Link>
                      <IconButton
                        variant='text'
                        size='sm'
                        onClick={() => {
                          setOpenModal(true);
                        }}
                      >
                        <RiDeleteBin4Fill
                          strokeWidth={3}
                          className='h-4 w-4 text-red-600'
                        />
                      </IconButton>
                      <Modal
                        onHandleContinue={() => onDeleteProduct(product._id)}
                        title='Delete Product'
                        body='Are you sure to delete this product?'
                        open={openModal}
                        setOpen={setOpenModal}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </Card>
  );
}
