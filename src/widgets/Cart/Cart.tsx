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
import {
  CartRegistrationModal,
  useCartRegistrationModalStore,
} from '~/features/cartRegistration';
import {
  PaymentType,
  ShippingMethod,
} from '~/features/cartRegistration/model/types.ts';

export const Cart = () => {
  // корзина
  const itemsInCart = useCartStore.use.items();
  const totalCartCost = useCartStore(getTotalCartPrice);
  // хендлеры для корзины
  const onDeleteFromCartClick = useCartStore.use.removeFromCart();
  const onDecreaseItemInCart = useCartStore.use.decreaseInCart();
  const onIncreaseItemInCart = useCartStore.use.increaseInCart();
  // данные и обработчики для расширенной информации для модалки товара
  const currentProduct = useProductModalStore.use.item?.();
  const openProductModal = useProductModalStore.use.open?.();
  const closeProductModal = useProductModalStore.use.onClose?.();
  const isProductModalOpen = useProductModalStore.use.isOpen?.();
  const { t } = useTranslation();
  // хендлеры для карточки товара в корзине
  const addToCart = useCartStore.use.addToCart();
  const toggleInFavs = useFavouritesStore.use.toggleItemInFavs();
  const favsList = useFavouritesStore.use.items();
  // данные и хендлеры для оформления корзины
  const changeCartRegistrationPaymentMethod =
    useCartRegistrationModalStore.use.changePaymentMethod?.();
  const changeCartRegistrationShippingMethod =
    useCartRegistrationModalStore.use.changeShippingMethod?.();
  const isCartRegistrationModalOpen =
    useCartRegistrationModalStore.use.isOpen?.();
  const closeCartRegistrationModal =
    useCartRegistrationModalStore.use.onClose?.();
  const openCartRegistrationModal =
    useCartRegistrationModalStore.use.open?.();
  const cartRegistrationModalData =
    useCartRegistrationModalStore.use.data?.();

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

  const onCartRegistrationModalClose = useCallback(() => {
    closeCartRegistrationModal?.();
  }, [closeCartRegistrationModal]);

  const onCartTotalGoToRegistration = useCallback(() => {
    openCartRegistrationModal?.();
  }, [openCartRegistrationModal]);

  const onCartRegistrationModalChangeShippingMethod = useCallback(
    (m: ShippingMethod) => {
      changeCartRegistrationShippingMethod?.(m);
    },
    [changeCartRegistrationShippingMethod],
  );

  const onCartRegistrationModalChangePaymentMethod = useCallback(
    (m: PaymentType) => {
      changeCartRegistrationPaymentMethod?.(m);
    },
    [changeCartRegistrationPaymentMethod],
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
          onGoToRegistration={onCartTotalGoToRegistration}
          cartItems={itemsInCart}
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
      <CartRegistrationModal
        isOpen={isCartRegistrationModalOpen}
        onClose={onCartRegistrationModalClose}
        data={cartRegistrationModalData}
        onChangeShippingMethod={
          onCartRegistrationModalChangeShippingMethod
        }
        onChangePaymentMethod={
          onCartRegistrationModalChangePaymentMethod
        }
      />
    </div>
  );
};
