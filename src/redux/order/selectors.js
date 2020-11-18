import {createSelector} from 'reselect';

const selectOrders = state => state.orders;

export const selectError = createSelector(
    [selectOrders],
    (orders) => orders.error
);

export const selectLoading = createSelector(
    [selectOrders],
    (orders) => orders.loading
);

export const selectOrderList = createSelector(
    [selectOrders],
    (orders) => orders.orderList
)