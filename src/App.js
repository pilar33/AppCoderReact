import React from 'react';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import "./App.css";
import NavBar from '../src/Components/NavBar/NavBar';
import Home from '../src/Components/Home/Home';
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/Components/ItemDetailContainer/ItemDetailContainer';


const App = () =>{
  return (       
        <BrowserRouter>
          <NavBar/> 
           <Switch>
           <Route exact path="/">
                 <Home />
            </Route>             
            <Route exact path="/ItemListContainer/:id">
                 <ItemListContainer greeting="Productos de la categoría " />
            </Route>
            <Route exact path="/item/:id" >
               <ItemDetailContainer /> 
            </Route>
           </Switch>
                
        </BrowserRouter>
        ); 
}


export default App;
