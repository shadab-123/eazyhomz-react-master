import React from 'react';
import style from './comingSoon.module.scss';
import { useTranslation } from 'react-i18next';

const ComingSoon = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className={style.comingSoonContainer}>
      <div className={style.content}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.message}>{t('COMING_SOON_MESSAGE') || 'Coming Soon'}</p>
        <div className={style.animationContainer}>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
