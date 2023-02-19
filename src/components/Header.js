import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function header() {
      return (

        <Navbar claaName="ight-section" id="navigation">
        <Container className="countainer-fluid">
<Navbar.Brand href="https://yalda.epizy.com/" ><span className="logo-text">         
<img className="logo" src="images/logo.png" alt="logo"/>Shop</span></Navbar.Brand>


<Nav>
<Navbar.Toggle aria-controls="basic-navbar-nav"  />
<Navbar.Collapse id="responsive-navbar-nav" className="ml-auto" >

                <Nav.Link className="nav-item" href="https://yalda.epizy.com/"><h5>Home</h5></Nav.Link>
                <Nav.Link className="nav-item" href="https://yalda.epizy.com/gallery.html"><h5>Gallery</h5></Nav.Link>
</Navbar.Collapse>

</Nav>
</Container>
</Navbar>

)};