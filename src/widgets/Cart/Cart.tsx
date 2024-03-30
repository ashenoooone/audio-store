import React, { useCallback } from 'react';
import {
  CartItemType,
  CartList,
  CartTotal,
  getTotalCartPrice,
  useCartStore,
} from '~/entities/cart';
import cls from './Cart.module.css';
import { useTranslation } from 'react-i18next';

export const Cart = () => {
  const itemsInCart = useCartStore.use.items();
  const totalCartCost = useCartStore(getTotalCartPrice);
  const onDeleteFromCartClick = useCartStore.use.removeFromCart();
  const onDecreaseItemInCart = useCartStore.use.decreaseInCart();
  const onIncreaseItemInCart = useCartStore.use.increaseInCart();
  const { t } = useTranslation();

  const onCartListDecreaseClick = useCallback(
    (cartItem: CartItemType) => {
      onDecreaseItemInCart(cartItem.item.title);
    },
    [onDecreaseItemInCart],
  );

  const onCartListDeleteClick = useCallback(
    (cartItem: CartItemType) => {
      onDeleteFromCartClick(cartItem.item.title);
    },
    [onDeleteFromCartClick],
  );

  const onCartListIncreaseClick = useCallback(
    (cartItem: CartItemType) => {
      onIncreaseItemInCart(cartItem.item.title);
    },
    [onIncreaseItemInCart],
  );

  return (
    <div className={cls.Cart}>
      <h1 className={cls.title}>{t('Корзина')}</h1>
      <div className={cls.content}>
        <CartList
          items={itemsInCart}
          onDecreaseClick={onCartListDecreaseClick}
          onDeleteClick={onCartListDeleteClick}
          onIncreaseClick={onCartListIncreaseClick}
        />
        <CartTotal
          className={cls.cart_total}
          totalCartCost={totalCartCost}
        />
      </div>
    </div>
  );
};
