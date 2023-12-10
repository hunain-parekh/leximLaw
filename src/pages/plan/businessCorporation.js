import React, { useState } from 'react'
import businessImg1 from '../../assets/images/businessImg1.png'
import offImg from '../../assets/images/offImg.png'
import { DatePickerSection } from '../../component/datePickerSection'
import { ImmigrationPlan } from '../../component/immigrationPlan'

import familyIco from '../../assets/images/familyIco.svg'
import workIco from '../../assets/images/workIco.svg'
import asstetIco from '../../assets/images/asstetIco.svg'
import assylumIco from '../../assets/images/assylumIco.svg'
import HaveQuestionForm from '../../component/haveQuestionForm'
import { Link } from 'react-router-dom'

export const BusinessCorporation = () => {


    const [formData, setFormData] = useState({
        name: "",
        lastname:"",
        email: "",
        character:"",
    
      });
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, lastname, character } = formData;
    
        if (name.trim() === "" || email.trim() === "" ) {
          // Show an alert if either of the fields is empty
          alert("Please fill in all required fields.");
        } else {
          // Perform your form submission logic here
          console.log("Form submitted");
          alert("Form submitted");
        }
      };

  return (
    <div className="planPage">
        <div className="banner">
            <div className="container">
                <h1>BUSINESS</h1>
            </div>
        </div>
        <div className="container">
            <section className="sec1">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content">
                            <p>Unlock the full potential of your business with the expertise of Lexom Law. Our team of seasoned attorneys specializes in corporate law, commercial law, employment law, intellectual property, and regulatory compliance. With a comprehensive range of services, we are dedicated to safeguarding your interests and ensuring steadfast compliance with the law. </p>
                            <p>At Lexom Law, our client-centric approach lies at the heart of everything we do. We take the time to understand your unique needs and goals, allowing us to deliver practical and effective legal solutions tailored specifically to your business. Count on our proactive guidance, unwavering commitment to excellence, and our steadfast dedication to building long-lasting relationship that truly set up apart.</p>
                            <p>Take the first step towards unleashing your business’s potential. Contact Lexom Law today to schedule a consultation with our experienced attorneys. Discover how our trusted legal consult can help your business thrive in today’s competitive environment.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="imgDiv">
                            <img className='img-fluid' src={businessImg1} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <Link className="chooseBtn" to={"/payment/corporation"} >Choose a Plan for Business</Link>

            {/* <HaveQuestionForm /> */}


            <section className="quickConSec">
        <div className="container">
          <div className="row ai-center">
            <div className="col-md-7">
              <h1>INQUIRY FORM</h1>
            </div>
            <div className="col-md-5">
              <form className="inquiryForm" onSubmit={handleSubmit}>
                <div className="title">Ask Your Question</div>
                <div className="form-group d-flex">
                  <input
                    className="form-control me-4"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                  />

                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group gap">
                  <select
                    className="form-control"
                    placeholder="Reason"
                    required
                  >
                    <option value="" selected="selected" disabled>
                      Reason{" "}
                    </option>
                    <option value="">Business Law</option>
                    <optgroup label="Immigration Law">
                      <option value="oranges1">Family Based Residency</option>
                      <option value="oranges2">Marriage Based Residency</option>
                      <option value="oranges3">Investment Visas</option>
                      <option value="oranges3">Work Visas</option>
                      <option value="oranges3">Victims Of Crime</option>
                      <option value="oranges3">Asylum & Refugee</option>
                      <option value="oranges3">Citizenship</option>
                      <option value="oranges3">Other</option>
                    </optgroup>
                  </select>
                  <i className="fas fa-chevron-down" id="drop_down"></i>
                </div>


                <input
                    className="form-control"
                    type="file"
                    name="file"
                    value={formData.file}
                    onChange={handleChange}
                    accept=".pdf, .doc, .docx" // Specify accepted file types if needed
                  />


                <div className="form-group">
                  <textarea
                    className="form-control"
                    type="text"
                    name="char"
                    value={formData.char}
                    onChange={handleChange}
                    required
                    id=""
                    rows="3"
                    placeholder="Ask Your Questions (500 characters)"
                    maxLength={120}
                  ></textarea>
                </div>
                <button className="submitBtn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
           
        </div>
    </div>
  )
}


