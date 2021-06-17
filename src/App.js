import React from 'react';
import NavBar from '../src/Components/NavBar/NavBar';
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return <>       
        <NavBar />   
        <ItemListContainer greeting="Proximamente...catálogo de productos "/> 
        <ItemDetailContainer  />     
        </> 
}


export default App;
