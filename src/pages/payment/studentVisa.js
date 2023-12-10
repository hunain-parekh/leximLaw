import React, {  useEffect  } from 'react'
import checkIco from "../../assets/images/checkIco.svg"
import arrowDown from "../../assets/images/arrowDown.svg"
import StripeCheckout from 'react-stripe-checkout';

export const StudentVisaPayment = () => {
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
                <h1>Student Visa</h1>
            </div>
        </div>
           {/* case 1 */}
           <div className="planMain">
            <div className="container">
                <div className="mb-4">
                    <div className="mHeading">Student Visa</div>
                </div>
                <div className="description">
                    <h5>Filing Fee depends on each category</h5>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="planCardMain">
                            <div className="planCard">
                                <div className="head">Plan 1 ( 1 months )</div>
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
                                <button className="planBtn">$200 monthly </button>
                                </StripeCheckout>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="planCardMain">
                            <div className="planCard">
                                <div className="head">Plan 2 (6 months )</div>
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
                                <button className="planBtn">$333 monthly <br /> total $1998</button>
                                </StripeCheckout>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <h4 className="discount">Expedited Process All Upfront for 10% Discount.</h4>
           
           
           
                <div className="btns-after-family2">
                <div className="dist-btn1">
                  <button className="planBtn">$180 (After Discount)</button>
                </div>
                <div className="dist-btn2">
                  <button className="planBtn">$1798 (After Discount)</button>
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
            // {
            //     title:"Help with community with US institutions (limit 3)",
            // },
            {
                title:"Review the final University Application",
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
                title:"Help with community with US Institutions (limit 3)",
            },
            {
                title:"Get Addmission to a US Institution & University. ",
            },
            {
                title:"Pay the SEVIS Fee (This Fee is Separate)",
            },
            {
                title:"Consular Processing: File Visa Application",
            },
            {
                title:"Guide You through Interview",
            },
            {
                title:"Answer Your Questions about Your Move to US.",
            },

        ]
    },
   
}
