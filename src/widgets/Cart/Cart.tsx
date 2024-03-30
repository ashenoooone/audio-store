import React from 'react';
import {
  CartList,
  CartTotal,
  getTotalCartPrice,
  useCartStore,
} from '~/entities/cart';
import cls from './Cart.module.css';

export const Cart = () => {
  const itemsInCart = useCartStore.use.items();
  const totalCartCost = useCartStore(getTotalCartPrice);

  return (
    <div className={cls.Cart}>
      <CartList className={cls.cart_list} items={itemsInCart} />
      <CartTotal
        className={cls.cart_total}
        totalCartCost={totalCartCost}
      />
    </div>
  );
};
