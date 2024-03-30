import React from 'react';
import cls from './Logo.module.css';
import classNames from 'classnames';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo = (props: LogoProps) => {
  const { className = '', onClick } = props;
  return (
    <h1
      onClick={onClick}
      className={classNames(cls.Logo, className, {
        [cls.clickable]: onClick !== undefined,
      })}
    >
      QPICK
    </h1>
  );
};
