import React from 'react'

export default function HaveQuestionForm() {
  return (
    <section className='quickConSec'>
    <div className="container">
        <div className="row ai-center">
            <div className="col-md-7">
                <h1>INQUIRY FORM</h1>
            </div>
            <div className="col-md-5">
                <from className="inquiryForm">
                    <div className="title">Have A Quick Question For Us?</div>
                    <div className="form-group d-flex">

                        <input className='form-control me-4' type="text" placeholder='First Name' />
                        <input className='form-control' type="text" placeholder='Last Name' />
                    </div>
                    <div className="form-group">
                        <input className='form-control' type="text" placeholder='Email Address
' />
                    </div>
                    <div className="form-group">
                    <select className='form-control' placeholder='Reason'>
                        <option value="" selected="selected" disabled>Reason</option>
                        <option value="" >Business Law</option>
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
                    </div>
                    <div className="form-group">
                        <textarea className='form-control' name="" id=""  rows="3" placeholder='Ask Your Questions'></textarea>
                    </div>
                    <button className="submitBtn">Submit</button>
                </from>
            </div>
        </div>
    </div>
</section>
  )
}
