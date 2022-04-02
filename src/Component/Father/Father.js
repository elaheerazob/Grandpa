import React from 'react';
import Me from '../Me/Me'
import Sister from '../Sister/Sister'
import Brother from '../Brother/Brother'

const Father = ({house}) => {
    return (
        <div>
            <h2>Father</h2>
            <p> House :{house}</p>
            <Me house={house}></Me>
            <Sister house={house}></Sister>
            <Brother house={house}></Brother>
        </div>
    );
};

export default Father;