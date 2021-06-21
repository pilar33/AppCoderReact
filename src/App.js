import React from 'react';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import "./App.css";
import NavBar from '../src/Components/NavBar/NavBar';
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer';
import "react-bulma-components";


function App() {
  return <>       
        <NavBar />   
        <ItemListContainer greeting="Proximamente...catálogo de productos "/> 
            
        </> 
}


export default App;
