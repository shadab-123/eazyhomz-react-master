import React from "react";
import Slider from "react-slick";
import './cardSlider.scss'
import ButtonComponent from "../Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function CardSlider({ cardData }) {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          cardData.map((data) => {
            return (
              <div className="box-container">
                <img src={data.IMAGE_PATH} loading="lazy" />
                <p className='main-heading'>{data.HEADING}</p>
                <p className='sub-heading'>{data.SUB_HEADING}</p>
                <ButtonComponent text={data.BUTTON_TEXT} Icon={<ArrowRightAltIcon />} />
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default CardSlider;