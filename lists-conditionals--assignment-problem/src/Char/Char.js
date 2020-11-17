import React from 'react';
import "./Char.css"

const Char = (props) => {
    return (
        <div className="Char">
            <p
            onClick={props.click}>{props.character}</p>
        </div>
    )

}

export default Char;