import Home from "./components/Home/Home";
import ItemListContainer from "./components/Menu/ItemListContainer/ItemListContainer";
import { FilterContextProvider } from "./Context/FilterContext";
import { ProductContextProvider } from "./Context/ProductContext";
import Promociones from "./components/Menu/Promociones/Promociones";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Contacto from "./components/Menu/Contacto/Contacto";
import ItemDetailContainer from "./components/Menu/ItemDetailContainer/ItemDetailContainer";

// Style
import "./index.css";
import { Footer } from "./components/Footer/Footer";
import { ResponsiveHeader } from "./helpers/ResponsiveHeader";

function App() {
  return (
    <ProductContextProvider>
      <FilterContextProvider>
        <BrowserRouter>
          <div className="App">
            <ResponsiveHeader />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Home />
                  </>
                }
              />
              <Route
                exact
                path="/catalogo/:id"
                element={<ItemListContainer />}
              />
              <Route exact path="/menu/:id" element={<Promociones />} />
              <Route exact path="/:id" element={<Contacto />} />
              <Route
                exact
                path="/detalle/:id"
                element={<ItemDetailContainer />}
              />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </FilterContextProvider>
    </ProductContextProvider>
  );
}

export default App;
