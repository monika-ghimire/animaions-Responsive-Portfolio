import React from 'react'
import {Container,Nav , Navbar, NavDropdown} from 'react-bootstrap/Container';
import { useState,useEffect } from 'react';
export default function NavBar() {
    const [activeLink,setActivelink]=useState('home');
    const [scrolled,setScolled]=useState(false)

    useEffect(()=>{
     const onScroll=()=>{
        if(window.scrollY>50)
        {
            setScolled(true)
        }
        else{
            setScolled(false)
        }
     }
     window.addEventListener('scroll',onScroll)
     

     return()=>window.removeEventListener('scroll',onScroll)
     
    },[])
    const onUpdateActiveLink=(value)=>{
        setActivelink(value)

    }
  return (
    <>
    <Navbar expand="lg" className={scrolled ? "scrolled":''}>
      <Container>
        <Navbar.Brand href="#home">
            <img src='' alt='LOGO'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-Link':'navbar-link'}onclick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills' ? 'active navbar-Link':'navbar-link' }onclick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project"className={activeLink==='projects' ? 'active navbar-Link':'navbar-link' }onclick={()=>onUpdateActiveLink('projects')}>projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#'><img src={} alt=''/></a>
                <a href='#'><img src={} alt=''/></a>
                <a href='#'><img src={} alt=''/></a>
            </div>
            <button className='vvd' onClick={()=>console.log("connect")}>
                <span > let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
