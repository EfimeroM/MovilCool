import React, {createContext} from 'react'
import { productos } from "../helpers/mock";

export const ProductContext = createContext([]);

export const ProductContextProvider = ({children}) => {
  
  const getFetch = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    } else {
      reject("error");
    }
  });

  return (
    <ProductContext.Provider value={{
      getFetch,
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext