import { useEffect } from 'react';
import logo from './logo.svg';
import { BrowserRouter, BrowserRouter as Router,Route,Switch, useLocation } from "react-router-dom";

import './App.css';
import { BusinessCorporation } from './pages/plan/businessCorporation';
import { Navbar } from './component/navbar';
import { Footer } from './component/footer';
import { Immigration } from './pages/plan/immigration';
import { FamilyVisas } from './pages/plan/familyVisas';
import { WorkVisas } from './pages/plan/workVisas';
import { InvestmentVisas } from './pages/plan/investmentVisas';
import { AssylumVisas } from './pages/plan/assylum';
import { UandTVisas } from './pages/plan/uAndTvisas';
import { Citizenship } from './pages/plan/citizenship';
import { Vawa } from './pages/plan/vawa';
import { Daca } from './pages/plan/daca';
import { StudentVisas } from './pages/plan/studentVisa';
import { OtherVisas } from './pages/plan/otherVisa';
import { Home } from './pages/home';
import { CorporationPayment } from './pages/payment/corporationPayment';
import { FamilyPayment } from './pages/payment/familyPayment';
import { WorkPayment } from './pages/payment/workPayment';
import { InvestmentPayment } from './pages/payment/investmentPayment';
import { AssylumPayment } from './pages/payment/assylum';
import { UandTPayment } from './pages/payment/uAndTPayment';
import { NaturalizationPayment } from './pages/payment/naturalization';
import { VawaPayment } from './pages/payment/vavaPAyment';
import { DacaPayment } from './pages/payment/daca';
import { StudentVisaPayment } from './pages/payment/studentVisa';
import { AboutUs } from './pages/aboutUs';
import Privacy from './pages/plan/Privacy';

function App() {


  const location = useLocation()

  useEffect(()=>{
    window.scrollTo(0, 0);
},[location.pathname])

  return (
    <div className="App">
       <Navbar />
      <Switch>
            <Route exact path="/"  >
              <Home />
            </Route>
            <Route exact path="/plan/business"  >
              <BusinessCorporation />
            </Route>
            <Route exact path="/plan/immigration"  >
              <Immigration />
            </Route>
            <Route exact path="/about"  >
              <AboutUs />
            </Route>
            <Route exact path="/privacy"  >
              <Privacy />
            </Route>
            <Route exact path="/payment/corporation"  >
              <CorporationPayment />
            </Route>

            <Route exact path="/plan/immigration/family"  >
              <FamilyVisas />
            </Route>
           
            <Route exact path="/plan/immigration/workvisas"  >
              <WorkVisas />
            </Route>
           
            <Route exact path="/plan/immigration/investmentvisas"  >
              <InvestmentVisas />
            </Route>

            <Route exact path="/plan/immigration/assylumvisas"  >
              <AssylumVisas />
            </Route>

            <Route exact path="/plan/immigration/uandtvisas"  >
              <UandTVisas />
            </Route>

            <Route exact path="/plan/immigration/citizenship"  >
              <Citizenship />
            </Route>

            <Route exact path="/plan/immigration/vawa"  >
              <Vawa />
            </Route>

            <Route exact path="/plan/immigration/daca"  >
              <Daca />
            </Route>

            <Route exact path="/plan/immigration/studentvisa"  >
              <StudentVisas />
            </Route>

            
            <Route exact path="/plan/immigration/other"  >
              <OtherVisas />
            </Route>
           
            {/* <Route exact path="/plan/immigration/family"  >
              <FamilyVisas />
            </Route>
            <Route exact path="/plan/immigration/workvisas"  >
              <WorkVisas />
            </Route>
            <Route exact path="/plan/immigration/investmentvisas"  >
              <InvestmentVisas />
            </Route>
            <Route exact path="/plan/immigration/assylumvisas"  >
              <AssylumVisas />
            </Route>
            <Route exact path="/plan/immigration/uandtvisas"  >
              <UandTVisas />
            </Route>
            <Route exact path="/plan/immigration/citizenship"  >
              <Citizenship />
            </Route>
            <Route exact path="/plan/immigration/vawa"  >
              <Vawa />
            </Route>
            <Route exact path="/plan/immigration/daca"  >
              <Daca />
            </Route>
            <Route exact path="/plan/immigration/studentvisa"  >
              <StudentVisas />
            </Route>
            <Route exact path="/plan/immigration/other"  >
              <OtherVisas />
            </Route>
            
            <Route exact path="/payment/family"  >
              <FamilyPayment />
            </Route>
            <Route exact path="/payment/work"  >
              <WorkPayment />
            </Route>
            <Route exact path="/payment/investment"  >
              <InvestmentPayment />
            </Route>
            <Route exact path="/payment/assylum"  >
              <AssylumPayment />
            </Route>
            <Route exact path="/payment/uandt"  >
              <UandTPayment />
            </Route>
            <Route exact path="/payment/naturalization"  >
              <NaturalizationPayment />
            </Route>
            <Route exact path="/payment/vawa"  >
              <VawaPayment />
            </Route>
            <Route exact path="/payment/daca"  >
              <DacaPayment />
            </Route>
            <Route exact path="/payment/studentvisa"  >
              <StudentVisaPayment />
            </Route> */}
          
            {/* <Route path="/">
              <Home />
            </Route> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
