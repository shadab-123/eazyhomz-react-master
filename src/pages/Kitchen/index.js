import React from 'react'
import Layout from '../../components/Layout'
import Grid from '@mui/material/Grid';
import CategoryCard from '../../components/CategoryCard';
import './kitchen.scss'
import { KITCHEN_DATAS } from '../../utils/data';
import FormComponent from '../../components/Form';

const Kitchen = () => {
  const KITCHEN_DATA = KITCHEN_DATAS();
  return (
    <Layout>
         <div className="category-container kitchen-area">
        <FormComponent/>
        <div className='hero-image'>
          <div className='blank'></div>
        </div>
        <h1 className='heading'>{KITCHEN_DATA.HEADING}​</h1>
        <p className='small-heading'>{KITCHEN_DATA.SUB_HEADING}</p>
        <Grid container rowGap={1}>
          {
            KITCHEN_DATA.KITCHEN_CARD_DATA.map((data, index) => {
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

export default Kitchen