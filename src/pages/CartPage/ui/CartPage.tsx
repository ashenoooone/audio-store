import React from 'react';

interface CartPageProps {
  className?: string;
}

export const CartPage = (props: CartPageProps) => {
  const { className = '' } = props;
  return <div className={className}></div>;
};
