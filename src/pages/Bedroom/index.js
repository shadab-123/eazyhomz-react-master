import React from 'react'
import Layout from '../../components/Layout'
import Grid from '@mui/material/Grid';
import CategoryCard from '../../components/CategoryCard';
import './bedroom.scss'
import { BEDROOM_DATAS } from '../../utils/data';
import FormComponent from '../../components/Form';

const Bedroom = () => {
  const BEDROOM_DATA = BEDROOM_DATAS();
  return (
    <Layout>
      <div className="category-container bedroom">
        <FormComponent/>
        <div className='hero-image'>
          <div className='blank'></div>
        </div>
        <h1 className='heading'>{BEDROOM_DATA.HEADING}​</h1>
        <p className='small-heading'>{BEDROOM_DATA.SUB_HEADING}</p>
        <Grid container rowGap={1}>
          {
            BEDROOM_DATA.BEDROOM_CARD_DATA.map((data, index) => {
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

export default Bedroom