import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
export const NavBar = () => {
    const { login, state } = useContext(AuthContext);
  return (
    <header className="p-3 text-bg-dark">
        <div className="container-fluid">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                 { state?.name}       <strong>PRDCEL</strong>
                    </a>
                </div>
                <div className="text-end">
                
                <button 
                    type="button"  
                    className="btn btn-outline-light m-2"
                    onClick={login}
                >Login</button>
                </div>
            </div>
        </div>
    </header>
  )
}
