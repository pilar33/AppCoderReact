import React from 'react';
import { FaQuinscape, FaUserAlt } from "react-icons/fa";
import CardWidget from '../CardWidget/CardWidget';
import '../../../src/Components/NavBar.css';

const NavBar = () => {
    return (
        <div className="container-fluid">
           <div className="row NavBar-brand"> 
             <div className="col-md-6">
                <h1><FaQuinscape/> WORLD FINTECH</h1>
             </div> 
             <div className="col-md-3"><CardWidget/> HOME</div>
             <div className="col-md-3"><FaUserAlt/> INGRESO | REGISTRO</div>
           </div>
           
        </div>
    )
  }
  
  
  export default NavBar;