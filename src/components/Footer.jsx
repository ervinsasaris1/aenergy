import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="text-light py-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h5>A+Energy SIA</h5>
                    </div>
                    <div className="col-sm-12 col-md-6 contact-footer">
                        <p><a href="mailto:katrinaberzinaa@gmail.com">katrinaberzinaa@gmail.com</a></p>
                        <p className="mb-1"><a href="tel:+37126343136">+371 26 343 136</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;