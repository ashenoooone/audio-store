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

export type PaymentCardDetails = {
  card_number: string;
  card_cvv: string;
  card_date: string;
};

export type PaymentQiwiDetails = {
  phone_number: string;
};

export type PaymentDetailsType = {
  card: PaymentCardDetails;
  qiwi: PaymentQiwiDetails;
};

export type CartRegistrationModalStoreType = {
  data: CartRegistrationModalStoreDataType;
  isOpen?: boolean;
  paymentDetails: PaymentDetailsType;
  onClose?: () => void;
  open?: () => void;
  changeShippingMethod?: (method: ShippingMethod) => void;
  changePaymentMethod?: (method: PaymentType) => void;
  changePaymentCardDetails: (cardDetails: PaymentCardDetails) => void;
  changePaymentQiwiDetails: (qiwiDetails: PaymentQiwiDetails) => void;
};
