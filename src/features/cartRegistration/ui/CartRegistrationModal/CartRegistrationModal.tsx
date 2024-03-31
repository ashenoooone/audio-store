import React, { memo } from 'react';
import cls from './CartRegistrationModal.module.css';
import classNames from 'classnames';
import { Modal, ModalProps } from '~/shared/ui/Modal';
import {
  CartRegistrationModalStoreDataType,
  PaymentMethodMapper,
  PaymentType,
  ShippingMethod,
  ShippingMethodMapper,
} from '../../model/types.ts';
import { ShippingMethods } from '../ShippingMethods/ShippingMethods.tsx';
import { PaymentsMethods } from '../PaymentsMethods/PaymentsMethods.tsx';

interface CartRegistrationModalProps
  extends Omit<ModalProps, 'children'> {
  className?: string;
  data?: CartRegistrationModalStoreDataType;
  onChangeShippingMethod?: (m: ShippingMethod) => void;
  onChangePaymentMethod?: (m: PaymentType) => void;
}

export const CartRegistrationModal = memo(
  (props: CartRegistrationModalProps) => {
    const {
      className = '',
      data,
      onChangeShippingMethod,
      onClose,
      isOpen,
      onChangePaymentMethod,
    } = props;
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={classNames(className, cls.CartRegistrationModal)}
      >
        <PaymentsMethods
          selectedPaymentMethod={data?.paymentType}
          onChange={onChangePaymentMethod}
          paymentMethods={
            Object.keys(PaymentMethodMapper) as PaymentType[]
          }
        />
        <ShippingMethods
          onChange={onChangeShippingMethod}
          selectedShippingMethod={data?.shippingMethod}
          shippingMethods={
            Object.keys(ShippingMethodMapper) as ShippingMethod[]
          }
        />
      </Modal>
    );
  },
);
