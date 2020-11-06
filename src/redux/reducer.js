
export const initialState = {
  basket: [],
  user: null
};

export const getTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const basket = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case 'REMOVE_FROM_BASKET':
      const i = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (i >= 0) {
        newBasket.splice(i, 1);
      } else {
        console.warn("item not in the basket");
      }
      return {
        ...state,
        basket: newBasket
      };

    default:
      return state;
  }
};

export default basket;

