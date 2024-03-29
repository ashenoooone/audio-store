import React from 'react';
import { Page } from '~/shared/ui/Page';
import { ProductType } from '~/entities/product';
import image_1 from '~/shared/assets/mock/1.png';
import image_2 from '~/shared/assets/mock/2.png';
import image_3 from '~/shared/assets/mock/3.png';
import image_4 from '~/shared/assets/mock/4.png';
import image_5 from '~/shared/assets/mock/5.png';
import image_6 from '~/shared/assets/mock/6.png';
import { ProductSections } from '~/widgets/ProductSections';

interface MainPageProps {
  className?: string;
}

type MockItemsType = {
  Наушники: ProductType[];
  'Беспроводные наушники': ProductType[];
};

const items: MockItemsType = {
  Наушники: [
    {
      img: image_1,
      title: 'Apple AirPods Pro',
      price: 249,
      rate: 4.8,
      old_price: 300,
    },
    {
      img: image_2,
      title: 'Apple AirPods Max',
      price: 549,
      rate: 4.7,
    },
    {
      img: image_3,
      title: 'Apple AirPods (3rd generation)',
      price: 179,
      rate: 4.6,
    },
    {
      img: image_1,
      title: 'Apple AirPods (2nd generation)',
      price: 129,
      rate: 4.5,
    },
    {
      img: image_2,
      title: 'Apple AirPods Pro (Refurbished)',
      price: 199,
      rate: 4.6,
    },
    {
      img: image_3,
      title: 'Apple AirPods Max (Refurbished)',
      price: 479,
      rate: 4.4,
    },
  ],
  'Беспроводные наушники': [
    {
      img: image_4,
      title: 'Apple AirPods (2nd generation)',
      price: 129,
      rate: 4.5,
    },
    {
      img: image_5,
      title: 'Apple AirPods Pro',
      price: 249,
      rate: 4.8,
    },
    {
      img: image_6,
      title: 'Apple AirPods Max',
      price: 549,
      rate: 4.7,
    },
  ],
};

export const MainPage = (props: MainPageProps) => {
  const { className = '' } = props;
  return (
    <Page className={className}>
      <ProductSections sections={items} />
    </Page>
  );
};
