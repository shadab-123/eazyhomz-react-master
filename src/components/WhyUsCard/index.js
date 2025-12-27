import React from 'react'
import ButtonComponent from '../Button'
import './why-us.scss'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
const WhyUsCard = ({ logoPath, text }) => {

    return (
        <Grid xs={12} sm={12} md={2}>
            <Box className="why-us-card-box">
                <img src={logoPath} loading='lazy' />
                <p className='text'>{text}</p>
            </Box>
        </Grid>
    )
}

export default WhyUsCard