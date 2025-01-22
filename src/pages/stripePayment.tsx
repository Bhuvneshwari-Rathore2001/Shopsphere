import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CheckoutForm from '../Components/CheckoutForm';

const StripePayment: React.FC = () => {
  const [secretKey, setSecretKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const stripePromise = loadStripe(secretKey);

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
