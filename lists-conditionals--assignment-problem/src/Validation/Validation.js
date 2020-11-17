import React from 'react';

const Validation = ( props ) =>{
    const tooShort = props.textLength < 5 ? "Text too short" : "Text long enough";
    return (
        <div>
            <p>{tooShort}</p>
        </div>
    )
}


export default Validation;