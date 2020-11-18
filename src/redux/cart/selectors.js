import { createSelector } from 'reselect';

const cart = state => state.cart;

export const selectError = createSelector(
    [cart],
    (carts) => carts.error
);

export const selectCartItems = createSelector(
    [cart],
    (carts) => carts.cartItems
);

export const selectLoading = createSelector(
    [cart],
    (carts) => carts.loading
);
