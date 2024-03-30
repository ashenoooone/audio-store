import React from 'react';
import cls from './CartTotal.module.css';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Card } from '~/shared/ui/Card';
import { Button } from '~/shared/ui/Button';

interface CartTotalProps {
  className?: string;
  totalCartCost: number;
}

export const CartTotal = (props: CartTotalProps) => {
  const { className = '', totalCartCost } = props;

  const { t } = useTranslation();

  return (
    <Card className={classNames(className, cls.CartTotal)}>
      <div className={cls.heading}>
        <p>{t('ИТОГО')}</p>
        <p>{totalCartCost}&nbsp;₽</p>
      </div>
      <Button className={cls.registration_button}>
        {t('Перейти к оформлению')}
      </Button>
    </Card>
  );
};
