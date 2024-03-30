import React, { memo, useCallback } from 'react';
import {
  ProductList,
  ProductModal,
  ProductType,
  useProductModalStore,
} from '~/entities/product';
import cls from '~/widgets/ProductSections/ProductSections.module.css';
import { useFavouritesStore } from '~/entities/favourites';
import { useCartStore } from '~/entities/cart';
import { useTranslation } from 'react-i18next';

interface FavsProps {
  className?: string;
}

export const Favs = memo((props: FavsProps) => {
  const { className = '' } = props;
  const favsList = useFavouritesStore.use.items();
  const addToCart = useCartStore.use.addToCart();
  const toggleInFavs = useFavouritesStore.use.toggleItemInFavs();
  const openProductModal = useProductModalStore.use.open?.();
  const currentProduct = useProductModalStore.use.item?.();
  const closeProductModal = useProductModalStore.use.onClose?.();
  const isProductModalOpen = useProductModalStore.use.isOpen?.();

  const onProductListOpenExtendedProductInfo = useCallback(
    (product: ProductType) => {
      openProductModal?.(product);
    },
    [openProductModal],
  );

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

  const { t } = useTranslation();

  const onProductModalClose = useCallback(() => {
    closeProductModal?.();
  }, [closeProductModal]);

  return (
    <div className={className}>
      <h1 className={cls.title}>{t('Избранное')}</h1>
      <ProductList
        className={cls.ProductSection}
        products={favsList}
        favsList={favsList}
        onBuyClick={onProductListBuyClick}
        onToggleItemInFavs={onProductListToggleItemInFavsClick}
        onOpenExtendedProductInfo={
          onProductListOpenExtendedProductInfo
        }
      />
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
