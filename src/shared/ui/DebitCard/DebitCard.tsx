import React, { memo, useCallback } from 'react';
import cls from './DebitCard.module.css';
import classNames from 'classnames';
import InputMask from 'react-input-mask';
import inputCls from '../Input/Input.module.css';

interface DebitCardProps {
  className?: string;
  cvv?: string;
  date?: string;
  number?: string;
  onChangeCardNumber?: (number: string) => void;
  onChangeCardCVV?: (cvv: string) => void;
  onChangeCardDate?: (date: string) => void;
}

export const DebitCard = memo((props: DebitCardProps) => {
  const {
    className = '',
    cvv,
    onChangeCardCVV,
    onChangeCardDate,
    onChangeCardNumber,
    number,
    date,
  } = props;

  const onChangeNumberHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeCardNumber?.(event.target.value);
    },
    [onChangeCardNumber],
  );

  const onChangeCardCVVHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeCardCVV?.(event.target.value);
    },
    [onChangeCardCVV],
  );

  const onChangeCardDateHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeCardDate?.(event.target.value);
    },
    [onChangeCardDate],
  );

  return (
    <div className={classNames(cls.DebitCard, className)}>
      <InputMask
        className={classNames(inputCls.Input, cls.Input, cls.number)}
        value={number}
        alwaysShowMask={true}
        mask={'9999-9999-9999-9999'}
        onChange={onChangeNumberHandler}
      />
      <div className={cls.footer}>
        <InputMask
          className={classNames(inputCls.Input, cls.Input, cls.cvv)}
          value={cvv}
          mask={'999'}
          maskChar={null}
          type={'password'}
          onChange={onChangeCardCVVHandler}
        />
        <InputMask
          className={classNames(inputCls.Input, cls.Input, cls.date)}
          value={date}
          alwaysShowMask={true}
          mask={'99/99'}
          onChange={onChangeCardDateHandler}
        />
      </div>
    </div>
  );
});
