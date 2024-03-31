import React, { memo, useCallback } from 'react';
import cls from './CartTotal.module.css';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Card } from '~/shared/ui/Card';
import { Button } from '~/shared/ui/Button';
import { CartItemType } from '~/entities/cart';

interface CartTotalProps {
  className?: string;
  totalCartCost: number;
  cartItems?: CartItemType[];
  onGoToRegistration?: () => void;
}

export const CartTotal = memo((props: CartTotalProps) => {
  const {
    className = '',
    totalCartCost,
    cartItems,
    onGoToRegistration,
  } = props;

  const { t } = useTranslation();

  const onGoToRegistrationClickHandler = useCallback(() => {
    onGoToRegistration?.();
  }, [onGoToRegistration]);

  return (
    <Card className={classNames(className, cls.CartTotal)}>
      <div className={cls.heading}>
        <p>{t('ИТОГО')}</p>
        <p>{totalCartCost}&nbsp;₽</p>
      </div>
      <Button
        className={cls.registration_button}
        onClick={onGoToRegistrationClickHandler}
      >
        {t('Перейти к оформлению')}
      </Button>
    </Card>
  );
});
