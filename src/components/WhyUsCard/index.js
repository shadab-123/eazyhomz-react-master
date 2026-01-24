import React from 'react'
import './why-us.scss'
import Grid from '@mui/material/Grid';
const WhyUsCard = ({ logoPath, text }) => {

    return (
        <Grid xs={12} sm={12} md={2}>
            <div className="why-us-card-box">
                <img src={logoPath} alt={text} loading='lazy' />
                <p className='text'>{text}</p>
            </div>
        </Grid>
    )
}

export default WhyUsCard