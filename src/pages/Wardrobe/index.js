import React from 'react'
import Layout from '../../components/Layout'
import Grid from '@mui/material/Grid';
import CategoryCard from '../../components/CategoryCard';
import './wardrobe.scss'
import { WARDROBE_DATAS } from '../../utils/data';
import FormComponent from '../../components/Form';

const Wardrobe = () => {
  const WARDROBE_DATA = WARDROBE_DATAS();
  return (
    <Layout>
      <div className="category-container wardrobe">
        <FormComponent />
        <div className='hero-image'>
          <div className='blank'></div>
        </div>
        <h1 className='heading'>{WARDROBE_DATA.HEADING}​</h1>
        <p className='small-heading'>{WARDROBE_DATA.SUB_HEADING}</p>
        <Grid container rowGap={1}>
          {
            WARDROBE_DATA.WARDROBE_CARD_DATA.map((data, index) => {
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

export default Wardrobe