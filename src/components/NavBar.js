import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import menu from "../Images/menu.png" 
import 'aos/dist/aos.css';


export function NavBar() {
    const [activeLink, setActiveLink] = useState(false);
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

  return (
    <Navbar expand="lg" data-aos="fade-down" data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="1000">
        <Container>
            <Navbar.Brand href="#home" style={{fontSize: "18px", fontWeight: "800", fontStyle: "italic", color: "#EE4E34"}}>
                JACK<br/>WATSON.      
            </Navbar.Brand>
              <Navbar.Toggle class="nav-toggler" style={{border: "none"}}>
                  <img src={menu} style={{width: "20px", height: "20px"}} alt="Toggler"></img>
              </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className='basic-navbar-nav'>
                <Nav className="ms-auto justify-content-center align-items-center text-center">
                    <Nav.Link href="#home" className={activeLink === "home" ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                    <Nav.Link href="#home" className={activeLink === "Skills" ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#home" className={activeLink === "Projects" ? 'active nav-link' : 'nav-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <button className='navbar-button text-center' onClick={() => console.log('connect')}>Let's Connect</button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navbar