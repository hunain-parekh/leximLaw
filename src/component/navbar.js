import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export const Navbar = () => {
const [checkCount,setCheckCount] = useState(0);

  const googleTranslateElementInit = () => {
    try {
      
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false
        },
        "google_translate_element"
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {    
      try {
        
        let checkAlreadyAdded = document.getElementsByClassName('goog-te-combo')
        console.log(checkAlreadyAdded[0]);
        if(checkAlreadyAdded[0]){
          console.log("Translator already added");
        }else{   
          setCheckCount(checkCount+1)
          var addScript = document.createElement("script");
          if(checkCount == 0){
            addScript.setAttribute(
              "src",
              "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            );
            document.body.appendChild(addScript);
            window.googleTranslateElementInit = googleTranslateElementInit;
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  }, []);
  console.log(checkCount);

  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src={logo} height={80} width={150}/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Plans
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/plan/business">Business Law</Link></li>
                  <li className='dropright sub-menu'>
                    <Link className="dropdown-item " to="/plan/immigration"> 
                      Immigration
                    </Link>
                      {/* <div class="dropdown-menu">
                        <li><Link className="dropdown-item" to="/plan/immigration/family">Family Visas</Link></li>
                        <li><Link className="dropdown-item" to="/plan/immigration/workvisas">Work Visas</Link></li>
                        <li><Link className="dropdown-item" to="/plan/immigration/studentvisa">Student Visa</Link></li>
                        <li><Link className="dropdown-item" to="/plan/immigration/investmentvisas">Investment Visas</Link></li>
                        <li><Link className="dropdown-item" to="/plan/immigration/assylumvisas">Assylum Visas</Link></li>
                        <li><Link className="dropdown-item" to="/plan/immigration/uandtvisas">U And T Visas</Link></li>
                        <li><Link className="dropdown-item" to="/plan/immigration/citizenship">Citizenship</Link></li>
                        <li><Link className="dropdown-item" to="/plan/immigration/vawa">VAWA</Link></li>
                        <li><Link className="dropdown-item" to="/plan/immigration/daca">DACA</Link></li>
                        <li><Link className="dropdown-item" to="/plan/immigration/other">Other</Link></li>
                      </div> */}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/privacy">Privacy</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <div id="google_translate_element"></div>
              </li>
           
            </ul>
          </div>
        </div>
      </nav>
  )
}
