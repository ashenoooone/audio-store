import React, { memo, useCallback } from 'react';
import {
  ProductList,
  ProductModal,
  ProductType,
  useProductModalStore,
} from '~/entities/product';
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
  const currentProduct = useProductModalStore.use.item?.();
  const openProductModal = useProductModalStore.use.open?.();
  const closeProductModal = useProductModalStore.use.onClose?.();
  const isProductModalOpen = useProductModalStore.use.isOpen?.();

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

  const onProductListOpenExtendedProductInfo = useCallback(
    (product: ProductType) => {
      openProductModal?.(product);
    },
    [openProductModal],
  );

  const onProductModalClose = useCallback(() => {
    closeProductModal?.();
  }, [closeProductModal]);

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
            onOpenExtendedProductInfo={
              onProductListOpenExtendedProductInfo
            }
          />
        ))}
      <ProductModal
        isOpen={isProductModalOpen}
        product={currentProduct}
        onClose={onProductModalClose}
        onBuyClick={onProductListBuyClick}
        onToggleItemInFavs={onProductListToggleItemInFavsClick}
        favsList={favsList}
      />
    </div>
  );
});
