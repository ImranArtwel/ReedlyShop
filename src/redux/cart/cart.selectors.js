import { createSelector } from 'reselect';

const selectCar = state => state.cart;  // input selector get the slice of the state..in this case..the cart

export const selectCartItems = createSelector(
    [selectCar],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
         (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity , 0)
);