import constants from './constants';

export const addItemToCart = (details) => ({
    type: constants.ADD_ITEM_TO_CART_START,
    payload: details
});

export const updateCartItem = (quantity) => ({
    type: constants.UPDATE_CART_ITEM_START,
    payload: quantity
});

export const deleteCartItem = (id) => ({
    type: constants.DELETE_CART_ITEM_START,
    payload: id
});

export const clearCart = (userId) => ({
    type: constants.CLEAR_CART_START,
    payload: userId
});

export const fetchCartItems = (userId) => ({
    type: constants.FETCH_CART_ITEMS_START,
    payload: userId
});