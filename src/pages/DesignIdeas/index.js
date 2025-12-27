import React from 'react'
import Layout from '../../components/Layout'
import Grid from '@mui/material/Grid';
import CategoryCard from '../../components/CategoryCard';
import './design-idea.scss'
import { DESIGN_IDEAS_DATAS } from '../../utils/data';
import FormComponent from '../../components/Form';

const DesignIdeas = () => {
  const DESIGN_IDEAS_DATA = DESIGN_IDEAS_DATAS();
  return (
    <Layout>
      <div className="design-idea">
        <FormComponent/>
        <div className='hero-image'>
          <div className='blank'></div>
        </div>
        <h1 className='heading'>{DESIGN_IDEAS_DATA.HEADING}​</h1>
        <p className='small-heading'>{DESIGN_IDEAS_DATA.SUB_HEADING}</p>
        <Grid container rowGap={1}>
          {
            DESIGN_IDEAS_DATA.DESIGN_IDEAS_CARD_DATA.map((data, index) => {
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

export default DesignIdeas