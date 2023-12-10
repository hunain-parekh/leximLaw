import React, {  useEffect  } from 'react'
import checkIco from "../../assets/images/checkIco.svg"
import arrowDown from "../../assets/images/arrowDown.svg"
import StripeCheckout from 'react-stripe-checkout';

export const VawaPayment = () => {
    const onToken = (token) => {
        console.log(token);
      }


      useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

  return (
    <div className="paymentPage">
        <div className="banner">
            <div className="container">
                <h1>VAWA</h1>
            </div>
        </div>
           {/* case 1 */}
           <div className="planMain">
            <div className="container">
                <div className="mb-4">
                    <div className="mHeading">VAWA</div>
                </div>
                <div className="description">
                    <h5>Filing Fee $435</h5>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="planCardMain">
                            <div className="planCard">
                                <div className="head">Plan 1 ( 6 months )</div>
                                <div className="cardMain">
                                    
                                    {case1.plan1.description.map((item,key)=>(
                                        <div className={item?.title?"poinM":"poinM jc-center"}>
                                            <div className='check'>
                                                <img src={checkIco} alt="" />
                                            </div>
                                            <div>
                                                <div className="title">{item?.title}</div>
                                                <div className="detail">{item?.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='text-center mt-4'>
                            <StripeCheckout
                                        name="Lexim Law"
                                        token={onToken}
                                        stripeKey={process.env.REACT_APP_STRIPE_PRIVATE_KEY}
                                        amount={266 * 100} 
                                        currency="USD"
                                    >
                                <button className="planBtn">$666 monthly <br /> total $4000 </button>
                                </StripeCheckout>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="planCardMain">
                            <div className="planCard">
                                <div className="head">Plan 2 (12 months )</div>
                                <div className="cardMain">
                                  
                                    {case1.plan2.description.map((item,key)=>(
                                        <div className={item?.title?"poinM":"poinM jc-center"}>
                                            <div className='check'>
                                                <img src={checkIco} alt="" />
                                            </div>
                                            <div>
                                                <div className="title">{item?.title}</div>
                                                <div className="detail">{item?.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='text-center mt-4'>
                            <StripeCheckout
                                        name="Lexim Law"
                                        token={onToken}
                                        stripeKey={process.env.REACT_APP_STRIPE_PRIVATE_KEY}
                                        amount={266 * 100} 
                                        currency="USD"
                                    >
                                <button className="planBtn">$333 monthly <br /> total $4000</button>
                                </StripeCheckout>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <h4 className="discount">Expedited Process All Upfront for 10% discount.</h4>

                <div className="btns-after-family2">
                <div className="dist-btn1">
                  <button className="planBtn">$3600 (After Discount)</button>
                </div>
                <div className="dist-btn2">
                  <button className="planBtn">$3600 (After Discount)</button>
                </div>
               
                </div> 
            </div>
        </div>
      

    </div>
  )
}


const case1 ={
    plan1 : {
        description:[
            {
                title:"Unlimited Legal Advice",
            },
            {
                title:"Unlimited Document Review",
            },
            {
                title:"Gather all the documentation",
            },
            {
                title:"File the case",
            },
            {
                title:"Inquiry form the USCIS",
            },
            {
                title:"Respond to RFES",
            },
            {
                title:"Appeal the case",
            },
            {
                title:"Strategic Guidance in your case",
            },
            {
                title:"Proactive Legal Protection",
            },
        ]
    },
    plan2 : {
        description:[
            {
                title:"Unlimited Legal Advice",
            },
            {
                title:"Unlimited Document Review",
            },
            {
                title:"Gather all the documentation",
            },
            {
                title:"File the case",
            },
            {
                title:"Inquiry form the USCIS",
            },
            {
                title:"Respond to RFES",
            },
            {
                title:"Appeal the case",
            },
            {
                title:"Strategic Guidance in your case",
            },
            {
                title:"Proactive Legal Protection",
            },
        ]
    },
   
}
