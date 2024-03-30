import React, { memo, useCallback } from 'react';
import cls from './CartItem.module.css';
import classNames from 'classnames';
import { CartItemType } from '~/entities/cart';
import { Card } from '~/shared/ui/Card';
import { Button } from '~/shared/ui/Button';
import { MinusSVG } from '~/shared/assets/MinusSVG.tsx';
import { PlusSVG } from '~/shared/assets/PlusSVG.tsx';
import { TrashBoxSVG } from '~/shared/assets/TrashBoxSVG.tsx';
import { Price } from '~/shared/ui/Price';

interface CartItemProps {
  className?: string;
  item: CartItemType;
  onIncreaseClick?: (cartItem: CartItemType) => void;
  onDecreaseClick?: (cartItem: CartItemType) => void;
  onDeleteClick?: (cartItem: CartItemType) => void;
}

export const CartItem = memo((props: CartItemProps) => {
  const {
    className = '',
    item,
    onDeleteClick,
    onIncreaseClick,
    onDecreaseClick,
  } = props;

  const onDecreaseClickHandler = useCallback(() => {
    onDecreaseClick?.(item);
  }, [item, onDecreaseClick]);

  const onIncreaseClickHandler = useCallback(() => {
    onIncreaseClick?.(item);
  }, [item, onIncreaseClick]);

  const onDeleteClickHandler = useCallback(() => {
    onDeleteClick?.(item);
  }, [item, onDeleteClick]);

  return (
    <Card className={classNames(className, cls.CartItem)}>
      <div className={cls.main_content}>
        <img
          className={cls.image}
          src={item.item.img}
          alt={item.item.title}
        />
        <div className={cls.count_buttons}>
          <Button
            circle
            className={cls.count_button}
            onClick={onDecreaseClickHandler}
          >
            <MinusSVG />
          </Button>
          <p className={cls.count}>{item.count}</p>
          <Button
            circle
            className={cls.count_button}
            onClick={onIncreaseClickHandler}
          >
            <PlusSVG />
          </Button>
        </div>
      </div>
      <div className={cls.main_info}>
        <h2 className={cls.title}>{item.item.title}</h2>
        <Price className={cls.price} price={item.item.price} />
      </div>
      <Price
        price={(item.count * item.item.price).toFixed(2)}
        className={cls.total_price}
      />
      <Button
        className={cls.delete_button}
        buttonTheme={'link'}
        onClick={onDeleteClickHandler}
      >
        <TrashBoxSVG />
      </Button>
    </Card>
  );
});
