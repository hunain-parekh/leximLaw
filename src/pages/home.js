import React, { useState } from "react";
import { DatePickerSection } from "../component/datePickerSection";
import offImg from "../assets/images/offImg.png";
import { Link } from "react-router-dom";
import Calendly from "../component/Calendly";

export const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    character: "",
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

    if (name.trim() === "" || email.trim() === "") {
      // Show an alert if either of the fields is empty
      alert("Please fill in all required fields.");
    } else {
      // Perform your form submission logic here
      console.log("Form submitted");
      alert("Form submitted");
    }
  };

  return (
    <div className="homePage planPage">
      <div className="banner">
        <div className="container">
          <h1>
            Unlock Unlimited Legal Support and Protection with Our Exclusive
            Subscription Service
          </h1>
        </div>
      </div>
      <section className="aboutUsSec">
        <div className="container">
          <h1 className="sHeading">Introducing Lexom Law</h1>
          <p style={{textAlign:'justify'}}>
            Where age-old tradition meets modern ambition, Lexom Law stands at
            the crossroads of dreams and reality. Our name, a blend of the Latin
            "Lex" for "law" and the essence of "Omnia" meaning "all", symbolizes
            our commitment to serve everyone, especially those with a vision.
            <br/>
            <br/>
            For the budding entrepreneur, the passionate small business, or the
            hopeful individual seeking a brighter future on American shores, we
            are your bridge. In the intricate realms of business and immigration
            law, Lexom is not just a law firm—it's a partner in your journey.
            <br/>
            <br/>
             We understand the dreams that drive you, and with our transparent
            subscription and flat fee models, we make sure that achieving them
            doesn’t come with unforeseen legal costs. At Lexom, we don’t just
            provide legal services; we champion aspirations. Welcome to Lexom
            Law – Where Dreams Meet Determined Advocacy.
          </p>
        </div>
      </section>

      <section className="serviceSec">
        <div className="container">
          <h1 className="sHeading">Services</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="card__bx card__1">
                <div className="card__data">
                  <div className="card__icon">
                    <div className="card__icon-bx">
                      {/* <i className="fa-solid fa-pen-ruler"></i> */}
                      <i class="fas fa-business-time"></i>
                    </div>
                  </div>
                  <div className="card__content">
                    <h3>Business Law</h3>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                    <Link to="/plan/business">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card__bx card__1">
                <div className="card__data">
                  <div className="card__icon">
                    <div className="card__icon-bx">
                      <i className="fas fa-globe-americas"></i>
                    </div>
                  </div>
                  <div className="card__content">
                    <h3>Immigration</h3>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                    <Link to="/plan/immigration">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="practiceAreaSec">
        <div className="container">
          <h1 className="sHeading">OUR PRACTICE AREAS</h1>
          <div className="row">
            {areas?.map((item, key) => (
              <div className="col-lg-3 col-md-6 mb-3" key={key}>
                <Link to={item?.path} className="area_box">
                  <p className="mb-0">{item?.name}</p>
                  <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <div className="container">
        <div className="heading">Questions about legal problem?</div>

        {/* <section className="sec2 pt-0">
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
                </section> */}
        <DatePickerSection />
      </div>
    </div>
  );
};

const areas = [
  {
    name: "Business Law",
    path: "/plan/business",
  },
  {
    name: "Immigration",
    path: "/plan/immigration",
  },
  {
    name: "Family Visas",
    path: "/plan/immigration/family",
  },
  {
    name: "Work Visas",
    path: "/plan/immigration/workvisas",
  },
  {
    name: "Student Visa",
    path: "/plan/immigration/studentvisa",
  },
  {
    name: "Investment Visas",
    path: "/plan/immigration/investmentvisas",
  },
  {
    name: "Assylum Visas",
    path: "/plan/immigration/assylumvisas",
  },
  {
    name: "U And T Visas",
    path: "/plan/immigration/uandtvisas",
  },
  {
    name: "Citizenship",
    path: "/plan/immigration/citizenship",
  },
  {
    name: "VAWA",
    path: "/plan/immigration/vawa",
  },
  {
    name: "DACA",
    path: "/plan/immigration/daca",
  },
  {
    name: "Others",
    path: "/plan/immigration/other",
  },
];
