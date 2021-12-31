import React from 'react'
import Api from './api';
import Accord from './Accord';

const Accordian = () => {
    return (
        <div className='container'>
            <h3 className='heading'>React Js Accordian</h3>
            <div className="scroll">
            {
                Api.map((curElement) => {
                    return <Accord key={curElement.id} question={curElement.question} answer={curElement.answer} />
                })
            }
            </div>
        </div>
    )
}

export default Accordian
