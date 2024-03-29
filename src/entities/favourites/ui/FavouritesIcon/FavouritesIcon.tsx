import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import cls from './FavouritesIcon.module.css';
import { Button } from '~/shared/ui/Button';
import { HeartSVG } from '~/shared/assets/HeartSVG.tsx';
import { Badge } from '~/shared/ui/Badge';

interface FavouritesIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  itemsInCart?: number;
}

export const FavouritesIcon = (props: FavouritesIconProps) => {
  const { className = '', itemsInCart, ...rest } = props;
  return (
    <Button
      className={classNames(cls.FavouritesIconButton, className)}
      {...rest}
    >
      <HeartSVG />
      {itemsInCart && <Badge value={itemsInCart} />}
    </Button>
  );
};
