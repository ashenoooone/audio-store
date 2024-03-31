import React, { memo, useCallback } from 'react';
import cls from './PaymentsMethods.module.css';
import classNames from 'classnames';
import {
  PaymentMethodMapper,
  PaymentType,
} from '../../model/types.ts';
import { useTranslation } from 'react-i18next';
import { Card } from '~/shared/ui/Card';
import { CheckMarkSVG } from '~/shared/assets/CheckMarkSVG.tsx';

interface PaymentsMethodsProps {
  className?: string;
  selectedPaymentMethod?: PaymentType;
  paymentMethods?: PaymentType[];
  onChange?: (m: PaymentType) => void;
}

export const PaymentsMethods = memo((props: PaymentsMethodsProps) => {
  const {
    selectedPaymentMethod,
    paymentMethods,
    className = '',
    onChange,
  } = props;
  const { t } = useTranslation();

  const onPaymentMethodChange = useCallback(
    (m: PaymentType) => () => {
      onChange?.(m);
    },
    [onChange],
  );

  return (
    <div className={classNames(className, cls.PaymentsMethods)}>
      <h2>{t('Способ оплаты')}</h2>
      <div className={cls.content}>
        {paymentMethods?.map((m) => (
          <Card
            className={classNames(cls.payment_method, {
              [cls.selected]: selectedPaymentMethod === m,
            })}
            key={m}
            onClick={onPaymentMethodChange(m)}
          >
            {selectedPaymentMethod === m && (
              <CheckMarkSVG className={cls.check_icon} />
            )}
            {t(PaymentMethodMapper[m])}
          </Card>
        ))}
      </div>
    </div>
  );
});
