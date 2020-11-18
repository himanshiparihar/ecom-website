import { createSelector } from 'reselect';

const selectAuth = state => state.auth;

export const selectError = createSelector(
    [selectAuth],
    (auth) => auth.error
);

export const selectLoading = createSelector(
    [selectAuth],
    (auth) => auth.loading,
)