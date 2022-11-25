import React from 'react'
import '../index.js';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar'
import enfermera from '../img/enfermera.png'
import casa from '../img/casa.png'
import historia_paciente from '../img/historia_paciente.png'
import { useAuth0 } from "@auth0/auth0-react";


const Screen6 = () => {
    const { isAuthenticated } = useAuth0();
  return (
    <div>
        <Navbar/>
        <br />
        <div className="container" id="pqr">
            <div className="containter" style={{border:"2px solid black",borderRadius:"10px"}} >
                <div className='text-center' style={{border:"1px solid black",borderRadius:"10px",width:"30%",borderLeftStyle:"none",borderTopStyle:"none"}} id="del">
                    <h4>EPS CLINICA IMPERIAL</h4>
                </div>
                <div className="row">
                    <div className="col-lg-2 offset-lg-1" id="">
                        <img src={enfermera} alt="" />
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4">
                                <h4 style={{marginTop:"20px"}}>Nombre</h4>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className='form-control' placeholder='Nombre del Paciente' style={{textAlign:"center",background:"rgba(217, 217, 217, 0.45)"}} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <h4 style={{marginTop:"20px"}}>Numero de Documento</h4>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className='form-control' placeholder='Numero de Documento' style={{textAlign:"center",background:"rgba(217, 217, 217, 0.45)"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row justify-content-center">
                    <table style={{width:"400px"}}>
                        <tr>
                            <td>Sintomas</td>
                            <td><i className="bi bi-plus-circle" style={{fontSize:"20px"}}></i></td>
                            <td><i className="bi bi-download" style={{fontSize:"20px"}}></i></td>
                        </tr>
                        <tr>
                            <td>Alergias</td>
                            <td><i className="bi bi-plus-circle" style={{fontSize:"20px"}}></i></td>
                            <td><i className="bi bi-download" style={{fontSize:"20px"}}></i></td>
                        </tr>
                        <tr>
                            <td>Vacunas</td>
                            <td><i className="bi bi-plus-circle" style={{fontSize:"20px"}}></i></td>
                            <td><i className="bi bi-download" style={{fontSize:"20px"}}></i></td>
                        </tr>
                        <tr>
                            <td>Diágnostico</td>
                            <td><i className="bi bi-plus-circle" style={{fontSize:"20px"}}></i></td>
                            <td><i className="bi bi-download" style={{fontSize:"20px"}}></i></td>
                        </tr>
                    </table>
                </div>
                <br />
                <img src={historia_paciente} alt="" style={{width:"100%"}} id="imgtexto" />
                <br />
            </div>
        </div>
        <br />
        <Footer />
    </div>
  )
}

export default Screen6