import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <div className="mainFooter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <a href='' className="logo">LEXOMLAW</a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        {/* <h5>Quick Links</h5> */}
                        <ul style={{textAlign:"left"}}>
                            <li><Link to="/"> Home</Link></li>
                            <li><Link to="/about"> About</Link></li>
                            <li><a href=""> Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        {/* <h5>Plans</h5> */}
                        <ul  style={{textAlign:"left"}}>
                            <li><Link to="/plan/business"> Business</Link></li>
                            <li><Link to="/plan/immigration"> Immigration</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        {/* <h5>Socials</h5> */}
                        <ul  style={{textAlign:"left"}}>
                            <li><a href=""> Facebook</a></li>
                            <li><a href=""> Instagram</a></li>
                            <li><a href=""> LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="miniFooter">
            Copyright - 2023
        </div>
    </footer>
  )
}
