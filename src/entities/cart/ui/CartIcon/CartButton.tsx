import React, { ButtonHTMLAttributes } from 'react';
import { CartSVG } from '~/shared/assets/CartSVG.tsx';
import classNames from 'classnames';
import cls from './CartIcon.module.css';
import { Button } from '~/shared/ui/Button';
import { Badge } from '~/shared/ui/Badge';

interface CartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  itemsInCart?: number;
  onClick?: () => void;
}

export const CartButton = (props: CartProps) => {
  const { className = '', itemsInCart, ...rest } = props;
  return (
    <Button
      buttonTheme={'link'}
      className={classNames(cls.CartIconButton, className)}
      {...rest}
    >
      <CartSVG />
      {itemsInCart !== undefined && itemsInCart > 0 && (
        <Badge value={itemsInCart} />
      )}
    </Button>
  );
};
