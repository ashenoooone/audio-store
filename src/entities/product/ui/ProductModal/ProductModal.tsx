import React, { useCallback, useMemo } from 'react';
import { ProductType } from '../../model/types.ts';
import { Modal, ModalProps } from '~/shared/ui/Modal';
import cls from './ProductModal.module.css';
import classNames from 'classnames';
import { Rating } from '~/shared/ui/Rating';
import { Price } from '~/shared/ui/Price';
import { Button } from '~/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { FilledHeartSVG } from '~/shared/assets/FilledHeartSVG.tsx';

interface ProductModalProps extends Omit<ModalProps, 'children'> {
  className?: string;
  product?: ProductType;
  onBuyClick?: (product: ProductType) => void;
  favsList?: ProductType[];
  onToggleItemInFavs?: (product: ProductType) => void;
}

export const ProductModal = (props: ProductModalProps) => {
  const {
    className = '',
    product,
    onToggleItemInFavs,
    onBuyClick,
    onClose,
    isOpen,
    favsList,
  } = props;
  const { t } = useTranslation();

  const onBuyClickHandler = useCallback(() => {
    if (product) onBuyClick?.(product);
  }, [onBuyClick, product]);

  const onToggleFavsClick = useCallback(() => {
    if (product) onToggleItemInFavs?.(product);
  }, [onToggleItemInFavs, product]);

  const inFavs = useMemo<boolean>(() => {
    return Boolean(
      favsList?.find((item) => item.title === product?.title),
    );
  }, [favsList, product?.title]);

  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(className, cls.ProductModal)}
    >
      <img src={product.img} alt={product.title} />
      <div className={cls.main_info}>
        <div className={cls.heading}>
          <h1 className={cls.title}>{product.title}</h1>
          <FilledHeartSVG
            width={30}
            height={30}
            className={classNames(cls.favs_icon, {
              [cls.favs_icon_active]: inFavs,
            })}
          />
        </div>
        <Rating rate={product.rate} />
        <p className={cls.description}>{product.description}</p>
        <div className={cls.price_container}>
          <Price className={cls.price} price={product.price} />
          {product.old_price && (
            <Price
              className={cls.old_price}
              price={product.old_price}
            />
          )}
        </div>
        <div className={cls.buttons}>
          <Button onClick={onBuyClickHandler} className={cls.button}>
            {t('Добавить в корзину')}
          </Button>
          <Button onClick={onToggleFavsClick} className={cls.button}>
            {t('Добавить в избранное')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
