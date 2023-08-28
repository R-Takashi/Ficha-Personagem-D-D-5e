import React from 'react'
import CardWeapon from './CardWeapon'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function SliderShow(props: any) {
  const { listWeapons, showWeapon } = props;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    'min-width': 0,
    'min-height': 0,
    adaptativeHeight: true,
    slide: 'div',
    initialSlide: 0,
    arrows: false,
  };

  return (
    <div>
      {
        showWeapon && (
          <Slider {...settings}>
            {
              listWeapons.map((weapon: any, index: number) => (
                <CardWeapon
                  key={index}
                  index={index}
                  {...weapon}
                  // removeWeapon={ () => handleRemoveWeapon(weapon)}
                />
            ))
            }
          </Slider>
        )
      }
    </div>
  )
}
