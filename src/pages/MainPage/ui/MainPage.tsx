import React from 'react';

interface MainPageProps {
  className?: string;
}

export const MainPage = (props: MainPageProps) => {
  const { className = '' } = props;
  return <div className={className}></div>;
};
