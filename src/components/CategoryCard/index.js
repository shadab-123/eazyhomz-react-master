import React from 'react'
import ButtonComponent from '../Button'
import './category_card.scss'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORY_LIST } from '../../utils/constants';

const CategoryCard = ({ id,category, logoPath, text, buttonText ,isDesignIdea=false}) => {
    const navigate = useNavigate()
    const handleClick = (category)=>{
        localStorage.setItem('initialSlide',parseInt(id))
        const category_path = CATEGORY_LIST.filter((list)=>list.value === category)
        navigate(`/${category_path[0].text}`)
    }
    
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box className="category_box">
                <img src={logoPath} loading='lazy' />
                <p className='text'>{text}</p>
                {
                    !isDesignIdea ?
                    <ButtonComponent onClick={()=>handleClick(category)} text={buttonText} />
                    :
                    <Link to={category}><ButtonComponent text={buttonText} /></Link>
                }
                
            </Box>
        </Grid>
    )
}

export default CategoryCard