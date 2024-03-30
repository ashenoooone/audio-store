import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './Rating.module.css';
import { StarSVG } from '~/shared/assets/StarSVG.tsx';

interface RatingProps {
  className?: string;
  rate: number;
}

export const Rating = memo((props: RatingProps) => {
  const { className = '', rate } = props;
  return (
    <div className={classNames(className, cls.rating)}>
      <StarSVG />
      {rate}
    </div>
  );
});
