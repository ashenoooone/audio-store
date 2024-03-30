import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Button.module.css';

type ButtonTheme = 'default' | 'link';
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  buttonTheme?: ButtonTheme;
  circle?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className = '',
    children,
    buttonTheme = 'default',
    type = 'button',
    circle = false,
    ...rest
  } = props;

  return (
    <button
      className={classNames(className, cls.Button, cls[buttonTheme], {
        [cls.circle]: circle,
      })}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
});
