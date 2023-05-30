import React from 'react'
import SpellForm from './SpellForm';


export default function SpellDetails(props: any) {
  const { name, action, duration, range, components, description, index, level } = props;
  const [toEdit, setToEdit] = React.useState(false);


  return (
    <li>
      <div className='Spell'>
        {
          toEdit ? (
            <SpellForm
              level={level}
              index={index}
              saveSpell={() => setToEdit(!toEdit)}
              editSpell
            />
          ) : (
            <>
              <span>{name}</span>
              /
              <span>{action}</span>
              /
              <span>{duration}</span>
              /
              <span>{range}</span>
              /
              <span>{components}</span>
              /
              <span>{description}</span>

              <button type='button' onClick={() => setToEdit(!toEdit)}>
                Editar
              </button>
            </>
          )
        }

        <button type='button' onClick={props.removeSpell}>X</button>

      </div>
    </li>
  )
}
