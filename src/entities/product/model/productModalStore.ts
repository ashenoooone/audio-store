import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ProductModalStoreType, ProductType } from './types.ts';
import { createSelectors } from '~/shared/lib/createSelectors.ts';

const useProductModalStoreBase = create<ProductModalStoreType>()(
  immer((set) => ({
    item: undefined,
    isOpen: false,
    open: (p: ProductType) =>
      set((state) => {
        state.item = p;
        state.isOpen = true;
      }),
    onClose: () =>
      set((state) => {
        state.isOpen = false;
      }),
  })),
);

export const useProductModalStore = createSelectors(
  useProductModalStoreBase,
);
