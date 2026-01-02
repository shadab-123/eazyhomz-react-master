import React from 'react'
import Layout from '../../components/Layout'
import Grid from '@mui/material/Grid';
import CategoryCard from '../../components/CategoryCard';
import './architecture.scss'
import { ARCHITECTURE_DATAS } from '../../utils/data';
//import FormComponent from '../../components/Form';

const Architecture = () => {
  const ARCHITECTURE_DATA = ARCHITECTURE_DATAS();
  return (
    <Layout>
      <div className="architecture">
        {/* <FormComponent/> */}
        <div className='hero-image'>
          <div className='blank'></div>
        </div>
        <h1 className='heading'>{ARCHITECTURE_DATA.HEADING}</h1>
        <p className='small-heading'>{ARCHITECTURE_DATA.SUB_HEADING}</p>
        <Grid container rowGap={1}>
          {
            ARCHITECTURE_DATA.ARCHITECTURE_DATA_CARD_DATA.map((data, index) => {
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

export default Architecture