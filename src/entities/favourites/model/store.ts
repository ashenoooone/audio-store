import { create } from 'zustand';
import { FavouritesStoreType } from '~/entities/favourites/model/types.ts';
import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { createSelectors } from '~/shared/lib/createSelectors.ts';

const useFavouritesStoreBase = create<FavouritesStoreType>()(
  immer(
    persist(
      (set) => ({
        items: [],
        toggleItemInFavs: (item) =>
          set((state) => {
            // todo переделать на поиск по айди
            const itemExists = state.items.find(
              (p) => p.title === item.title,
            );
            if (itemExists) {
              state.items = state.items.filter(
                (p) => p.title !== item.title,
              );
            } else {
              state.items = [...state.items, item];
            }
          }),
        removeFromFavs: (title: string) =>
          set((state) => {
            state.items = state.items.filter(
              (p) => p.title !== title,
            );
          }),
        addToFavs: (item) =>
          set((state) => {
            state.items = [...state.items, item];
          }),
      }),
      {
        name: 'favs-store',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export const useFavouritesStore = createSelectors(
  useFavouritesStoreBase,
);
