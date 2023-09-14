import React from 'react'
import AppContext from '../../../../Context/AppContext';
import CardSkill from './Components/CardSkill';
import SkillForm from './Components/SkillForm';
import { Skills } from './SkillStyle';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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


export default function SkillList() {
  const { listSkills } = React.useContext(AppContext);
  const [newSkill, setNewSkill] = React.useState(false);
  const [showSkill, setShowSkill] = React.useState(false);


  return (
    <Skills>

      <header>
        <button
            type='button'
            onClick={() => setNewSkill(!newSkill)}
          >
            {
              newSkill ? (
                <img src='https://super.so/icon/light/minus-square.svg' alt="show info" />
              ) : (
                <img src='https://super.so/icon/light/plus-square.svg' alt="show info" />
              )
            }
          </button>

        <h2
          className={`${showSkill ? 'Listed' : undefined}`}
          onClick={() => setShowSkill(!showSkill)}
        >Habilidades</h2>

        {
          listSkills.length > 0 && (
            <div
              className='Btn-Show'
              onClick={() => setShowSkill(!showSkill)}
            >
              {
                showSkill ? (
                  <img src='https://super.so/icon/light/chevron-up.svg' alt='Mais informações' />
                ) : (
                  <img src='https://super.so/icon/light/chevron-down.svg' alt='Mais informações' />
                )
              }
            </div>
          )
        }

        {
          newSkill && (
            <SkillForm
              newSkill
              saveSkill={() => setNewSkill(!newSkill)}
            />
          )
        }
      </header>


      <div className={`${showSkill ? 'DisplayOn' : 'DisplayOff'}`}>
        <div className='SkillList'>

          {
            listSkills.filter((skill: any) => skill.activeSkill).length > 0 && (
              <h3>Ativas</h3>
            )
          }
            
          {
            showSkill && (
              <Slider {...settings}>
                {
                  listSkills.filter((skill: any) => skill.activeSkill).map((skill: any, index: number) => (
                    <CardSkill
                      key={index}
                      {...skill}
                    />
                ))
                }
              </Slider>
            )
          }

          {
            listSkills.filter((skill: any) => !skill.activeSkill).length > 0 && (
              <h3>Passivas</h3>
            )
          }

          {
            showSkill && (
              <Slider {...settings}>
                {
                  listSkills.filter((skill: any) => !skill.activeSkill).map((skill: any, index: number) => (
                    <CardSkill
                      key={index}
                      {...skill}
                    />
                  ))
                }
              </Slider>
            )
          }
        </div>
      </div>
      
    </Skills>
  )
}
