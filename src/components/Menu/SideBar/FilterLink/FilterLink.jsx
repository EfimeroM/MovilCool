import React, { useContext } from 'react'
import { FilterContext } from "../../../../Context/FilterContext";

const FilterLink = ({marcaFiltrada, productos}) => {
  const { handleClick } = useContext(FilterContext);

  return (
    <span className="filter_box__link">
      <button id='filterButton' className='link' onClick={handleClick}>
        {marcaFiltrada}
      </button>
    </span>
  )
}

export default FilterLink;