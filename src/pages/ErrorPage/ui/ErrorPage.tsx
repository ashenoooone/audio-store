import React from 'react';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = (props: ErrorPageProps) => {
  const { className = '' } = props;
  return <div className={className}></div>;
};
