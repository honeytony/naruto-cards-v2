import React from 'react';

const Card = ({ src, setCurrentCard, index, active, card, disabled }) => {
    function handleClick(card) {
        if (!disabled) {
            setCurrentCard(card);
        }
    }
    return (
        <div className={active ? 'card active' : 'card'} onClick={() => handleClick(card)}>
            <div
                className="card-bg"
                style={{
                    background: `url('${card.card}')`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                }}>
                <img src={card.heroImg} alt={index} />
            </div>
            <div className="card-back">
                <div className="image"></div>
            </div>
        </div>
    );
};

export default Card;
