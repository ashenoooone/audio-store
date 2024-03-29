import React from 'react';
import { ProductType } from '../../model/types.ts';

interface ProductProps {
  className?: string;
  product?: ProductType;
}

export const Product = (props: ProductProps) => {
  const { className = '', product } = props;
  return <div className={className}>1</div>;
};
