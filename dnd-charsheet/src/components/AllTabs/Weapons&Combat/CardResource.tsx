import React from 'react'
import AppContext from '../../../Context/AppContext';


export default function CardResource(props :any) {
  const { index, name } = props;
  const { listResources, setListResources } = React.useContext(AppContext);


  return (
    <div>
      <span>{name}</span>

      <input
        type='number'
        min={0}
        max={listResources[index].max || 0}
        value={listResources[index].current}
        onChange={(e) => {
          const newList = [...listResources];
          newList[index].current = Number(e.target.value);
          setListResources(newList);
        }}
      />

      /

      <input
        type='number'
        value={listResources[index].max}
        onChange={(e) => {
          const newList = [...listResources];
          newList[index].max = Number(e.target.value);
          setListResources(newList);
        }}
      />
    </div>
  )
}
