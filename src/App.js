import React from 'react';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import "./App.css";
import NavBar from '../src/Components/NavBar/NavBar';
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/Components/ItemDetailContainer/ItemDetailContainer';
import "react-bulma-components";


const App = () =>{
  return (       
        <BrowserRouter>
          <NavBar/> 
           <Switch>
            <Route exact path="/">
                 <ItemListContainer greeting="Listado de Productos"/>
            </Route>
            <Route exact path="/category/:id">
                 <ItemListContainer greeting="Producto: " />
            </Route>
            <Route exact path="/item/:id" >
               <ItemDetailContainer /> 
            </Route>
           </Switch>
                
        </BrowserRouter>
        ); 
}


export default App;
