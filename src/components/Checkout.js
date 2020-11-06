import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from '../redux/StateProvider';
import CheckoutPro from "./CheckoutPro";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        {basket.length === 0? (
          <div>
            <h2>Your basket is Empty</h2>
          </div>
        ):(
           <div>
              <h2 className="checkout__title">Your Shopping Basket</h2>
          
              {basket.map((i) => (
                <CheckoutPro
                  id={i.id}
                  title={i.title}
                  price={i.price}
                  img={i.img}
                  rate={i.rate}
                />
              ))}
              </div>
        )}
       
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;