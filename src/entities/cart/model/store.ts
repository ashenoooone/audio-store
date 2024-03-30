import { create } from 'zustand';
import { CartItemType, CartStoreType } from './types.ts';
import { createSelectors } from '~/shared/lib/createSelectors.ts';
import { immer } from 'zustand/middleware/immer';
import {
  createJSONStorage,
  devtools,
  persist,
} from 'zustand/middleware';

const useCartStoreBase = create<CartStoreType>()(
  devtools(
    persist(
      immer((set) => ({
        items: [],
        increaseInCart: (title: string) =>
          set((state) => {
            // ищем продукт, у которого необходимо поднять количество
            const findedProduct = state.items.find(
              (p: CartItemType) => p.item.title === title,
            );

            // если нашли, увеличиваем количество
            if (findedProduct) {
              state.items = [
                ...state.items,
                {
                  ...findedProduct,
                  count: (findedProduct.count += 1),
                },
              ];
            }
          }),
        decreaseInCart: (title: string) =>
          set((state) => {
            // ищем продукт, где надо снизить количество
            const findedProduct = state.items.find(
              (p: CartItemType) => p.item.title === title,
            );

            // если продукт найден и его больше 1, то уменьшаем кол-во на 1
            if (findedProduct && findedProduct.count > 1) {
              state.items = [
                ...state.items,
                {
                  ...findedProduct,
                  count: (findedProduct.count -= 1),
                },
              ];
            } else {
              // если продукт найден, но количество === 1, то просто удаляем продукт из корзины
              state.items = state.items.filter(
                (p: CartItemType) => p.item.title !== title,
              );
            }
          }),
        removeFromCart: (title: string) =>
          set((state) => {
            state.items = state.items.filter(
              (p: CartItemType) => p.item.title !== title,
            );
          }),
        addToCart: (product) =>
          set((state) => {
            const existingItem = state.items.find(
              (p) => p.item.title === product.title,
            );
            if (existingItem) {
              existingItem.count += 1;
            } else {
              state.items = [
                ...state.items,
                { item: product, count: 1 },
              ];
            }
          }),
      })),
      {
        name: 'cart-store',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export const useCartStore = createSelectors(useCartStoreBase);
