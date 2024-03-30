import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import cls from './FavouritesIcon.module.css';
import { Button } from '~/shared/ui/Button';
import { HeartSVG } from '~/shared/assets/HeartSVG.tsx';
import { Badge } from '~/shared/ui/Badge';

interface FavouritesIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  itemsInFavs?: number;
}

export const FavouritesButton = (props: FavouritesIconProps) => {
  const { className = '', itemsInFavs, ...rest } = props;
  return (
    <Button
      buttonTheme={'link'}
      className={classNames(cls.FavouritesIconButton, className)}
      {...rest}
    >
      <HeartSVG />
      {itemsInFavs !== undefined && itemsInFavs > 0 && (
        <Badge value={itemsInFavs} />
      )}
    </Button>
  );
};
