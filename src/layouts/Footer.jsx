import React from 'react'
import './footer.css';
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="footer-contain">
        <div className="footer-section">
            <div class="uno" className="row">
                <div className="col-lg-4">
                    <p>Quienes Somos</p>
                </div>
                <div className="col-lg-4">
                    <p>
                        <Link to="/historial-paciente" style={{textDecoration:"none",color:"#fff"}}>
                            Historial Paciente
                        </Link>
                    </p>
                </div>
                <div className="col-lg-4">
                    <p>
                        <Link to="/agendar-cita" style={{textDecoration:"none",color:"#fff"}}>
                            Agendar Cita
                        </Link>
                    </p>
                </div>
            </div>
            <div class="dos" className="row">
                <div className="col-lg-4">
                    <p>Nuestras Sedes</p>
                </div>
                <div className="col-lg-4">
                    <p>
                        <Link to="/pqr" style={{textDecoration:"none",color:"#fff"}}>
                            PQR
                        </Link>
                    </p>
                </div>
                <div className="col-lg-4">
                    <p>Lorem</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer