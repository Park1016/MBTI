import React from 'react';

const Question = ({questions}) => {
    const qArray = Object.values(questions.q);
    const q = qArray.join("");
    const a = Object.values(questions.a);

    return (
        <ul>
            <li>{q}</li>
            <div>
                <p>{a[0].answer}</p>
                <p>{a[1].answer}</p>
            </div>
        </ul>
    )
}

export default Question;