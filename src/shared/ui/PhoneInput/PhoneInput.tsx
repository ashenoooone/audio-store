import React, { HTMLAttributes, memo } from 'react';
import InputMask from 'react-input-mask';
import cls from '../Input/Input.module.css';

interface PhoneInputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const PhoneInput = memo((props: PhoneInputProps) => {
  const { className = '', ...rest } = props;
  return (
    <InputMask
      className={cls.Input}
      mask="+7(999)-999-99-99"
      {...rest}
    />
  );
});
