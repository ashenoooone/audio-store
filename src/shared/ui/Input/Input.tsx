import React, { HTMLAttributes, memo } from 'react';
import cls from './Input.module.css';
import classNames from 'classnames';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = memo((props: InputProps) => {
  const { className = '', ...rest } = props;
  return (
    <input className={classNames(className, cls.Input)} {...rest} />
  );
});
