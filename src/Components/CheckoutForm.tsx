import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

interface CheckoutFormProps {
  secretKey: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ secretKey }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      secretKey,
      {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      }
    );

    setLoading(false);

    if (error) {
      setMessage(error.message || 'Payment failed');
    } else if (paymentIntent?.status === 'succeeded') {
      setMessage('Payment successful!');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type='submit' disabled={loading}>
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
      {message && <div>{message}</div>}
    </>
  );
};

export default CheckoutForm;
