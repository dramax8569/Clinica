import React from 'react'
import './navbar.css';

export const Navbar = () => {
  return (
    <>
        <div className='navbar-container'>
            <div className='row'>
                <div className='col-lg-3 text-center'>
                    logo
                </div>
                <div className='col-lg-6 text-center'>
                    <input type="text" name="search" placeholder='¿Buscas algo?' />
                    <i class="bi bi-search" style={{fontSize:"20px",marginLeft:"-30px"}}></i>
                </div>
                <div className='col-lg-3 text-center'>
                    <i class="bi bi-person" style={{fontSize:"50px"}}></i>
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