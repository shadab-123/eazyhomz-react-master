import React from 'react'
import Layout from '../../components/Layout'
import Grid from '@mui/material/Grid';
import CategoryCard from '../../components/CategoryCard';
import './kids_room.scss'
import { KIDS_ROOM_DATAS } from '../../utils/data';
import FormComponent from '../../components/Form';

const KIDSROOM = () => {
  const KIDS_ROOM_DATA = KIDS_ROOM_DATAS();
  return (
    <Layout>
         <div className="category-container kids-room">
        <FormComponent/>
        <div className='hero-image'>
          <div className='blank'></div>
        </div>
        <h1 className='heading'>{KIDS_ROOM_DATA.HEADING}​</h1>
        <p className='small-heading'>{KIDS_ROOM_DATA.SUB_HEADING}</p>
        <Grid container rowGap={1}>
          {
            KIDS_ROOM_DATA.KIDS_ROOM_CARD_DATA.map((data, index) => {
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

export default KIDSROOM