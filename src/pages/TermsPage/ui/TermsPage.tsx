import React, { memo } from 'react';
import cls from './TermsPage.module.css';
import { useTranslation } from 'react-i18next';
import { Page } from '~/shared/ui/Page';
export const TermsPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page className={cls.container}>
      <h1 className={cls.title}>{t('Условия сервиса')}</h1>
      <div className={cls.paragraph}>
        <p>
          {t(
            'Добро пожаловать на сайт продажи наушников. Ниже приведены условия использования нашего сервиса.',
          )}
        </p>
      </div>
      <div className={cls.paragraph}>
        <h2>{t('Пользовательское соглашение')}</h2>
        <p>
          {t(
            'Вам запрещается использовать наш сервис для каких-либо незаконных целей или нарушения законов вашей юрисдикции.',
          )}
        </p>
      </div>
      <div className={cls.paragraph}>
        <h2>{t('Ограничения')}</h2>
        <p>
          {t(
            'Вам запрещается использовать наш сервис для каких-либо незаконных целей или нарушения законов вашей юрисдикции.',
          )}
        </p>
      </div>
      <div className={cls.paragraph}>
        <h2>{t('Изменения условий')}</h2>
        <p>
          {t(
            'Мы оставляем за собой право изменять эти условия в любое время по своему усмотрению. Поэтому регулярно проверяйте эту страницу.',
          )}
        </p>
      </div>
      <div className={cls.paragraph}>
        <h2>{t('Контакты')}</h2>
        <p>
          {t(
            'Если у вас возникли вопросы или предложения относительно наших условий использования, свяжитесь с нами по адресу support@example.com.',
          )}
        </p>
      </div>
    </Page>
  );
});
