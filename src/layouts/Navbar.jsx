import React from 'react'
import './navbar.css';
import logo from '../img/logo.png'
import textlogo from '../img/imperial.png'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <div className='navbar-container'>
            <div className='row'>
                <div className='col-lg-3 text-center'>
                <Link to="/" >
                    <img src={logo} height={"50px"} style={{marginTop:"-20px"}}/>
                    <img src={textlogo} height={"70px"} style={{marginTop:"2px"}}/>
                </Link>
                </div>
                <div className='col-lg-6 text-center'>
                    <input type="text" name="search" placeholder='¿Buscas algo?' />
                    <i className="bi bi-search" style={{fontSize:"20px",marginLeft:"-30px"}}></i>
                </div>
                <div className='col-lg-3 text-center'>
                    <i className="bi bi-person" style={{fontSize:"50px"}}></i>
                </div>
            </div>            
        </div>
        <div className='navbar-container' style={{background:" radial-gradient(101.77% 60623.96% at 100% 50.85%, rgba(35, 255, 215, 0.6) 0%, rgba(172, 255, 240, 0.6) 100%)"}}>
            <div className='row justify-content-center'>
                <div className='col-lg-10'>
                    <b>Salud</b><br/>
                    Plan Complementarios
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar

