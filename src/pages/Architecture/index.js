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
      <img src='/assets/coming-soon-1.jpg' style={{width:'100%',height:'100%'}}/>
    </Layout>
  )
}

export default Architecture