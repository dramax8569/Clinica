import React from 'react'
import '../index.js';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar'
import enfermera from '../img/enfermera.png'
import casa from '../img/casa.png'
import historia_paciente from '../img/historia_paciente.png'
import { useAuth0 } from "@auth0/auth0-react";


const Screen7 = () => {
    const { isAuthenticated } = useAuth0();

  return (
    
    <div>
        <Navbar/>
        <br />
        <div className="container" id="pqr">
            <div className="containter" style={{border:"2px solid black",borderRadius:"10px"}}>
                <div className='text-center' style={{border:"1px solid black",borderRadius:"10px",width:"30%",borderLeftStyle:"none",borderTopStyle:"none"}} id="del">
                    <h4>EPS CLINICA IMPERIAL</h4>
                </div>
                <br />
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <h2>Asignación Citas Médicas</h2>
                    </div>
                    <div className='col-lg-8'>
                        <div className="row">
                            <div className='col-lg-6'>
                                <h4 style={{marginTop:"20px"}}>Nombre</h4>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className='form-control' placeholder='Nombre del Paciente' style={{textAlign:"center",background:"rgba(217, 217, 217, 0.45)"}} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-lg-6'>
                                <h4 style={{marginTop:"20px"}}>Numero Documento</h4>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className='form-control' placeholder='Numero Documento' style={{textAlign:"center",background:"rgba(217, 217, 217, 0.45)"}} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-lg-6'>
                                <h4 style={{marginTop:"20px"}}>Especialidad</h4>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <br />
                                    <select className='form-control' style={{textAlign:"center",background:"rgba(217, 217, 217, 0.45)"}}>
                                        <option value="">Seleccione...</option>
                                        <option value="">Especialidad 1</option>
                                        <option value="">Especialidad 2</option>
                                        <option value="">Especialidad 3</option>
                                        <option value="">Especialidad 4</option>
                                        <option value="">Especialidad 5</option>
                                        <option value="">Especialidad 6</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-lg-6'>
                                <h4 style={{marginTop:"20px"}}>Fecha</h4>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="date" className='form-control' placeholder='Nombre del Paciente' style={{textAlign:"center",background:"rgba(217, 217, 217, 0.45)"}} />
                                </div>
                            </div>
                        </div>
                            <br />
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <button className='btn btn-primary btn-lg btn-block' style={{background:"#C3F4FF",color:"black",border:"1px solid #C3F4FF",height:"80px",width:"404px",fontSize:"25px"}} id="btn">Enviar <i class="bi bi-arrow-right-short"></i></button>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
        <br />
        <Footer />
    </div>
  )
}

export default Screen7