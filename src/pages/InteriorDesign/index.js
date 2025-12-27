import React from 'react'
import Layout from '../../components/Layout'
import Grid from '@mui/material/Grid';
import CategoryCard from '../../components/CategoryCard';
import './design-idea.scss'
import { INTERIOR_DATAS } from '../../utils/data';
import FormComponent from '../../components/Form';

const InteriorDesign = () => {
  const INTERIOR_DATA = INTERIOR_DATAS();
  return (
    <Layout>
      <div className="design-idea">
        <FormComponent/>
        <div className='hero-image'>
          <div className='blank'></div>
        </div>
        <h1 className='heading'>{INTERIOR_DATA.HEADING}​</h1>
        <p className='small-heading'>{INTERIOR_DATA.SUB_HEADING}</p>
        <Grid container rowGap={1}>
          {
            INTERIOR_DATA.INTERIOR_DATA_CARD_DATA.map((data, index) => {
              return (
                <CategoryCard
                  key={data.id}
                  id={data.id}
                  category={data.category}
                  logoPath={data.logoPath}
                  text={data.text}
                  buttonText={data.buttonText}
                  isDesignIdea={true}
                />
              )
            })
          }
        </Grid>
      </div>
    </Layout>
  )
}

export default InteriorDesign