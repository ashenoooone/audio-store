import React from 'react';
import { CartSVG } from '~/shared/assets/CartSVG.tsx';
import classNames from 'classnames';
import cls from './CartIcon.module.css';
import { Button } from '~/shared/ui/Button';
import { Badge } from '~/shared/ui/Badge';

interface CartProps {
  className?: string;
  itemsInCart?: number;
  onClick?: () => void;
}

export const CartIcon = (props: CartProps) => {
  const { className = '', itemsInCart } = props;
  return (
    <Button className={classNames(cls.CartIconButton, className)}>
      <CartSVG />
      {itemsInCart && <Badge value={itemsInCart} />}
    </Button>
  );
};
