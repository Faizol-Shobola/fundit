// CheckoutForm.js
import React, {useState} from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({amount}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://fundit-3xo.pages.dev", // Replace with your return URL
      },
    });  


    if (result.error) {
      setError(result.error.message);
    } else {
      // The PaymentElement handles the rest of the payment flow, including redirecting to your return URL.
      setPaymentSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe} className="btn mt-5 w-full">
        Pay
      </button>
      {error && <div className="text-red-500">{error}</div>}
      {paymentSuccess && (
        <div className="text-xl text-green-500">
          Payment Successful! Thank you for your payment.
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
