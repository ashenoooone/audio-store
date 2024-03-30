import { ProductType } from '~/entities/product';

export type FavouritesStoreType = {
  items: ProductType[];
  addToFavs: (item: ProductType) => void;
  removeFromFavs: (title: string) => void;
  toggleItemInFavs: (item: ProductType) => void;
};
