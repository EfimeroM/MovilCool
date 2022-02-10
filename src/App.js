import React from "react";
import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/">
              <Banner /> 
              <br/> 
              <br/> 
              <br/> 
              <br/> 
            </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
