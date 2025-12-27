import React from 'react'
import './step-card.scss'
import { Box, Grid } from '@mui/material'

const StepCard = ({id,logoPath,heading,subHeading}) => {
    return (
            <Box className="step-card-box">
                <img className='step-img' width="510px" height="403px" src={logoPath} loading='lazy'/>
                <p className='heading'>{heading}</p>
                <p className='sub-heading'>{subHeading}</p>
            </Box>
    )
}

export default StepCard