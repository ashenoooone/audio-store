import React, { memo } from 'react';
import { ProductType } from '~/entities/product';
import cls from './ProductList.module.css';
import { Product } from '../Product/Product';
import classNames from 'classnames';

interface ProductListProps {
  className?: string;
  products: ProductType[];
  title?: string;
  favsList?: ProductType[];
  onBuyClick?: (product: ProductType) => void;
  onToggleItemInFavs?: (product: ProductType) => void;
}

export const ProductList = memo((props: ProductListProps) => {
  const {
    className = '',
    onToggleItemInFavs,
    title,
    onBuyClick,
    products,
    favsList,
  } = props;
  return (
    <div className={classNames(className, cls.ProductList)}>
      {title && <h2 className={cls.title}>{title}</h2>}
      <div className={cls.list}>
        {products.map((p) => (
          <Product
            inFavs={favsList?.includes(p)}
            onBuyClick={onBuyClick}
            key={p.title}
            product={p}
            onToggleItemInFavs={onToggleItemInFavs}
          />
        ))}
      </div>
    </div>
  );
});
