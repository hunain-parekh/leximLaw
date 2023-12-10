import React, { useState, useEffect, useRef } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FamilyVisas } from '../pages/plan/familyVisas';
import { FamilyPayment } from '../pages/payment/familyPayment';
import { WorkPayment } from '../pages/payment/workPayment';
import { WorkVisas } from '../pages/plan/workVisas';
import { InvestmentVisas } from '../pages/plan/investmentVisas';
import { InvestmentPayment } from '../pages/payment/investmentPayment';
import { AssylumPayment } from '../pages/payment/assylum';
import { AssylumVisas } from '../pages/plan/assylum';
import { StudentVisaPayment } from '../pages/payment/studentVisa';
import { StudentVisas } from '../pages/plan/studentVisa';
import { UandTPayment } from '../pages/payment/uAndTPayment';
import { UandTVisas } from '../pages/plan/uAndTvisas';
import { NaturalizationPayment } from '../pages/payment/naturalization';
import { Citizenship } from '../pages/plan/citizenship';
import { VawaPayment } from '../pages/payment/vavaPAyment';
import { Vawa } from '../pages/plan/vawa';
import { DacaPayment } from '../pages/payment/daca';
import { Daca } from '../pages/plan/daca';
import { OtherVisas } from '../pages/plan/otherVisa';
import backIco from '../assets/images/backIco.png';

export default function ImmigrationModal({show,setShowPayment,showPayment,handleClose,modalData}) {
  const bottomRef = useRef();

  useEffect(()=>{
    window.scrollTo(0, 0);
},[])

  useEffect(()=>{
    let modal11 = document.getElementById('mod')
    if (modal11) {
      modal11.scrollIntoView({ behavior: 'instant' });
    }
},[showPayment])

  return (
    <>
        <Modal show={show} onHide={handleClose} centered ref={bottomRef} id="mod" >
        <Modal.Header closeButton>
          <Modal.Title>
            <span className='goBackPlan' onClick={()=>setShowPayment(false)}>
                {showPayment && 
                    <img src={backIco} alt="" />
                } 
            </span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0'>
                {/* {modalData?.description && modalData?.description.map((item,key)=>(
                <p key={key}>{item}</p>
                ))} */}
                {/* {modalData.showPayment ?
                modalData.paymentComp
                :
                modalData.planComp
                } */}
                {modalData.title == "Family Visas" &&
                <>
                {showPayment ?<FamilyPayment />: <FamilyVisas setShowPayment={setShowPayment} />  }
                </>
                }
                {modalData.title == "Work Visas" &&
                <>
                {showPayment ?<WorkPayment />: <WorkVisas setShowPayment={setShowPayment} />  }
                </>
                }
                {modalData.title == "Investment" &&
                <>
                {showPayment ?<InvestmentPayment />: <InvestmentVisas setShowPayment={setShowPayment} />  }
                </>
                }
                {modalData.title == "Assylum" &&
                <>
                {showPayment ?<AssylumPayment />: <AssylumVisas setShowPayment={setShowPayment} />  }
                </>
                }
                {modalData.title == "Student Visa" &&
                <>
                {showPayment ?<StudentVisaPayment />: <StudentVisas setShowPayment={setShowPayment} />  }
                </>
                }
                {modalData.title == "U & T Visas" &&
                <>
                {showPayment ?<UandTPayment />: <UandTVisas setShowPayment={setShowPayment} />  }
                </>
                }
                {modalData.title == "Nationalization" &&
                <>
                {showPayment ?<NaturalizationPayment />: <Citizenship setShowPayment={setShowPayment} />  }
                </>
                }
                {modalData.title == "VAWA" &&
                <>
                {showPayment ?<VawaPayment />: <Vawa setShowPayment={setShowPayment} />  }
                </>
                }
                {modalData.title == "DACA" &&
                <>
                {showPayment ?<DacaPayment />: <Daca setShowPayment={setShowPayment} />  }
                </>
                }
                {modalData.title == "Other" &&
                <OtherVisas />  
                }
            {/* <p>ahsa</p> */}
        </Modal.Body>
      
    </Modal>
    </>
  )
}
