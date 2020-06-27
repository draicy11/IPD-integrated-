import React from 'react';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './Checkout.css';
import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';

// Custom styling can be passed to options when creating an Element.
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  }

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card)
    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
    } else {
      setError(null);
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-row">
        <label for="card-element">
          Credit or debit card
        </label>
        <CardElement
          id="card-element"
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleChange}
        />
        <div className="card-errors" role="alert">{error}</div>
      </div>
      <button type="submit">Submit Payment</button>
    </form>
  );
}

// Setup Stripe.js and the Elements provider
const stripePromise = loadStripe('pk_test_51GwcdMCR7paPsMIk9mnIsM4Ubtn0C6atQHqUlliHHzrkTSPqCuCD2p39ha4xtXqi4SWMaH1P5dbMvRUyaJMD5P2900HLLc0XFv');

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

// POST the token ID to your backend.
async function stripeTokenHandler(token) {
  const response = await fetch('/charge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({token: token.id})
  });

  return response.json();
}


export default CheckoutForm;