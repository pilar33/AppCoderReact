import { FaQuinscape, FaUserAlt } from "react-icons/fa";

import '../../../src/Components/NavBar.css';
import CardWidget from '../../../src/Components/CardWidget/CardWidget';
import {Link,NavLink} from 'react-router-dom';

const NavBar = () => {
  const style = {
    color: 'coral' 
  };
    return (
      <div className="container-fluid">
      <div className="row NavBar-brand">              
          <h1><center><Link style={style} to={'/'}><FaQuinscape/> WORLD FINTECH </Link></center></h1>
      </div> 
      
      
      <div className="row topnav">                    
         <div className="col-lg-1 col-md-1">
              <NavLink activeClassName="active" exact to={'/ItemListContainer/'}>HOME</NavLink>
         </div>  
          <div className="col-lg-2 col-md-2 dropdown">
              <button className="dropbtn">PRODUCTOS 
                <i className="fa fa-caret-down"></i>
              </button>
               <div className="dropdown-content">
                      <NavLink activeClassName="active" to={'/ItemListContainer/1'}>
                          CELULARES
                      </NavLink>
               
                      <NavLink activeClassName="active" to={'/ItemListContainer/2'}>
                          NOTEBOOKS
                      </NavLink>
                </div>
          </div>
        {/*   <div className="col-lg-1 col-md-1">
               <NavLink activeClassName="active" exact to={'/item/1'}>
                  DETALLE
               </NavLink>
          </div> */}
          <div className="col-lg-5 col-md-5"></div>
          <div className="col-lg-2 col-md-2"><CardWidget /></div>
          <div className="col-lg-2 col-md-2">
               <NavLink activeClassName="active" exact to={'/product'}>
                 <FaUserAlt/> INGRESO | REGISTRO 
               </NavLink>
          </div>
      
     </div>
  </div> 
    
     
    );
  };
    
  export default NavBar;