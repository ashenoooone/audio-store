import React, { memo } from 'react';
import { ProductType } from '~/entities/product';
import cls from './ProductList.module.css';
import { Product } from '../Product/Product';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

interface ProductListProps {
  className?: string;
  products: ProductType[];
  title?: string;
  favsList?: ProductType[];
  onBuyClick?: (product: ProductType) => void;
  onOpenExtendedProductInfo?: (product: ProductType) => void;
  onToggleItemInFavs?: (product: ProductType) => void;
}

export const ProductList = memo((props: ProductListProps) => {
  const {
    className = '',
    onToggleItemInFavs,
    title,
    onBuyClick,
    products,
    favsList,
    onOpenExtendedProductInfo,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(className, cls.ProductList)}>
      {title && <h2 className={cls.title}>{title}</h2>}
      <div className={cls.list}>
        {products.length > 0 ? (
          products.map((p) => (
            <Product
              onOpenExtendedProductInfo={onOpenExtendedProductInfo}
              inFavs={Boolean(
                favsList?.find((item) => item.title === p.title),
              )}
              onBuyClick={onBuyClick}
              key={p.title}
              product={p}
              onToggleItemInFavs={onToggleItemInFavs}
            />
          ))
        ) : (
          <p>{t('Пусто')}</p>
        )}
      </div>
    </div>
  );
});
