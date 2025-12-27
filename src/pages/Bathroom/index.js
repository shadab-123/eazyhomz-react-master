import React from 'react'
import Layout from '../../components/Layout'
import Grid from '@mui/material/Grid';
import CategoryCard from '../../components/CategoryCard';
import './bathroom.scss'
import { BATHROOM_DATAS } from '../../utils/data';
import FormComponent from '../../components/Form';

const Bathroom = () => {
  const BATHROOM_DATA = BATHROOM_DATAS();
  return (
    <Layout>
      <div className="category-container bathroom">
        <FormComponent/>
        <div className='hero-image'>
          <div className='blank'></div>
        </div>
        <h1 className='heading'>{BATHROOM_DATA.HEADING}​</h1>
        <p className='small-heading'>{BATHROOM_DATA.SUB_HEADING}</p>
        <Grid container rowGap={1}>
          {
            BATHROOM_DATA.BATHROOM_CARD_DATA.map((data, index) => {
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

export default Bathroom