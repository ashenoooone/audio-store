import React, { useCallback } from 'react';
import cls from './Header.module.css';
import classNames from 'classnames';
import { Logo } from '~/shared/ui/Logo';
import {
  CartButton,
  getTotalCartLength,
  useCartStore,
} from '~/entities/cart';
import {
  FavouritesButton,
  getTotalFavsLength,
  useFavouritesStore,
} from '~/entities/favourites';
import { useNavigate } from 'react-router-dom';
import { RoutesPaths } from '~/shared/configs/routerConfig/routerConfig.tsx';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className = '' } = props;
  const itemsInCart = useCartStore(getTotalCartLength);
  const itemsInFavs = useFavouritesStore(getTotalFavsLength);
  const navigate = useNavigate();

  const onCartButtonClick = useCallback(() => {
    navigate(RoutesPaths.cart);
  }, [navigate]);

  const onFavouritesButtonClick = useCallback(() => {
    navigate(RoutesPaths.favourites);
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate(RoutesPaths.main);
  }, [navigate]);

  return (
    <div className={classNames(cls.Header, className)}>
      <Logo onClick={onLogoClick} />
      <div className={cls.buttons}>
        <FavouritesButton
          itemsInFavs={itemsInFavs}
          onClick={onFavouritesButtonClick}
        />
        <CartButton
          itemsInCart={itemsInCart}
          onClick={onCartButtonClick}
        />
      </div>
    </div>
  );
};
