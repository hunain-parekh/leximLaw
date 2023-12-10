import React, { useState, useEffect } from 'react'
import businessImg1 from '../../assets/images/businessImg1.png'
import offImg from '../../assets/images/offImg.png'
import { DatePickerSection } from '../../component/datePickerSection'
import { ImmigrationPlan } from '../../component/immigrationPlan'

import HaveQuestionForm from '../../component/haveQuestionForm'
import { immigrationData } from '../../component/immigrationPlanData'
import { Link } from "react-router-dom";

export const Immigration = () => {

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


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
  return (
    <div className="planPage immigration">
        <div className="banner">
            <div className="container">
                <h1>IMMIGRATION</h1>
            </div>
        </div>
        <div className="container">
            <section className="sec1">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content">
                            <p>With specialized expertise in immigration law, as well as strong foundation in corporate law, commercial law, employment law, intellectual property, and regulatory compliance, Lexom Law provides a comprehensive range of services dedicated to protecting your interests and ensuring compliance with immigration regulations.</p>
                            <p>At Lexom Law, our client-centric approach lies at the core of our immigration law practice. We understand that each immigration case is unique, and we take the time to grasp your specific needs and goals, delivering practical and effective legal solutions tailored to your immigration journey. Count on our proactive guidance, unwavering commitment to excellence, and our steadfast dedication to building long-lasting relationships that truly set us apart. </p>
                            <p>Take the first step towards achieving your immigration goals. Contact Lexom Law today to schedule a consultation with us. Discover how our trusted legal counsel can help navigate the complexity of immigration law. </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="imgDiv">
                            <img className='img-fluid' src={businessImg1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <ImmigrationPlan item={immigrationData} />


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


            {/* <HaveQuestionForm /> */}

            {/* <section className="sec2">
                <div className="heading">Questions about legal problem?</div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="offMain">
                            <div className="text">10% off on your first month subscription.</div>
                            <div className="imgDiv">
                                <img src={offImg} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="formMain">
                            <div className="col1">
                                <div className="title">Sign up for legal plan</div>
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Name' />
                                </div>
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Email' />
                                </div>
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Phone' />
                                </div>
                                <button className="submitBtn">Book Now ($150)</button>
                            </div>
                            <div className="col1">
                                <div className="title">Inquire Quick Consultation</div>
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Name' />
                                </div>
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Email' />
                                </div>
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Phone' />
                                </div>
                                <button className="submitBtn">Inquire</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DatePickerSection /> */}
        </div>
    </div>
  )
}

