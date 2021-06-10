import React from 'react';
import { FaQuinscape, FaUserAlt } from "react-icons/fa";
import CardWidget from '../CardWidget/CardWidget';
import { NavbarCss } from '../../../src/Components/NavBar.css';

const NavBar = () => {
    return (
        <div className="container-fluid">
           <div className="row NavBar-brand"> 
             <div className="col-md-8">
                <h1><FaQuinscape/> WORLD FINTECH</h1>
             </div> 
             <div className="col-md-2"><CardWidget/> HOME</div>
             <div className="col-md-2"><FaUserAlt/> INGRESO | REGISTRO</div>
           </div>
           
        </div>
    )
  }
  
  
  export default NavBar;