import React from 'react';
import cls from './Header.module.css';
import classNames from 'classnames';
import { Logo } from '~/shared/ui/Logo';
import {
  CartIcon,
  getTotalCartLength,
  useCartStore,
} from '~/entities/cart';
import { FavouritesIcon } from '~/entities/favourites';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className = '' } = props;
  const itemsInCart = useCartStore(getTotalCartLength);

  return (
    <div className={classNames(cls.Header, className)}>
      <Logo />
      <div className={cls.buttons}>
        <FavouritesIcon itemsInCart={12} />
        <CartIcon itemsInCart={itemsInCart} />
      </div>
    </div>
  );
};
