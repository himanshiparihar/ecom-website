import constants from './constants';

export const fetchOrdersStart = (userId) => ({
    type:constants.FETCH_ORDERS_START,
    payload: userId,
});

export const createOrderStart = (details) => ({
    type: constants.CREATE_ORDER_START,
    payload: details
});

export const cancelOrderStart = (id) => ({
    type: constants.CANCEL_ORDER_START,
    payload: id,
});