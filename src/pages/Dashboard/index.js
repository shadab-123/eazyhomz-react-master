import React, { useState, useRef, useEffect } from 'react'
import Layout from '../../components/Layout'
import './dashboard.scss'

import Grid from '@mui/material/Unstable_Grid2';
import EstimationCard from '../../components/EstimationCard'
import ButtonComponent from '../../components/Button';
import WhyUsCard from '../../components/WhyUsCard';
import ImageSlider from '../../components/ImageSlider';
import CardSlider from '../../components/CardSlider';
import StepCard from '../../components/StepsCard';

import { DASHBOARD_DATA } from '../../utils/data';
import { useTranslation } from 'react-i18next';
import FormComponent from '../../components/Form';
import DialogModal from '../../components/Modal';
import Testimonials from '../../components/Testimonials';

const Dashboard = () => {
  const { t } = useTranslation();
  const [openFormModal, setOpenFormModal] = useState(false)
  const cardData = Array.isArray(t('DASHBOARD_DATA.INTERIOR_NEEDS.CARD_SLIDER_DATA', { returnObjects: true })) 
    ? t('DASHBOARD_DATA.INTERIOR_NEEDS.CARD_SLIDER_DATA', { returnObjects: true }) 
    : [];
  // WHY US data (duplicate for seamless loop)
  const whyUsData = Array.isArray(t('DASHBOARD_DATA.WHY_US.WHY_US_CARD_DATA', { returnObjects: true }))
    ? t('DASHBOARD_DATA.WHY_US.WHY_US_CARD_DATA', { returnObjects: true })
    : [];
  const whyUsLoop = [...whyUsData, ...whyUsData]; // duplicate so animation can loop
  const whyUsTrackRef = useRef(null);

  useEffect(() => {
    const track = whyUsTrackRef.current;
    if (!track) return;
    const children = Array.from(track.children || []);
    const originalCount = Math.floor(children.length / 2) || children.length;
    let width = 0;
    for (let i = 0; i < originalCount; i++) {
      const el = children[i];
      const style = window.getComputedStyle(el);
      const marginRight = parseFloat(style.marginRight) || 0;
      width += el.offsetWidth + marginRight;
    }
    // set CSS vars used by SCSS animation
    track.style.setProperty('--scroll-width', `${width}px`);
    const speed = 80; // pixels per second
    const durationSec = Math.max(10, Math.round(width / speed));
    track.style.setProperty('--scroll-duration', `${durationSec}s`);
  }, [whyUsData.length]);
  const handleModalFormOpen = () => {
    setOpenFormModal(true)
  }
  const handleModalFormClose = () => {
    setOpenFormModal(false)
  }
  return (
    <Layout>
      <div className="container">

        <div className='hero-image'>
          <div className='hero-image-heading'>
            <div className='hero-heading'>
              <h1>Dream</h1>
              <h1>Design</h1> 
              <h1>Build</h1>
              {/* <p className="hero-subheading">{t('DASHBOARD_DATA.HERO_SECTION.SUBHEADING')}</p> */}
              {/* <ButtonComponent text={t("GET_FREE_ESTIMATE")} onClick={handleModalFormOpen} className="hero-cta-button" /> */}
            </div>
          </div>
          <a
            href="https://wa.me/971563163635"
            class="whatsapp-fixed"
            target="_blank"
            aria-label="Chat on WhatsApp"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
            />
          </a>

          <div className='hero-image-form'>
            <div className='esimation-form'>
              <FormComponent />
            </div>
          </div>
        </div>
        <div className="estimationContainer">
          <div className='tab-mobile-view-only text-center'><ButtonComponent className="simple-button" text={"Get Free Estimate"} onClick={handleModalFormOpen} /></div>
          <div className='why-us'>
            <h1 className='text-center'>{t('DASHBOARD_DATA.WHY_US.HEADING')}</h1>
            <div className='why-us-card' aria-hidden={whyUsData.length === 0 ? "true" : "false"}>
              <div className='why-us-track'>
                {whyUsLoop.map((data, idx) => (
                  <div className='why-us-card-wrapper' key={`${data.id || idx}-${idx}`}>
                    <WhyUsCard
                      logoPath={data.logoPath}
                      text={data.text}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className='home-design-made-easy'>
            <h1 className='text-center'>{t('DASHBOARD_DATA.HOME_DESIGN_DATA.HEADING')}</h1>
            {
              (Array.isArray(t('DASHBOARD_DATA.HOME_DESIGN_DATA.SUB_HEADING', {returnObjects: true})) 
                ? t('DASHBOARD_DATA.HOME_DESIGN_DATA.SUB_HEADING', {returnObjects: true}) 
                : []).map((data) => {
                return (
                  <p className='text-center sub-text'>{data}</p>
                )
              })
            }
            <div className='text-center'><ButtonComponent className="simple-button" onClick={handleModalFormOpen} text={t('DASHBOARD_DATA.HOME_DESIGN_DATA.BUTTON_TEXT')} /></div>
          </div> */}
          <div className='interior-needs'>
            <h1 className='text-center'>{t('DASHBOARD_DATA.INTERIOR_NEEDS.HEADING')}</h1>
            <p className='text-center sub-text'>{t('DASHBOARD_DATA.INTERIOR_NEEDS.SUB_HEADING')}</p>
            <div className='card-slider-container'>
              <CardSlider cardData={cardData} />
            </div>
          </div>

          <div className='design-areas-in-dashboard'>
            <h1 className='text-center'>{t('DASHBOARD_DATA.DESIGN_INSPIRATION.HEADING')}</h1>
            <p className='text-center sub-text'>{t('DASHBOARD_DATA.DESIGN_INSPIRATION.SUB_HEADING')}</p>
            <Grid sx={{ margin: "1rem" }} container spacing={4}>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <ImageSlider imagePaths={DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_1.IMAGE_PATHS} heading={t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_1.IMAGE_SLIDER_HEADING')} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <ImageSlider imagePaths={DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_2.IMAGE_PATHS} heading={t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_2.IMAGE_SLIDER_HEADING')} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <ImageSlider imagePaths={DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_3.IMAGE_PATHS} heading={t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_3.IMAGE_SLIDER_HEADING')} />
              </Grid>
              {/* <Grid item xs={12} sm={12} md={12} lg={6}>
                <ImageSlider imagePaths={DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_4.IMAGE_PATHS} heading={t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_4.IMAGE_SLIDER_HEADING')} />
              </Grid> */}
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <ImageSlider imagePaths={DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_5.IMAGE_PATHS} heading={t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_5.IMAGE_SLIDER_HEADING')} />
              </Grid>
              {/* <Grid item xs={12} sm={12} md={12} lg={6}>
                <ImageSlider imagePaths={DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_6.IMAGE_PATHS} heading={t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_6.IMAGE_SLIDER_HEADING')} />
              </Grid> */}
            </Grid>
          </div>

          <div className='estimation-section'>
            <h1 className='text-center'>{t('DASHBOARD_DATA.ESTIMATION_SECTION.HEADING')}</h1>
            <p className='text-center sub-text'>{t('DASHBOARD_DATA.ESTIMATION_SECTION.SUB_HEADING')}</p>

            <Grid sx={{ margin: "1rem" }} container spacing={2}>
              {
                t('DASHBOARD_DATA.ESTIMATION_SECTION.ESTIMATION_DATA', { returnObjects: true }).map((data, index) => {
                  return (
                    <EstimationCard
                      key={index}
                      heading={data.heading}
                      logoPath={data.logoPath}
                      text={data.text}
                      buttonText={data.buttonText}
                      buttonClickEvent={handleModalFormOpen}
                    />
                  )
                })
              }
            </Grid>
          </div>

          {/* <div className='steps'>
            <h1 className='text-center steps-heading'>{t('DASHBOARD_DATA.STEPS_SECTION.HEADING')}</h1>
            <p className='text-center sub-text'>{t('DASHBOARD_DATA.STEPS_SECTION.SUB_HEADING')}</p>
            <div className='step-cards'>
              {
                t('DASHBOARD_DATA.STEPS_SECTION.STEP_CARDS', { returnObjects: true }).map((data, index) => {
                  return (
                    <StepCard
                      key={data.id}
                      id={data.id}
                      logoPath={data.image}
                      heading={data.heading}
                      subHeading={data.subHeading}
                    />
                  )
                })
              }
            </div>
          </div> */}
        </div>
        <Testimonials />
      </div>
      {
        openFormModal && <DialogModal
          open={openFormModal}
          onClose={handleModalFormClose}
          title={" "}
          // width={width}
        >
          <div className='esimation-form'>
            <FormComponent/>
          </div>
        </DialogModal>
      }
    </Layout>
  )
}

export default Dashboard