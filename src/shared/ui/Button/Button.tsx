import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Button.module.css';

type ButtonTheme = 'default' | 'link';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  buttonTheme?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
  const {
    className = '',
    children,
    buttonTheme = 'default',
    type = 'button',
    ...rest
  } = props;

  return (
    <button
      className={classNames(className, cls.Button, cls[buttonTheme])}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
