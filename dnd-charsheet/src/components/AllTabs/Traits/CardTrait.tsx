import React from 'react'

export default function CardTrait(props: any) {
  const { name, description } = props;
  const [showDescription, setShowDescription] = React.useState(false);


  return (
    <li>
      <div className='Trait'>
        <span>{name}</span>
        <button type='button' onClick={() => setShowDescription(!showDescription)}>+</button>
        {showDescription && (
          <>
            <span>{description}</span>

          </>
        )}
      </div>
    </li>
  )
}
