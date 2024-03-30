import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './CartList.module.css';
import { CartItemType } from '../../model/types.ts';
import { CartItem } from '~/entities/cart/ui/CartItem/CartItem.tsx';

interface CartListProps {
  className?: string;
  items?: CartItemType[];
  onIncreaseClick?: (cartItem: CartItemType) => void;
  onDecreaseClick?: (cartItem: CartItemType) => void;
  onDeleteClick?: (cartItem: CartItemType) => void;
}

export const CartList = memo((props: CartListProps) => {
  const {
    className = '',
    items,
    onIncreaseClick,
    onDeleteClick,
    onDecreaseClick,
  } = props;
  return (
    <div className={classNames(className, cls.CartList)}>
      {items?.map((item) => (
        <CartItem
          key={`cartitem${item.item.title}`}
          item={item}
          onIncreaseClick={onIncreaseClick}
          onDecreaseClick={onDecreaseClick}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
});
