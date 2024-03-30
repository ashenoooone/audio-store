import React, { HTMLAttributes, memo } from 'react';
import classNames from 'classnames';
import cls from './Badge.module.css';

type Positions = 'top_right';
interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  position?: Positions;
  value: number | string;
}

export const Badge = memo((props: BadgeProps) => {
  const {
    className = '',
    value,
    position = 'top_right',
    ...rest
  } = props;

  const classes = classNames(cls.Badge, {
    [cls.not_circle]: typeof value === 'string' || value > 9,
  });

  return (
    <div className={classes} {...rest}>
      {value}
    </div>
  );
});
