import React from 'react';
import cls from './Header.module.css';
import classNames from 'classnames';
import { Logo } from '~/shared/ui/Logo';
import { CartIcon } from '~/entities/cart';
import { FavouritesIcon } from '~/entities/favourites';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className = '' } = props;

  return (
    <div className={classNames(cls.Header, className)}>
      <Logo />
      <div className={cls.buttons}>
        <FavouritesIcon itemsInCart={12} />
        <CartIcon itemsInCart={2} />
      </div>
    </div>
  );
};
