import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IOrder } from '../../types/order';

const EditOrder = () => {
  const [status, setStatus] = useState('')
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState<IOrder>();
  const [category, setCategory] = useState();
  useEffect(() => {
    const fetchOrder = async () => {
      const res = await axios.get(`http://localhost:4000/api/v1/order/${id}`, {
        withCredentials: true,
      });

      if (res.data.success) {
        setOrderDetails(res.data.order);
      }
    };

    fetchOrder();
  }, []);

  const processHandler = async (e: any) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:4000/api/v1/admin/order/${id}`,
      {
        status: status,
      },
      {
        withCredentials: true,
      }
    );
  };

  return (
    <>
      {orderDetails && (
        <div className='flex flex-1 gap-5 h-[calc(100vh-86px)]'>
          <div className='flex flex-col w-full gap-5 overflow-y-auto'>
            <div className='flex flex-col gap-5 p-5 bg-white w-full'>
              <div>Shipping Info</div>
              <div className='flex gap-7 text-gray-900'>
                <div className='flex flex-col'>
                  <div>Name:</div>
                  <div>Phone:</div>
                  <div>Address:</div>
                </div>
                <div className='flex flex-col'>
                  <div>{orderDetails.user.name}</div>
                  <div>{orderDetails.shippingInfo.phoneNo}</div>
                  <div>
                    {orderDetails.shippingInfo.address} ,
                    {orderDetails.shippingInfo.city} ,
                    {orderDetails.shippingInfo.state} ,
                    {orderDetails.shippingInfo.pinCode} ,
                    {orderDetails.shippingInfo.country}
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5 p-5 bg-white w-full'>
              <div>Payment Info</div>
              <div className='flex gap-7 text-gray-900'>
                <div className='flex flex-col'>
                  <div>Status</div>
                  <div>Amount</div>
                </div>
                <div className='flex flex-col'>
                  <div>{orderDetails.paymentInfo.status}</div>
                  <div>{orderDetails.totalPrice}</div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-5 p-5 bg-white w-full'>
              <div>Order</div>
              <div className='flex gap-7 text-gray-900'>
                <div className='flex flex-col'>
                  <div>Status</div>
                </div>
                <div className='flex flex-col'>
                  <select value={status}
                    className={
                      orderDetails.orderStatus === 'Processing'
                        ? 'text-yellow-800 bg-yellow-50 font-bold'
                        : orderDetails.orderStatus === 'Shipped'
                        ? 'text-blue-600 bg-blue-50 font-bold'
                        : 'text-green-600 bg-green-50 font-bold'
                    }
                  >
                    {orderDetails.orderStatus}
                  </select>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-5 p-5 bg-white w-full'>
              <div>Cart Items</div>
              <div className='flex gap-7 text-gray-900'>
                {orderDetails.orderItems.map((item) => (
                  <div
                    key={item._id}
                    className='flex justify-between gap-5 items-center'
                  >
                    <div>{item.image}</div>
                    <div>{item.name}</div>
                    <div>
                      {item.quantity}x Rs.{item.price}= Rs.
                      {item.quantity * item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {orderDetails.orderStatus !== 'Delivered' && (
            <div className='w-full'>
              <div className='bg-white p-5 flex flex-col gap-5'>
                <div>Process Order</div>
                <select
                  id='category'
                  name='category'
                  value={category} // Bind the state
                  onChange={(e: any) => setCategory(e.target.value)} // Update the state
                  className='border border-[rgba(162,162,162,0.53)] rounded p-2'
                >
                  <option value='Choose category'>Select Status</option>
                  {orderDetails.orderStatus === 'Processing' && (
                    <option value='Shipped'>Shipped</option>
                  )}
                  {orderDetails.orderStatus === 'Shipped' && (
                    <option value='delivered'>Delivered</option>
                  )}
                </select>
                <button className='bg-blue-300 py-2' onClick={processHandler}>
                  Process
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EditOrder;
