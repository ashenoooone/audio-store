import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './Price.module.css';

interface PriceProps {
  className?: string;
  price: number | string;
}

export const Price = memo((props: PriceProps) => {
  const { className = '', price } = props;
  return (
    <div className={classNames(className, cls.price)}>
      {price}&nbsp;₽
    </div>
  );
});
