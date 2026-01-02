import React from 'react'
import Layout from '../../components/Layout'
import Grid from '@mui/material/Grid';
import CategoryCard from '../../components/CategoryCard';
import './landscape.scss'
import { LANDSCAPE_DATAS } from '../../utils/data';
//import FormComponent from '../../components/Form';

const Landscape = () => {
  const LANDSCAPE_DATA = LANDSCAPE_DATAS();
  return (
    <Layout>
      <div className="landscape">
        {/* <FormComponent/> */}
        <div className='hero-image'>
          <div className='blank'></div>
        </div>
        <h1 className='heading'>{LANDSCAPE_DATA.HEADING}</h1>
        <p className='small-heading'>{LANDSCAPE_DATA.SUB_HEADING}</p>
        <Grid container rowGap={1}>
          {
            LANDSCAPE_DATA.LANDSCAPE_DATA_CARD_DATA.map((data, index) => {
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

export default Landscape