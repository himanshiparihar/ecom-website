import { createSelector } from 'reselect';

const product = state => state.product;

export const selectError = createSelector(
    [product],
    (products) => products.error
);

export const selectProductList = createSelector(
    [product],
    (products) => products.productList
);

export const selectProduct = createSelector(
    [product],
    (products) => products.product
);

export const selectFilteredList = createSelector(
    [product],
    (products) => products.filteredList
)

export const selectLoading = createSelector(
    [product],
    (products) => products.loading
)