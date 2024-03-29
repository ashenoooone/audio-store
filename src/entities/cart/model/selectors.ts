import { CartStoreType } from './types.ts';

export const getTotalCartPrice = (state: CartStoreType) =>
  state.items.reduce((ac, cartItem) => {
    ac += cartItem.item.price * cartItem.count;
    return ac;
  }, 0);
