import React, { memo, useCallback } from 'react';
import { ProductType } from '../../model/types.ts';
import cls from './Product.module.css';
import classNames from 'classnames';
import { Card } from '~/shared/ui/Card';
import { Button } from '~/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { FilledHeartSVG } from '~/shared/assets/FilledHeartSVG.tsx';
import { EyeSVG } from '~/shared/assets/EyeSVG.tsx';
import { Rating } from '~/shared/ui/Rating';
import { Price } from '~/shared/ui/Price';

interface ProductProps {
  className?: string;
  product: ProductType;
  onBuyClick?: (product: ProductType) => void;
  onToggleItemInFavs?: (product: ProductType) => void;
  inFavs?: boolean;
  onOpenExtendedProductInfo?: (product: ProductType) => void;
}

export const Product = memo((props: ProductProps) => {
  const {
    inFavs,
    className = '',
    product,
    onToggleItemInFavs,
    onBuyClick,
    onOpenExtendedProductInfo,
  } = props;
  const { t } = useTranslation('main');

  const onBuyClickHandler = useCallback(() => {
    onBuyClick?.(product);
  }, [onBuyClick, product]);

  const onToggleFavsClick = useCallback(() => {
    onToggleItemInFavs?.(product);
  }, [onToggleItemInFavs, product]);

  const onExtendedProductInfoClickHandler = useCallback(() => {
    onOpenExtendedProductInfo?.(product);
  }, [onOpenExtendedProductInfo, product]);

  return (
    <Card className={classNames(className, cls.Product)}>
      <div className={cls.additional_buttons}>
        <Button
          buttonTheme={'link'}
          className={cls.add_to_favs_button}
        >
          <EyeSVG onClick={onExtendedProductInfoClickHandler} />
        </Button>
        <Button
          buttonTheme={'link'}
          onClick={onToggleFavsClick}
          className={cls.add_to_favs_button}
        >
          <FilledHeartSVG
            className={classNames(cls.favs_icon, {
              [cls.favs_icon_active]: inFavs,
            })}
          />
        </Button>
      </div>
      <img
        className={cls.image}
        src={product?.img}
        alt={product?.title}
      />
      <div className={cls.info}>
        <div className={cls.heading}>
          <h2 className={cls.title}>{product?.title}</h2>
          <div className={cls.price_container}>
            <Price className={cls.price} price={product?.price} />
            {product?.old_price && (
              <Price
                className={cls.old_price}
                price={product?.old_price}
              />
            )}
          </div>
        </div>
        <div className={cls.footer}>
          <Rating rate={product.rate} />
          <div className={cls.footer_buttons}>
            <Button
              buttonTheme={'link'}
              className={cls.button}
              onClick={onBuyClickHandler}
            >
              {t('Купить')}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
});
