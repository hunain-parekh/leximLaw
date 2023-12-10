import React from 'react'
import offImg from '../assets/images/offImg.png'

export const ConsultationForm = () => {
  return (
    <section className="sec2 pt-0">
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
  )
}
