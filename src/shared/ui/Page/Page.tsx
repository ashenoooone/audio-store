import React, { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Page.module.css';

interface PageProps {
  className?: string;
  children?: ReactNode;
}

export const Page = (props: PageProps) => {
  const { className = '', children } = props;
  return (
    <div className={classNames(className, cls.Page)}>{children}</div>
  );
};
