import React, { useState } from 'react';

const Accord = ({answer, question}) => {

    const [data, setData] = useState(false);

    const showAnswer = () => {
        setData(!data);
    }

    return(
        <>
            <div className="qa-div">
                <div className="question-div">
                    <span className='icon' onClick={showAnswer}>{(!data) ? '➕' : "➖"}</span>
                    <h4 className='question'>{question}</h4>
                </div>
                <p className='answer'>{data && answer}</p>
            </div>
           
        </>
    );

}

export default Accord;
