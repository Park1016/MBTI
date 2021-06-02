import React from 'react';

const Question = ({questions}) => {
    const qArray = Object.values(questions.q);
    const q = qArray.join("");
    const a = Object.values(questions.a);

    const onAnswer = (e, type) => {
        const target = e.currentTarget;
        console.log(target);
        console.log(type);
    }

    const onContainer =(e) => {
        // console.log(e.currentTarget);
    }

    return (
        <ul onClick={(e)=>{onContainer(e)}}>
            <li>{q}</li>
            <div>
                <button onClick={(e)=>onAnswer(e,a[0].type)}>{a[0].answer}</button>
                <button onClick={(e)=>onAnswer(e,a[1].type)}>{a[1].answer}</button>
            </div>
        </ul>
    )
}

export default Question;