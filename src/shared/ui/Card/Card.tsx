import React, { HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.css';
import classNames from 'classnames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export const Card = (props: CardProps) => {
  const { className = '', children, ...rest } = props;
  return (
    <div className={classNames(cls.Card, className)} {...rest}>
      {children}
    </div>
  );
};
