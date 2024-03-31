import React, { memo, useCallback } from 'react';
import cls from './CartRegistrationModal.module.css';
import classNames from 'classnames';
import { Modal, ModalProps } from '~/shared/ui/Modal';
import {
  CartRegistrationModalStoreDataType,
  PaymentDetailsType,
  PaymentMethodMapper,
  PaymentType,
  ShippingMethod,
  ShippingMethodMapper,
} from '../../model/types.ts';
import { ShippingMethods } from '../ShippingMethods/ShippingMethods.tsx';
import { PaymentsMethods } from '../PaymentsMethods/PaymentsMethods.tsx';
import { PaymentDetails } from '../PaymentDetails/PaymentDetails.tsx';
import { Button } from '~/shared/ui/Button';

interface CartRegistrationModalProps
  extends Omit<ModalProps, 'children'> {
  className?: string;
  data?: CartRegistrationModalStoreDataType;
  onChangeShippingMethod?: (m: ShippingMethod) => void;
  onChangePaymentMethod?: (m: PaymentType) => void;
  onChangeQiwiPhoneNumber?: (number: string) => void;
  onChangeCardNumber?: (number: string) => void;
  onChangeCardCVV?: (cvv: string) => void;
  onChangeCardDate?: (date: string) => void;
  paymentDetails?: PaymentDetailsType;
  onPayClick?: ({
    paymentDetails,
    data,
  }: {
    data?: CartRegistrationModalStoreDataType;
    paymentDetails?: PaymentDetailsType;
  }) => void;
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
      onChangeQiwiPhoneNumber,
      onChangeCardNumber,
      onChangeCardDate,
      onChangeCardCVV,
      paymentDetails,
      onPayClick,
    } = props;

    const onPayClickHandler = useCallback(() => {
      onPayClick?.({
        data,
        paymentDetails,
      });
    }, [data, onPayClick, paymentDetails]);

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
        <PaymentDetails
          selectedPaymentMethod={data?.paymentType}
          onChangeQiwiPhoneNumber={onChangeQiwiPhoneNumber}
          onChangeCardNumber={onChangeCardNumber}
          onChangeCardDate={onChangeCardDate}
          onChangeCardCVV={onChangeCardCVV}
          paymentDetails={paymentDetails}
        />
        <ShippingMethods
          onChange={onChangeShippingMethod}
          selectedShippingMethod={data?.shippingMethod}
          shippingMethods={
            Object.keys(ShippingMethodMapper) as ShippingMethod[]
          }
        />
        <Button className={cls.button} onClick={onPayClickHandler}>
          Оплатить
        </Button>
      </Modal>
    );
  },
);
