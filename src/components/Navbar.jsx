import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="logo.png" alt="AEnergy logo" className="company-logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Par mums</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pakalpojumi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kontakti</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pieteikties konsultācijai</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;