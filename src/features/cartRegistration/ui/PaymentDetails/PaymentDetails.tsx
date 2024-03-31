import React, { memo, useCallback } from 'react';
import cls from './PaymentDetails.module.css';
import classNames from 'classnames';
import {
  PaymentDetailsType,
  PaymentType,
} from '../../model/types.ts';
import { useTranslation } from 'react-i18next';
import { PhoneInput } from '~/shared/ui/PhoneInput';

interface PaymentDetailsProps {
  className?: string;
  selectedPaymentMethod?: PaymentType;
  paymentDetails?: PaymentDetailsType;
}

export const PaymentDetails = memo((props: PaymentDetailsProps) => {
  const {
    className = '',
    selectedPaymentMethod,
    paymentDetails,
  } = props;

  const { t } = useTranslation();

  const renderPaymentDetails = useCallback(() => {
    switch (selectedPaymentMethod) {
      case 'debit_cart': {
        return 1;
      }
      case 'qiwi': {
        return <PhoneInput />;
      }
    }
  }, [selectedPaymentMethod]);

  return (
    <div className={classNames(cls.PaymentDetails, className)}>
      <h2>{t('Реквизиты оплаты')}</h2>
      <div>{renderPaymentDetails()}</div>
    </div>
  );
});
