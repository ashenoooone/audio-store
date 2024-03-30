import React, { useCallback } from 'react';
import {
  CartItemType,
  CartList,
  CartTotal,
  getTotalCartPrice,
  useCartStore,
} from '~/entities/cart';
import cls from './Cart.module.css';
import { useTranslation } from 'react-i18next';
import {
  ProductModal,
  ProductType,
  useProductModalStore,
} from '~/entities/product';
import { useFavouritesStore } from '~/entities/favourites';

export const Cart = () => {
  const itemsInCart = useCartStore.use.items();
  const totalCartCost = useCartStore(getTotalCartPrice);
  const onDeleteFromCartClick = useCartStore.use.removeFromCart();
  const onDecreaseItemInCart = useCartStore.use.decreaseInCart();
  const onIncreaseItemInCart = useCartStore.use.increaseInCart();
  const currentProduct = useProductModalStore.use.item?.();
  const openProductModal = useProductModalStore.use.open?.();
  const closeProductModal = useProductModalStore.use.onClose?.();
  const isProductModalOpen = useProductModalStore.use.isOpen?.();
  const { t } = useTranslation();
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

  const onProductModalClose = useCallback(() => {
    closeProductModal?.();
  }, [closeProductModal]);

  const onCartListDecreaseClick = useCallback(
    (cartItem: CartItemType) => {
      onDecreaseItemInCart(cartItem.item.title);
    },
    [onDecreaseItemInCart],
  );

  const onCartListDeleteClick = useCallback(
    (cartItem: CartItemType) => {
      onDeleteFromCartClick(cartItem.item.title);
    },
    [onDeleteFromCartClick],
  );

  const onCartListIncreaseClick = useCallback(
    (cartItem: CartItemType) => {
      onIncreaseItemInCart(cartItem.item.title);
    },
    [onIncreaseItemInCart],
  );

  const onProductListOpenExtendedProductInfo = useCallback(
    (product: ProductType) => {
      openProductModal?.(product);
    },
    [openProductModal],
  );

  return (
    <div className={cls.Cart}>
      <h1 className={cls.title}>{t('Корзина')}</h1>
      <div className={cls.content}>
        <CartList
          className={cls.cart_list}
          items={itemsInCart}
          onDecreaseClick={onCartListDecreaseClick}
          onDeleteClick={onCartListDeleteClick}
          onIncreaseClick={onCartListIncreaseClick}
          onOpenExtendedProductInfo={
            onProductListOpenExtendedProductInfo
          }
        />
        <CartTotal
          className={cls.cart_total}
          totalCartCost={totalCartCost}
        />
      </div>
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
};
