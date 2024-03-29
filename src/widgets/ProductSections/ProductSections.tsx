import React, { useCallback } from 'react';
import { ProductList, ProductType } from '~/entities/product';
import cls from './ProductSections.module.css';
import { useCartStore } from '~/entities/cart';

interface ProductSectionsProps {
  className?: string;
  sections?: Record<string, ProductType[]>;
}

export const ProductSections = (props: ProductSectionsProps) => {
  const addToCart = useCartStore.use.addToCart();

  const onProductListBuyClick = useCallback(
    (product: ProductType) => {
      addToCart(product);
    },
    [addToCart],
  );

  const { className = '', sections } = props;
  return (
    <div className={className}>
      {sections &&
        Object.entries(sections).map(([k, v], index) => (
          <ProductList
            className={cls.ProductSection}
            key={'section' + index}
            products={v}
            title={k}
            onBuyClick={onProductListBuyClick}
          />
        ))}
    </div>
  );
};
