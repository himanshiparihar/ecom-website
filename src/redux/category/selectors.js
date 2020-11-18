import { createSelector } from 'reselect';

const selectCategory = state => state.category;

export const selectError = createSelector(
    [selectCategory],
    (category) => category.error
);

export const selectCategoryList = createSelector(
    [selectCategory],
    (category) => category.categoriesList
);

export const selectLoading = createSelector(
    [selectCategory],
    (category) => category.loading
);
