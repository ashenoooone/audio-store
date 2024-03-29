import React from 'react';
import { ProductType } from '~/entities/product';

interface ProductListProps {
  className?: string;
  products: ProductType[];
}

export const ProductList = (props: ProductListProps) => {
  const { className = '' } = props;
  return <div className={className}>1</div>;
};
