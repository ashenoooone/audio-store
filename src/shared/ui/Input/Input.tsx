import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.css';
import classNames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = memo((props: InputProps) => {
  const { className = '', ...rest } = props;
  return (
    <input className={classNames(className, cls.Input)} {...rest} />
  );
});
