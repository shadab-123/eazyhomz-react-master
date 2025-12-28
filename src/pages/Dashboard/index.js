import React, { useState } from 'react'
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

const Dashboard = () => {
  const { t } = useTranslation();
  const [openFormModal, setOpenFormModal] = useState(false)
  const cardData = t('DASHBOARD_DATA.INTERIOR_NEEDS.CARD_SLIDER_DATA', { returnObjects: true });
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
              <h1>hello testing 1</h1>
              <h1>{t('DASHBOARD_DATA.HERO_SECTION.HEADING1')}</h1>
              <h1>{t('DASHBOARD_DATA.HERO_SECTION.HEADING2')}</h1>
              <h1>{t('DASHBOARD_DATA.HERO_SECTION.HEADING3')}</h1>
            </div>
          </div>
          <div className='hero-image-form'>
            <div className='esimation-form'>
              <FormComponent />
            </div>
          </div>
        </div>
        <div className="estimationContainer">
          <div className='tab-mobile-view-only text-center'><ButtonComponent text={"Get Free Estimate"} onClick={handleModalFormOpen} /></div>
          <div className='why-us'>
            <h1 className='text-center'>{t('DASHBOARD_DATA.WHY_US.HEADING')}</h1>
            <div className='why-us-card'>
              <Grid classNam="grid" container spacing={1}>
                {
                  t('DASHBOARD_DATA.WHY_US.WHY_US_CARD_DATA', { returnObjects: true }).map((data) => {
                    return (
                      <WhyUsCard
                        key={data.id}
                        logoPath={data.logoPath}
                        text={data.text}
                      />
                    )
                  })
                }
              </Grid>
            </div>
          </div>
          <div className='home-design-made-easy'>
            <h1 className='text-center'>{t('DASHBOARD_DATA.HOME_DESIGN_DATA.HEADING')}</h1>
            {
              t('DASHBOARD_DATA.HOME_DESIGN_DATA.SUB_HEADING', {returnObjects: true}).map((data) => {
                return (
                  <p className='text-center sub-text'>{data}</p>
                )
              })
            }
            <div className='text-center'><ButtonComponent onClick={handleModalFormOpen} text={t('DASHBOARD_DATA.HOME_DESIGN_DATA.BUTTON_TEXT')} /></div>
          </div>
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
            <Grid sx={{ margin: "1rem" }} container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <ImageSlider imagePaths={DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_1.IMAGE_PATHS} heading={t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_1.IMAGE_SLIDER_HEADING')} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <ImageSlider imagePaths={DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_2.IMAGE_PATHS} heading={t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_2.IMAGE_SLIDER_HEADING')} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <ImageSlider imagePaths={DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_3.IMAGE_PATHS} heading={t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_3.IMAGE_SLIDER_HEADING')} />
              </Grid>
              {/* <Grid item xs={12} sm={12} md={12} lg={6}>
                <ImageSlider imagePaths={DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_4.IMAGE_PATHS} heading={t('DASHBOARD_DATA.DESIGN_INSPIRATION.IMAGE_SLIDER_DATA_4.IMAGE_SLIDER_HEADING')} />
              </Grid> */}
              <Grid item xs={12} sm={12} md={12} lg={6}>
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
          <div className='steps'>
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
          </div>
        </div>
      </div>
      {
        openFormModal && <DialogModal
          open={openFormModal}
          onClose={handleModalFormClose}
          title={" "}
          // width={width}
        >
          <FormComponent/>
        </DialogModal>
      }
    </Layout>
  )
}

export default Dashboard