import React, { memo, useCallback } from 'react';
import cls from './ShippingMethods.module.css';
import classNames from 'classnames';
import { Card } from '~/shared/ui/Card';
import { useTranslation } from 'react-i18next';
import {
  ShippingMethod,
  ShippingMethodMapper,
} from '../../model/types.ts';

interface ShippingMethodsProps {
  className?: string;
  shippingMethods: ShippingMethod[];
  onChange?: (shippingMethod: ShippingMethod) => void;
  selectedShippingMethod?: string;
}

export const ShippingMethods = memo((props: ShippingMethodsProps) => {
  const {
    shippingMethods,
    onChange,
    selectedShippingMethod,
    className = '',
  } = props;

  const { t } = useTranslation();

  const onCardClick = useCallback(
    (method: string) => () => {
      onChange?.(method as ShippingMethod);
    },
    [onChange],
  );

  return (
    <div className={classNames(className, cls.ShippingMethods)}>
      <h2>{t('Способ выдачи')}</h2>
      <div className={cls.shipping_methods}>
        {shippingMethods.map((method) => (
          <Card
            key={method}
            className={classNames(cls.shipping_method, {
              [cls.selected]: selectedShippingMethod === method,
            })}
            onClick={onCardClick(method)}
          >
            {t(ShippingMethodMapper[method])}
          </Card>
        ))}
      </div>
    </div>
  );
});
