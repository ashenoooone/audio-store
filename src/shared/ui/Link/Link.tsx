import React, { ReactNode } from 'react';
import { Link as RLink, NavLinkProps } from 'react-router-dom';
import classNames from 'classnames';
import cls from './Link.module.css';

interface LinkProps extends NavLinkProps {
  className?: string;
  children?: ReactNode;
  to: string;
}

export const Link = (props: LinkProps) => {
  const { className = '', children, to } = props;
  return (
    <RLink to={to} className={classNames(className, cls.Link)}>
      {children}
    </RLink>
  );
};
