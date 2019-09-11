import { createSelector } from 'reselect';

const selectUser = state => state.user; // returns the user reducer

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser 
);