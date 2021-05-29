import React, { Component } from 'react';
import { Container,Row,Col,Form,NavLink } from 'react-bootstrap';
import { FaQuinscape, FaUserAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarCss } from './NavBar.css';
import { Camera } from 'react-bootstrap-icons';

export default class NavBar extends Component {
    render() {
        return(   
               <Container fluid className="NavBar"> 
                   <Row className="NavBar-brand">
                      <Col><h1><FaQuinscape/> WORLD FINTECH</h1></Col>
                      <Col className="NavBar-ul"><p><NavLink className="NavBar-links">PRODUCTOS</NavLink></p></Col>
                      <Col className="NavBar-ul"><p><NavLink className="NavBar-links"><FaUserAlt/> INGRESO | REGISTRO</NavLink></p></Col>
                   </Row>
                  
                </Container> 
              
             
           
        )
      }
}