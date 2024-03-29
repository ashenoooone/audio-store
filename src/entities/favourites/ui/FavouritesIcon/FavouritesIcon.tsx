import React from 'react';
import classNames from 'classnames';
import cls from './FavouritesIcon.module.css';
import { Button } from '~/shared/ui/Button';
import { HeartSVG } from '~/shared/assets/HeartSVG.tsx';
import { Badge } from '~/shared/ui/Badge';

interface FavouritesIconProps {
  className?: string;
  itemsInCart?: number;
}

export const FavouritesIcon = (props: FavouritesIconProps) => {
  const { className = '', itemsInCart } = props;
  return (
    <Button
      className={classNames(cls.FavouritesIconButton, className)}
    >
      <HeartSVG />
      {itemsInCart && <Badge value={itemsInCart} />}
    </Button>
  );
};
