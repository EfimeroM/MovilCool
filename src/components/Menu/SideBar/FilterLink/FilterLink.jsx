import React, { useContext } from 'react'
import { FilterContext } from "../../../../Context/FilterContext";

const FilterLink = () => {
  return (
    <>
      <MarcasLinks />
      <ColoresLinks />
    </>
  );

}

export const MarcasLinks = ({marcaFiltrada}) => {
  const { handleMarcaClick } = useContext(FilterContext);
  return (
    <span className="filter_box__link">
      <button id='filterButton' className='link' onClick={handleMarcaClick}>
        {marcaFiltrada}
      </button>
    </span>
  )
}

export const ColoresLinks = ({colorFiltrado}) => {
  const { handleColorClick } = useContext(FilterContext);
  return (
    <span className="filter_box__link">
      <button id='filterButton' className='link' onClick={handleColorClick}>
        {colorFiltrado}
      </button>
    </span>
  )
}

export default FilterLink;