import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '~/shared/ui/Button';
import cls from './ErrorPage.module.css';
import { Page } from '~/shared/ui/Page';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = (props: ErrorPageProps) => {
  const { className = '' } = props;
  const navigate = useNavigate();
  const { t } = useTranslation('404');

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Page className={cls.ErrorPage}>
      <div className={cls.wrapper}>
        <h1 className={cls.title}>
          {t('404 - Страница не найдена')}
        </h1>
        <p className={cls.subtitle}>
          {t('Кажется, вы попали на несуществующую страницу.')}
        </p>
        <Button className={cls.button} onClick={goBack}>
          {t('Вернуться назад')}
        </Button>
      </div>
    </Page>
  );
};
