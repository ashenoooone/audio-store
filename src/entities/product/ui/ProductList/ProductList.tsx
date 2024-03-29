import React from 'react';
import { ProductType } from '~/entities/product';
import cls from './ProductList.module.css';
import { Product } from '../Product/Product';
import classNames from 'classnames';

interface ProductListProps {
  className?: string;
  products: ProductType[];
  title?: string;
}

export const ProductList = (props: ProductListProps) => {
  const { className = '', title, products } = props;
  return (
    <div className={classNames(className, cls.ProductList)}>
      {title && <h2 className={cls.title}>{title}</h2>}
      <div className={cls.list}>
        {products.map((p) => (
          <Product key={p.title} product={p} />
        ))}
      </div>
    </div>
  );
};
