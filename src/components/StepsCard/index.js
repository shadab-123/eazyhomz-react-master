import React from 'react'
import './step-card.scss'
import { Box } from '@mui/material'

const StepCard = ({id,logoPath,heading,subHeading}) => {
    return (
            <Box className="step-card-box">
                <img className='step-img' alt={heading} width="350px" height="250px" src={logoPath} loading='lazy'/>
                <p className='heading'>{heading}</p>
                <p className='sub-heading'>{subHeading}</p>
            </Box>
    )
}

export default StepCard