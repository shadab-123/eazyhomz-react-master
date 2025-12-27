import React from 'react'
import Layout from '../../components/Layout'
import Grid from '@mui/material/Grid';
import CategoryCard from '../../components/CategoryCard';
import './tv-unit.scss'
import { TV_UNIT_DATAS } from '../../utils/data';
import FormComponent from '../../components/Form';

const TvUnit = () => {
  const TV_UNIT_DATA = TV_UNIT_DATAS();
  return (
    <Layout>
         <div className="category-container tv-unit">
        <FormComponent/>
        <div className='hero-image'>
          <div className='blank'></div>
        </div>
        <h1 className='heading'>{TV_UNIT_DATA.HEADING}​</h1>
        <p className='small-heading'>{TV_UNIT_DATA.SUB_HEADING}</p>
        <Grid container rowGap={1}>
          {
            TV_UNIT_DATA.TV_UNIT_CARD_DATA.map((data, index) => {
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

export default TvUnit