import { ProductType } from '~/entities/product';

export type CartItemType = {
  item: ProductType;
  count: number;
};

export type CartStoreType = {
  items: CartItemType[];
  addToCart: (item: ProductType) => void;
  removeFromCart: (title: string) => void;
  increaseInCart: (title: string) => void;
  decreaseInCart: (title: string) => void;
};
