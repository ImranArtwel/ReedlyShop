import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const stripePublicKey = "pk_test_bhHPJYkZ675YJro3yAAhIpCT00QL1OvqVp";

  const onToken = (token) => {
    console.log(token);
    axios
      .post("/payment", {
        amount: stripePrice,
        token,
      })
      .then(() => {
        alert("Payment successful");
      })
      .catch((err) => {
        console.log("payment error:", JSON.parse(err));
        alert("There was an error with your payment. Please use valid card");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Reedly Shop"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total price is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={stripePublicKey}
    />
  );
};

export default StripeCheckoutButton;
