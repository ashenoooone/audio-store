import React, { useCallback } from 'react';
import { Logo } from '~/shared/ui/Logo';
import cls from './Footer.module.css';
import classNames from 'classnames';
import { Link } from '~/shared/ui/Link';
import { RoutesPaths } from '~/shared/configs/routerConfig/routerConfig.tsx';
import { useTranslation } from 'react-i18next';
import { Button } from '~/shared/ui/Button';
import { PlanetSVG } from '~/shared/assets/PlanetSVG.tsx';
import { VKSVG } from '~/shared/assets/VKSVG.tsx';
import { TelegramSVG } from '~/shared/assets/TelegramSVG.tsx';
import { WhatsappSVG } from '~/shared/assets/WhatsappSVG.tsx';

interface FooterProps {
  className?: string;
}

export const Footer = (props: FooterProps) => {
  const { className = '' } = props;

  const { t, i18n } = useTranslation();

  const setEngLanguage = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      await i18n.changeLanguage('en-US');
    },
    [i18n],
  );

  const setRusLanguage = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      await i18n.changeLanguage('ru');
    },
    [i18n],
  );

  return (
    <div className={classNames(className, cls.Footer)}>
      <Logo />
      <div className={cls.links}>
        <Link to={RoutesPaths.cart}>{t('Избранное')}</Link>
        <Link to={RoutesPaths.cart}>{t('Корзина')}</Link>
        <Link to={RoutesPaths.cart}>{t('Контакты')}</Link>
      </div>
      <div className={cls.languages}>
        <Link to={RoutesPaths.cart}>{t('Условия сервиса')}</Link>
        <div className={cls.lang_toggler_container}>
          <PlanetSVG />
          <Button
            className={
              i18n.language === 'ru' ? cls.active_language : ''
            }
            onClick={setRusLanguage}
          >
            Рус
          </Button>
          <Button
            className={
              i18n.language === 'en-US' ? cls.active_language : ''
            }
            onClick={setEngLanguage}
          >
            Eng
          </Button>
        </div>
      </div>
      <div className={cls.social_networks}>
        <Link to={'https://vk.com/neoflex_ru'} target={'_blank'}>
          <VKSVG />
        </Link>
        <Link to={'https://t.me/ashenoooone'} target={'_blank'}>
          <TelegramSVG />
        </Link>
        <Link to={'tel:79999999999'} target={'_blank'}>
          <WhatsappSVG />
        </Link>
      </div>
    </div>
  );
};
