import React, { createContext, useState } from 'react'

export const FilterContext = createContext([]);

export const FilterContextProvider = ({children}) => {
  const [marca, setMarca] = useState('');
  const [color, setColor] = useState('');

  const handleMarcaClick = (e) => {
    e.preventDefault();
    setMarca(e.target.innerText);
	}

  const handleColorClick = (e) => {
    e.preventDefault();
    setColor(e.target.innerText);
	}

  const removeMarcaTag = () => {
		setMarca('');
	}
  const removeColorTag = () => {
    setColor('');
	}



  return (
    <FilterContext.Provider value={{
      handleMarcaClick,
      handleColorClick,
      marca,
      color,
      setMarca,
      removeMarcaTag,
      removeColorTag,
    }}>
      {children}
    </FilterContext.Provider>
  );
}

