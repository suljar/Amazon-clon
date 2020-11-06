import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../redux/StateProvider';

function Subtotal() {
  var sum = 0;
  const [{ basket }, dispatch] = useStateValue();

  {
    basket.map((i) => (sum = sum + i.price));
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        value={sum}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
