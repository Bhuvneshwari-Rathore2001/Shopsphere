import { CardNumberElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CheckoutForm from '../Components/CheckoutForm';
import { useSelector } from '../redux/store';

const StripePayment: React.FC = () => {
 const { shippingInfo, cartItems } = useSelector((state) => state.cart);
 const { user } = useSelector((state) => state.user);
  const [secretKey, setSecretKey] = useState('');
  const [raiseError, setRaiseError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const stripePromise = loadStripe(secretKey);

  const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));

  const stripe = useStripe();
  const elements = useElements();

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subTotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.total,
  };

  useEffect(() => {
    const fetchStripeApiKey = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'http://localhost:4000/api/v1/stripeapikey',
          {
            withCredentials: true,
          }
        );
        setSecretKey(response.data.stripeApiKey);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStripeApiKey();
  }, []);
 

  const handleStripePayment = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/v1/stripe/payment/process',
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method:{
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        setLoading(false);
        setRaiseError(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          // dispatch(createOrder(order));
          // navigate('/success');
        } else {
          setRaiseError("There's some issue while processing payment");
        }
      }

      if (result.error) {
        setLoading(false);
        setRaiseError(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          // dispatch(createOrder(order));
          // navigate('/success');
        } else {
          setRaiseError("There's some issue while processing payment");
        }
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      setRaiseError(err.response.data.message);
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Stripe Payment</h1>
      {secretKey && (
        <Elements stripe={stripePromise}>
          <CheckoutForm secretKey={secretKey} />
        </Elements>
      )}
    </div>
  );
};

export default StripePayment;
