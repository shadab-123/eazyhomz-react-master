import React from 'react'
import Layout from '../../components/Layout'
import Grid from '@mui/material/Grid';
import CategoryCard from '../../components/CategoryCard';
import './living-area.scss'
import { LIVING_AREA_DATAS } from '../../utils/data';
import FormComponent from '../../components/Form';

const LivingArea = () => {
  const LIVING_AREA_DATA = LIVING_AREA_DATAS();
  return (
    <Layout>
         <div className="category-container living-area">
        <FormComponent/>
        <div className='hero-image'>
          <div className='blank'></div>
        </div>
        <h1 className='heading'>{LIVING_AREA_DATA.HEADING}​</h1>
        <p className='small-heading'>{LIVING_AREA_DATA.SUB_HEADING}</p>
        <Grid container rowGap={1}>
          {
            LIVING_AREA_DATA.LIVING_AREA_CARD_DATA.map((data, index) => {
              return (
                <CategoryCard
                  key={data.id}
                  id={data.id}
                  category={data.category}
                  logoPath={data.logoPath}
                  text={data.text}
                  buttonText={data.buttonText}
                />
              )
            })
          }
        </Grid>
      </div>
    </Layout>
  )
}

export default LivingArea