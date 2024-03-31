export type PaymentType = 'debit_cart' | 'qiwi';

export type ShippingMethod = 'courier' | 'pick_up_point';

export const ShippingMethodMapper: Record<ShippingMethod, string> = {
  courier: 'Курьер',
  pick_up_point: 'Пункт выдачи',
};

export const PaymentMethodMapper: Record<PaymentType, string> = {
  qiwi: 'Киви',
  debit_cart: 'Картой',
};

export type CartRegistrationModalStoreDataType = {
  paymentType?: PaymentType;
  shippingMethod?: ShippingMethod;
};

export type CartRegistrationModalStoreType = {
  data: CartRegistrationModalStoreDataType;
  isOpen?: boolean;
  onClose?: () => void;
  open?: () => void;
  changeShippingMethod?: (method: ShippingMethod) => void;
  changePaymentMethod?: (method: PaymentType) => void;
};
