import React, { useCallback } from 'react';
import { ProductType } from '../../model/types.ts';
import cls from './Product.module.css';
import classNames from 'classnames';
import { StarSVG } from '~/shared/assets/StarSVG.tsx';
import { Card } from '~/shared/ui/Card';
import { Button } from '~/shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface ProductProps {
  className?: string;
  product: ProductType;
  onBuyClick?: (product: ProductType) => void;
}

export const Product = (props: ProductProps) => {
  const { className = '', product, onBuyClick } = props;

  const { t } = useTranslation('main');

  const onBuyClickHandler = useCallback(() => {
    onBuyClick?.(product);
  }, [onBuyClick, product]);

  return (
    <Card className={classNames(className, cls.Product)}>
      <img
        className={cls.image}
        src={product?.img}
        alt={product?.title}
      />
      <div className={cls.info}>
        <div className={cls.heading}>
          <h2 className={cls.title}>{product?.title}</h2>
          <div className={cls.price_container}>
            <p className={cls.price}>{product?.price}&nbsp;₽</p>
            {product?.old_price && (
              <p className={cls.old_price}>
                {product?.old_price}&nbsp;₽
              </p>
            )}
          </div>
        </div>
        <div className={cls.footer}>
          <div className={cls.rating}>
            <StarSVG />
            {product?.rate}
          </div>
          <Button className={cls.button} onClick={onBuyClickHandler}>
            {t('Купить')}
          </Button>
        </div>
      </div>
    </Card>
  );
};
