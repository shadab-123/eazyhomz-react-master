import React, { useState } from 'react';
import Slider from "react-slick";
import './bathroom_details.scss';
import Layout from '../../../components/Layout';
import { BATHROOM_DATAS } from '../../../utils/data';
import ButtonComponent from '../../../components/Button';
import { useTranslation } from 'react-i18next';
import FormComponent from '../../../components/Form';
import CloseIcon from '@mui/icons-material/Close';

const BathroomDetails = () => {
  const BATHROOM_DATA = BATHROOM_DATAS();
  const { t } = useTranslation();
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    initialSlide: JSON.parse(localStorage.getItem('initialSlide')) - 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
          initialSlide: JSON.parse(localStorage.getItem('initialSlide')) - 1,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
          initialSlide: JSON.parse(localStorage.getItem('initialSlide')) - 1,
          cssEase: "linear",
        }
      },
    ]
  };

  const [showForm, setShowForm] = useState(false)
  const handleBookClick = () => {
    setShowForm(!showForm)
  }

  return (
    <Layout>
      <div className="category-details-container">
        <div className="details-right">
          <Slider {...settings}>
            {BATHROOM_DATA.BATHROOM_CARD_DATA.map((obj, i) => {
              return (
                <div key={`bedroom_slider_${i}`} className="slider-child">
                  <img src={obj.logoPath} alt={`Bedroom ${i}`} className="home-img" loading='lazy'/>
                </div>
              );
            })}
          </Slider>
        </div>
        {
          !showForm ?
            <div className="details-left">
              <div className="details-left-upper">
                <h1>{t('BATHROOM_DESIGN_DETAILS_DATA.HEADING')}</h1>
                <p>{t('BATHROOM_DESIGN_DETAILS_DATA.SUB_HEADING')}</p>
              </div>
              <div className="stats">
                {t('DASHBOARD_DATA.WHY_US.WHY_US_CARD_DATA', { returnObjects: true }).map((data, index) => {
                  return (
                    <div key={`why_us_card_${index}`} className="details-why-us-card-box">
                      <img src={data.logoPath} alt={`Why us ${index}`} loading='lazy'/>
                      <p className='text'>{data.text}</p>
                    </div>
                  );
                })}
              </div>
              <ButtonComponent onClick={handleBookClick} text={t('BOOK_FREE_SESSIONS')} />
            </div> : <>
              <div className='form-with-icon'>
                <CloseIcon className='cross-btn' onClick={handleBookClick} />
                <FormComponent />
              </div>
            </>
        }
      </div>
    </Layout>
  );
}

export default BathroomDetails;
