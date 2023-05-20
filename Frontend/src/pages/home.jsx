import React from "react";
import { useState } from "react";
// import Accordion from 'react-bootstrap/Accordion';

//textmetrics
function Home() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected == i){
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className='wrapper'>
          <div className='accordion'>
          {data.map((item,i) => (
            <div className='item'>
                <div className='title' onClick={()=> toggle (i)}>
                    <h6>{item.question}</h6>
                    {/* <FontAwesomeIcon icon="fa-solid fa-chevron-up" /> */}
                       <span>{selected === i ? '⌄' : '^' } </span>
                         </div>
                     <div className ={selected === i ?  'content show' : 'content' }>{item.answer}</div>
                </div>
         ))}
            </div>
          </div>
    );
  }


  const data = [
    {
        question: 'What is housing court?',
        answer: 'The New York City Housing Court is a Part of the Civil Court where landlords/owners and tenants go to solve their housing problems.'
        





    },
    {
    question: 'What should I do if I receive an eviction notice?',
    answer: 'The New York City Housing Court is a Part of the Civil Court where landlords/owners and tenants go to solve their housing problems.'
    

    }

  ]


  
  export default Home;