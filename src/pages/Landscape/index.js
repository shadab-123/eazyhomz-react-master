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
      <img src='/assets/coming-soon-1.jpg' style={{width:'100%',height:'100%'}}/>
    </Layout>
  )
}

export default Landscape