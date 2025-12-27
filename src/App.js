import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutePages from './routes';
import { useTranslation } from 'react-i18next';
function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.body.classList.toggle('rtl', i18n.language === 'ar');
    document.body.classList.toggle('ltr', i18n.language !== 'ar');
  }, [i18n.language]);

  return (
    <BrowserRouter basename="/" >
      <AppRoutePages />
    </BrowserRouter>
  );
}

export default App;
