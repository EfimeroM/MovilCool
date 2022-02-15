import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Home/Banner/Banner";
import ItemListContainer from "./components/Menu/ItemListContainer/ItemListContainer";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Banner />
                  <Home />
                </>
              }
            />
            <Route exact path="/menu/:id" element={<ItemListContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
