import React from 'react';

const Card = (props) => (
    <button className = 'btn picture' data-id={props.id} onClick={() => props.onClick(props.id)}>
        <img className='hero' src={props.src} alt={props.id}/>
    </button>
    )

export default Card;