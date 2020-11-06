import React from "react";
import "./CheckoutPro.css";
import { useStateValue } from '../redux/StateProvider';

function CheckoutPro({ id, title, price, img, rate }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
  dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };
  return (
    <div className="checkoutPro">
      <img className="checkoutPro__image" src={img} alt="" />

      <div className="checkoutPro__info">
        <p className="checkoutPro__title">{title}</p>
        <p className="checkoutPro__price">
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutPro__rating">
          {Array(rate)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeItem}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutPro;
