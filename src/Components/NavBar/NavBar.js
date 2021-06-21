import React from 'react';
import { FaQuinscape, FaUserAlt } from "react-icons/fa";
//import CardWidget from '../CardWidget/CardWidget';
import '../../../src/Components/NavBar.css';
import {NavLink,useParams} from 'react-router-dom';

const NavBar = () => {
   const {id} = useParams();
    return (
        <div className="container-fluid">
            <div className="row NavBar-brand">              
                <h1><center><FaQuinscape/> WORLD FINTECH</center></h1>
            </div> 
            <div className="row">                     
             <div className="row topnav"> 
               <div className="col-md-10">
                     <NavLink activeClassName="active" exact to={'/'}>
                         PRODUCTOS 
                     </NavLink>
                     <NavLink activeClassName="active" exact to={'/category/'+ {id}}>
                         PRODUCTO: {id}
                     </NavLink>
                     <NavLink activeClassName="active" exact to={'/item/id'}>
                        DETALLE
                     </NavLink>
                </div>
                <div className="col-md-2">
                     <NavLink activeClassName="active" exact to={'/product'}>
                       <FaUserAlt/> INGRESO | REGISTRO 
                     </NavLink>
                </div>
             </div>
           </div>
           
        </div>
    );
  };
    
  export default NavBar;