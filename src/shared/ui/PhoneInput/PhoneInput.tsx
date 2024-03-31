import React, { InputHTMLAttributes, memo, useCallback } from 'react';
import InputMask from 'react-input-mask';
import cls from '../Input/Input.module.css';

interface PhoneInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  onChange?: (val: string) => void;
}

export const PhoneInput = memo((props: PhoneInputProps) => {
  const { className = '', onChange, ...rest } = props;

  const onChangePhoneInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    },
    [onChange],
  );

  return (
    <InputMask
      className={cls.Input}
      mask="+7(999)-999-99-99"
      {...rest}
      onChange={onChangePhoneInput}
    />
  );
});
