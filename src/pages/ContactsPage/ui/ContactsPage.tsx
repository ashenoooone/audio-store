import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ContactsPage.module.css';
import { Page } from '~/shared/ui/Page';

export const ContactsPage: React.FC = memo(() => {
  const { t } = useTranslation();

  return (
    <Page className={cls.container}>
      <h1 className={cls.title}>{t('Контакты')}</h1>
      <div className={cls.paragraph}>
        <p>{t('Вы можете связаться с нами следующими способами:')}</p>
      </div>
      <div className={cls.contactItem}>
        <h2>{t('GitHub')}</h2>
        <p>
          <a
            href="https://github.com/ashenoooone?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ashenoooone
          </a>
        </p>
      </div>
      <div className={cls.contactItem}>
        <h2>{t('Telegram')}</h2>
        <p>
          <a
            href="https://t.me/ashenoooone"
            target="_blank"
            rel="noopener noreferrer"
          >
            t.me/ashenoooone
          </a>
        </p>
      </div>
    </Page>
  );
});
