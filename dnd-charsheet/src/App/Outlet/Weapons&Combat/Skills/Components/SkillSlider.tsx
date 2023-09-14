import React from 'react'
import CardSkill from './CardSkill'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SkillSlider(props: any) {
  const { listSkills, showSkill } = props;

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
        showSkill && (
          <Slider {...settings}>
            {
              listSkills.map((weapon: any, index: number) => (
                <CardSkill
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
