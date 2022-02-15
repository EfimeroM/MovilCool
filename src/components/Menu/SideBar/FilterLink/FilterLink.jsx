import React from 'react'
import { Link } from "react-router-dom";

const FilterLink = ({marca}) => {
  return (
    <span className="filter_box__link">
      <button className='link'>
        {marca}
      </button>
    </span>
  )
}

export default FilterLink;