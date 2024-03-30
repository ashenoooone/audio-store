import React, { memo, useCallback } from 'react';
import { ProductList, ProductType } from '~/entities/product';
import cls from './ProductSections.module.css';
import { useCartStore } from '~/entities/cart';
import { useFavouritesStore } from '~/entities/favourites';

interface ProductSectionsProps {
  className?: string;
  sections?: Record<string, ProductType[]>;
}

export const ProductSections = memo((props: ProductSectionsProps) => {
  const addToCart = useCartStore.use.addToCart();
  const toggleInFavs = useFavouritesStore.use.toggleItemInFavs();
  const favsList = useFavouritesStore.use.items();

  const onProductListBuyClick = useCallback(
    (product: ProductType) => {
      addToCart(product);
    },
    [addToCart],
  );

  const onProductListToggleItemInFavsClick = useCallback(
    (product: ProductType) => {
      toggleInFavs(product);
    },
    [toggleInFavs],
  );

  const { className = '', sections } = props;

  return (
    <div className={className}>
      {sections &&
        Object.entries(sections).map(([title, product], index) => (
          <ProductList
            className={cls.ProductSection}
            key={'section' + index}
            products={product}
            favsList={favsList}
            title={title}
            onBuyClick={onProductListBuyClick}
            onToggleItemInFavs={onProductListToggleItemInFavsClick}
          />
        ))}
    </div>
  );
});
