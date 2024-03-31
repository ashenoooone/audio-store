import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import {
  CartRegistrationModalStoreType,
  PaymentType,
  ShippingMethod,
} from '../model/types.ts';
import { createSelectors } from '~/shared/lib/createSelectors.ts';

const useCartRegistrationModalStoreBase =
  create<CartRegistrationModalStoreType>()(
    immer((set) => ({
      data: {
        paymentType: 'debit_cart',
        shippingMethod: 'courier',
      },
      changePaymentMethod: (m: PaymentType) =>
        set((state) => {
          state.data.paymentType = m;
        }),
      changeShippingMethod: (m: ShippingMethod) =>
        set((state) => {
          state.data.shippingMethod = m;
        }),
      isOpen: false,
      onClose: () =>
        set((state) => {
          state.isOpen = false;
        }),
      open: () =>
        set((state) => {
          state.isOpen = true;
        }),
    })),
  );

export const useCartRegistrationModalStore = createSelectors(
  useCartRegistrationModalStoreBase,
);
