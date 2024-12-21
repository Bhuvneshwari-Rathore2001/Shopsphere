import { DocumentIcon } from '@heroicons/react/24/solid';
import { Card, IconButton, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { RiDeleteBin4Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { IOrder, IOrderItem } from '../../types/order';
import { Modal } from './Modal/Modal';

const TABLE_HEAD = ['Name', 'Status',  'Amount', 'Actions'];


export function OrdersTable() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get(
        'http://localhost:4000/api/v1/admin/orders',{
            withCredentials:true
        }
      );
      const { success } = data;
      if (success) {
        setOrders(data.orders);
      }
    };

    fetchOrders();
  }, []);

  const onDeleteOrder = async(id:string) =>{
    const res = await axios.delete(`http://localhost:4000/api/v1/admin/order/${id}`);
  }

  return (
    <Card className='h-full w-full'>
      <table className='w-full min-w-max table-auto text-left'>
        <thead>
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
          {orders.map((order) => {
            return (
              <tr key={order._id}>
                <td className='p-4'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-bold'
                  >
                    {order.orderItems.map((item) => (
                      <div key={item._id}>
                        {item.name}{' '}
                        {item.quantity > 1
                          ? `(${item.quantity}x)`
                          : item.quantity}
                      </div>
                    ))}
                  </Typography>
                </td>
                <td className='p-4'>
                  <Typography
                    variant='small'
                    className={
                      order.orderStatus === 'Processing'
                        ? 'text-yellow-800 bg-yellow-50 font-bold w-fit'
                        : order.orderStatus === 'Shipped'
                        ? 'text-blue-600 bg-blue-50 font-bold w-fit'
                        : 'text-green-600 bg-green-50 font-bold w-fit'
                    }
                  >
                    {order.orderStatus}
                  </Typography>
                </td>

                <td className='p-4'>
                  <Typography
                    variant='small'
                    className='font-normal text-gray-600'
                  >
                    {order.totalPrice}
                  </Typography>
                </td>

                <td className='p-4'>
                  <div className='flex items-center gap-2'>
                    <Link to={`update/${order._id}`}>
                      <IconButton variant='text' size='sm'>
                        <DocumentIcon className='h-4 w-4 text-gray-900' />
                      </IconButton>
                    </Link>
                    <IconButton variant='text' size='sm'>
                      <RiDeleteBin4Fill
                        strokeWidth={3}
                        className='h-4 w-4 text-red-600'
                      />
                    </IconButton>
                    <Modal
                      title='Delete Order'
                      body='Are you sure to delete this order?'
                      open={openModal}
                      setOpen={setOpenModal}
                      onHandleContinue={()=> onDeleteOrder(order._id)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
