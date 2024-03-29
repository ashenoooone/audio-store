import React from 'react';
import { ProductType } from '~/entities/product';
import cls from './ProductList.module.css';
import { Product } from '../Product/Product';
import classNames from 'classnames';

interface ProductListProps {
  className?: string;
  products: ProductType[];
  title?: string;
  onBuyClick?: (product: ProductType) => void;
}

export const ProductList = (props: ProductListProps) => {
  const { className = '', title, onBuyClick, products } = props;
  return (
    <div className={classNames(className, cls.ProductList)}>
      {title && <h2 className={cls.title}>{title}</h2>}
      <div className={cls.list}>
        {products.map((p) => (
          <Product
            onBuyClick={onBuyClick}
            key={p.title}
            product={p}
          />
        ))}
      </div>
    </div>
  );
};
