import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './CartList.module.css';
import { CartItemType } from '../../model/types.ts';
import { CartItem } from '~/entities/cart/ui/CartItem/CartItem.tsx';
import { ProductType } from '~/entities/product';
import { useTranslation } from 'react-i18next';

interface CartListProps {
  className?: string;
  items?: CartItemType[];
  onIncreaseClick?: (cartItem: CartItemType) => void;
  onDecreaseClick?: (cartItem: CartItemType) => void;
  onDeleteClick?: (cartItem: CartItemType) => void;
  onOpenExtendedProductInfo?: (product: ProductType) => void;
}

export const CartList = memo((props: CartListProps) => {
  const {
    className = '',
    items,
    onIncreaseClick,
    onDeleteClick,
    onDecreaseClick,
    onOpenExtendedProductInfo,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(className, cls.CartList)}>
      {items && items?.length > 0 ? (
        items.map((item) => (
          <CartItem
            key={`cartitem${item.item.title}`}
            item={item}
            onIncreaseClick={onIncreaseClick}
            onDecreaseClick={onDecreaseClick}
            onDeleteClick={onDeleteClick}
            onOpenExtendedProductInfo={onOpenExtendedProductInfo}
          />
        ))
      ) : (
        <p>{t('Пусто')}</p>
      )}
    </div>
  );
});
