import { FavouritesStoreType } from './types.ts';
import { ProductType } from '~/entities/product';

export const getTotalFavsLength = (state: FavouritesStoreType) =>
  state.items.length;

export const isProductInFavs =
  (state: FavouritesStoreType) => (product: ProductType) =>
    state.items.includes(product);
