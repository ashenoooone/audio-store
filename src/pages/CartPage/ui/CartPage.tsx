import React from 'react';
import { Page } from '~/shared/ui/Page';

interface CartPageProps {
  className?: string;
}

export const CartPage = (props: CartPageProps) => {
  const { className = '' } = props;
  return <Page className={className}></Page>;
};
