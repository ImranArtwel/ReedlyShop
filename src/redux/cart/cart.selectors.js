import { createSelector } from 'reselect';

const selectCart = state => state.cart;  // input selector get the slice of the state..in this case..the cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
         (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity , 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);