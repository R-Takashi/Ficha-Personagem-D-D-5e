import React from 'react'
import AppContext from '../../../Context/AppContext';
import { ResourceCard } from './Styles/ResourceCard';


export default function CardResource(props :any) {
  const { index, name, removeResource } = props;
  const { listResources, setListResources, listSkills } = React.useContext(AppContext);
  const [toEdit, setToEdit] = React.useState(false);
  const [resource, setResource] = React.useState({
    name: '',
    current: '',
    max: '',
  });

  React.useEffect(() => {
    setResource(listResources[index]);
  }, [index, listResources]);


  const handleSaveResource = (index: number) => {
    if (toEdit) {
      const editedResource = { ...resource };
      const updatedList = [...listResources];
      updatedList[index] = editedResource;

      setListResources(updatedList);
    }

    setToEdit(!toEdit);
  }

  const handleRemove = () => {
    setToEdit(!toEdit);
    removeResource();
  }


  return (
    <ResourceCard>

      <div>
        {
          toEdit ? (
            <>
              <input
                type='text'
                id='name'
                value={resource.name}
                onChange={(e) => setResource({ ...resource, name: e.target.value })}
              />
            </>
          ) : (
            <span>
              {name}
            </span>
          )
        }
      </div>

      <div>
        {
          toEdit ? (
            <>
              <input
                type='number'
                id='current'
                value={resource.current}
                min={0}
                max={resource.max}
                onChange={(e) => setResource({ ...resource, current: e.target.value })}
              />
                /
              <input
                type='number'
                id='max'
                value={resource.max}
                min={0}
                onChange={(e) => setResource({ ...resource, max: e.target.value })}
              />
            </>
          ) : (
            <span>
              {resource.current} / {resource.max}
            </span>
          )
        }
      </div>

      {
        toEdit && (
          <button
          type='button'
          onClick={() => handleRemove()}
          disabled={listSkills.some((skill: any) => skill.resource === resource.name)}
          >
            <img src='https://super.so/icon/light/trash.svg' alt="show info" />
          </button>
        )
      }
      

      <button
        type='button'
        onClick={() => {
          handleSaveResource(index);
        }}
      >
        {
          toEdit ?
          <img src='https://super.so/icon/light/save.svg' alt="show info" />
            :
          <img src='https://super.so/icon/light/edit.svg' alt="show info" />
        }
      </button>
      
    </ResourceCard>
  )
}
