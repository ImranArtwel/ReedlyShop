import { createSelector } from 'reselect';
 

const selectShop = (state) => state.shop;

export const selectCollectionsForPreview = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollectionsForPreview],
    collections => collections[collectionUrlParam]
    );
