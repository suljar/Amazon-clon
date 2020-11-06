import React from "react";
import "./Product.css";
import { useStateValue } from '../redux/StateProvider'

function Product({ id, title, price, img, rate }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        img: img,
        rate: rate
      }
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rate)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={img}
        alt="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
      />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
