import React from 'react'
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar'
import './screen5.css'
import ambulance from '../img/ambulance.png';
import telemedicina from '../img/telemedicina.png';
import cruz from '../img/cruz.png'
import bdclinica from '../img/bdclinica.png'
import enfermera from '../img/enfermera.png'
import casa from '../img/casa.png'
import {Link} from 'react-router-dom'

const Screen5 = () => {
  return (
    <div>
        <Navbar/>
        <br />
        <div className="container">
            <div className='row'>
                <div className='col-lg-12' style={{height:"189px"}}>
                    <h4>Clinicia imperial<br />Nos encanta conocer tu <br />opinion</h4>
                    <p style={{color:"black",fontWeight:"none"}}>Es simplemente el texto de relleno de las imprentas <br />y archivos de texto. Lorem Ipsum ha sido el texto de relleno</p>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-md-center">
                        <div className="col-lg-3 text-center">
                            <Link to="/historial-paciente" style={{textDecoration:"none",color:"black"}}>
                                <img src={ambulance} className="menu-img"/>
                                <br />
                                Historial
                            </Link>
                        </div>
                    <div className="col-lg-3 text-center">
                        <Link to="/agendar-cita" style={{textDecoration:"none",color:"black"}}>
                            <img src={bdclinica} className="menu-img"/>
                            <br />
                            Solicitar Cita
                        </Link>
                    </div>
                    <div className="col-lg-3 text-center">
                        <Link to="/" style={{textDecoration:"none",color:"black"}}>
                            <img src={cruz} className="menu-img"/>
                            <br />
                            Atención al Usuario
                        </Link>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src={telemedicina} className="menu-img"/>
                        <br />
                        Telemedicina
                    </div>
                </div>
            </div>
            <br />
            <div className="containter" style={{border:"2px solid black",borderRadius:"10px"}}>
                <div className='text-center' style={{border:"1px solid black",borderRadius:"10px",width:"30%",borderLeftStyle:"none",borderTopStyle:"none"}}>
                    <h4>EPS CLINICA IMPERIAL</h4>
                </div>
                <div className="row">
                    <div className="col-lg-1 offset-lg-1" >
                        <img src={enfermera} alt="" />
                    </div>
                    <div className="col-lg-4">
                        <p style={{color:"black"}}>
                        es simplemente el texto de relleno de las imprentas y archivos de texto.<br/> Lorem Ipsum ha sido el texto de relleno
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1 offset-lg-6" >
                        <img src={casa} alt="" />
                    </div>
                    <div className="col-lg-4">
                        <p style={{color:"black"}}>
                        es simplemente el texto de relleno de las imprentas y archivos de texto.<br/> Lorem Ipsum ha sido el texto de relleno
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Screen5