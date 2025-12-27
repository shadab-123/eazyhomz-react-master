import React from 'react'
import ButtonComponent from '../Button'
import './estimation_card.scss'
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
const EstimationCard = ({ heading, logoPath, text, buttonText, buttonClickEvent }) => {
    return (
        <Grid xs={12} sm={6} md={3}>
            <Box className="box">
                <div className='heading'>{heading} </div>
                <img src={logoPath} height="100px" width="120px" loading='lazy'/>
                <p className='sub-text'>{text}</p>
                <ButtonComponent onClick={buttonClickEvent} text={buttonText} />
            </Box>
        </Grid>
    )
}

export default EstimationCard