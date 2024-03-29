import React, { ReactNode } from 'react';
import cls from './Card.module.css';
import classNames from 'classnames';
interface CardProps {
  className?: string;
  children?: ReactNode;
}

export const Card = (props: CardProps) => {
  const { className = '', children } = props;
  return <div className={classNames(cls.Card, className)}>{children}</div>;
};
