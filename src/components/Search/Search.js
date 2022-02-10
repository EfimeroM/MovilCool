import React from 'react';
import { BiSearch } from "react-icons/bi";

export const Search = () => {
  return (
    <div id='search'>
        <input type='text' id="search-header" placeholder='Buscar producto'/>
        <button type="submit" id="submit-header"><BiSearch id="submit-icon"/></button>
    </div>
  );
};
