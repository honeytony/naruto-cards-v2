import React from 'react';
import Card from './card';
import './gameField.scss';
const CardList = ({ cards, setCurrentCard, choiseOne, choiseTwo, disabled, score }) => {
    return (
        <div className="field">
            <div className="header">
                <div className="logo"></div>
                <h3>Scores: {score}</h3>
            </div>
            <div className="cardList">
                {cards.map((card, index) => (
                    <Card
                        setCurrentCard={setCurrentCard}
                        index={index}
                        active={card === choiseOne || card === choiseTwo || card.matched}
                        src={card.src}
                        key={card.id}
                        card={card}
                        disabled={disabled}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardList;
