import React from 'react';

const Card = ({ src, setCurrentCard, index, active, card, disabled }) => {
    function handleClick(card) {
        if (!disabled) {
            setCurrentCard(card);
        }
    }
    return (
        <div className={active ? 'card active' : 'card'} onClick={() => handleClick(card)}>
            <img width="200" src={src} alt={index} />
            <div className="card-back">
                <div className="sharingan"></div>
            </div>
        </div>
    );
};

export default Card;
