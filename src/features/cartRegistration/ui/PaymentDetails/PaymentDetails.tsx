import React, { memo, useCallback } from 'react';
import cls from './PaymentDetails.module.css';
import classNames from 'classnames';
import {
  PaymentDetailsType,
  PaymentType,
} from '../../model/types.ts';
import { useTranslation } from 'react-i18next';
import { PhoneInput } from '~/shared/ui/PhoneInput';
import { DebitCard } from '~/shared/ui/DebitCard';

interface PaymentDetailsProps {
  className?: string;
  selectedPaymentMethod?: PaymentType;
  paymentDetails?: PaymentDetailsType;
  onChangeQiwiPhoneNumber?: (number: string) => void;
  onChangeCardNumber?: (number: string) => void;
  onChangeCardCVV?: (cvv: string) => void;
  onChangeCardDate?: (date: string) => void;
}

export const PaymentDetails = memo((props: PaymentDetailsProps) => {
  const {
    className = '',
    selectedPaymentMethod,
    paymentDetails,
    onChangeCardDate,
    onChangeCardCVV,
    onChangeCardNumber,
    onChangeQiwiPhoneNumber,
  } = props;

  const { t } = useTranslation();

  const renderPaymentDetails = useCallback(() => {
    switch (selectedPaymentMethod) {
      case 'debit_cart': {
        return (
          <DebitCard
            onChangeCardDate={onChangeCardDate}
            onChangeCardCVV={onChangeCardCVV}
            onChangeCardNumber={onChangeCardNumber}
            number={paymentDetails?.card.card_number}
            cvv={paymentDetails?.card.card_cvv}
            date={paymentDetails?.card.card_date}
          />
        );
      }
      case 'qiwi': {
        return (
          <PhoneInput
            value={paymentDetails?.qiwi.phone_number}
            onChange={onChangeQiwiPhoneNumber}
          />
        );
      }
    }
  }, [
    onChangeCardCVV,
    onChangeCardDate,
    onChangeCardNumber,
    onChangeQiwiPhoneNumber,
    paymentDetails?.card.card_cvv,
    paymentDetails?.card.card_date,
    paymentDetails?.card.card_number,
    paymentDetails?.qiwi.phone_number,
    selectedPaymentMethod,
  ]);

  return (
    <div className={classNames(cls.PaymentDetails, className)}>
      <h2>{t('Реквизиты оплаты')}</h2>
      <div>{renderPaymentDetails()}</div>
    </div>
  );
});
