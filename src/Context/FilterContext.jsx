import React, { createContext, useState } from 'react'

export const FilterContext = createContext([]);

export const FilterContextProvider = ({children}) => {
  const [marca, setMarca] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setMarca(e.target.innerText);
	}

  const removeTag = () => {
		setMarca('');
	}

  return (
    <FilterContext.Provider value={{
      handleClick,
      marca,
      setMarca,
      removeTag,
    }}>
      {children}
    </FilterContext.Provider>
  );
}

