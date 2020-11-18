import constants  from './constants'; 

export const fetchProductListStart = (categoryId) => ({
    type: constants.FETCH_PRODUCT_LIST_START,
    payload: categoryId
});

export const fetchProductStart = (id) => ({
    type: constants.FETCH_PRODUCT_START,
    payload: id,
});

export const filterProductStart = (details) => ({
    type: constants.FILTER_PRODUCT_START,
    payload: details,
})