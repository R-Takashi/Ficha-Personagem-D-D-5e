import React, { useContext } from 'react'
import AppContext from '../../../../Context/AppContext'
import WeaponForm from './Components/WeaponForm'
import CardWeapon from './Components/CardWeapon'
import { Weapons } from './WeaponStyle'
// import SliderShow from './Slider';
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

export default function WeaponList() {
  const { listWeapons, setListWeapons, attributes } = useContext(AppContext);
  const [newWeapon, setNewWeapon] = React.useState(false);
  const [showWeapon, setShowWeapon] = React.useState(false);


  const handleRemoveWeapon = (weapon: any) => {
    const weaponIndex = listWeapons.findIndex((item: any) => JSON.stringify(item) === JSON.stringify(weapon));
    const newListWeapons = [...listWeapons];
    newListWeapons.splice(weaponIndex, 1);
    setListWeapons(newListWeapons);
  }

  React.useEffect(() => {
    const newListWeapons = listWeapons.map((weapon: any) => {
      if (weapon.attribute !== '') {
        const modAttr = attributes.find((attribute: any) => attribute.name === weapon.attribute).mod;
        return { ...weapon, attackAttr: modAttr };
      }
      return weapon;
    });
    setListWeapons(newListWeapons);
    // eslint-disable-next-line
  }, []);




  return (
    <Weapons>

      <section>
        
        <button onClick={() => setNewWeapon(!newWeapon)}>
          {
            newWeapon ? 
            <img src='https://super.so/icon/light/minus-square.svg' alt="show info" /> :
            <img src='https://super.so/icon/light/plus-square.svg' alt="show info" />
          }
        </button>

        <h2
          className={`${showWeapon ? 'Listed' : ''}`}
          onClick={() => {
            setShowWeapon(!showWeapon);
          }}
        >
          Armas
        </h2>


        {
          listWeapons.length > 0 && (
            <div
              className='Btn-Show'
              onClick={() => setShowWeapon(!showWeapon)}
            >
              {
                showWeapon ? (
                  <img src='https://super.so/icon/light/chevron-up.svg' alt='Mais informações' />
                ) : (
                  <img src='https://super.so/icon/light/chevron-down.svg' alt='Mais informações' />
                )
              }
            </div>
          )
        }
  

          {
            newWeapon && (
              <WeaponForm
                newWeapon
                saveWeapon={() => setNewWeapon(false)}
              />
            )
          }
      </section>

      <div className={`${showWeapon ? 'DisplayOn' : 'DisplayOff'}`}>        
        <div className='WeaponList'>
          {
            showWeapon && (
              <Slider {...settings}>
                {
                  listWeapons.map((weapon: any, index: number) => (
                    <CardWeapon
                      key={index}
                      index={index}
                      {...weapon}
                      removeWeapon={ () => handleRemoveWeapon(weapon)}
                    />
                ))
                }
              </Slider>
            )
          }
        </div>
      </div>

    </Weapons>
  )
}
