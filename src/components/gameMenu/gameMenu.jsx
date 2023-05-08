import React from 'react';
import './gameMenu.scss';

const GameMenu = ({ startGame, gameState, about, score, menu, stateDifficult }) => {
    switch (gameState) {
        case 'about':
            return (
                <div className="container">
                    <div className="git">
                        <p>
                            <a href="https://github.com/honeytony">
                                <img
                                    src="https://avatars.githubusercontent.com/u/103997461?v=4"
                                    alt="honeytony"
                                />
                                github: <span>honeytony</span>
                            </a>
                        </p>
                    </div>
                    <div className="buttons">
                        <button onClick={() => menu()}>Вернуться</button>
                    </div>
                </div>
            );
        case 'difficult':
            return (
                <div className="container">
                    <div className="buttons dif">
                        <h2>Сложность игры</h2>
                        <button onClick={() => startGame(0)}>Легко</button>
                        <button onClick={() => startGame(1)}>Нормально</button>
                        <button onClick={() => startGame(2)}>Тяжело</button>
                    </div>
                </div>
            );
        case 'win':
            return (
                <div className="container">
                    <div className="buttons dif">
                        <h2>Победа даттебае!!! {score} йен в кармане!</h2>
                        <div className="buttons">
                            <button onClick={() => menu()}>Вернуться</button>
                        </div>
                    </div>
                </div>
            );

        default:
            return (
                <div className="container">
                    <div className="logo"></div>
                    <div className="buttons">
                        <button onClick={() => stateDifficult()}>Начать игру</button>
                        <button onClick={() => about()}>Автор</button>
                    </div>
                </div>
            );
    }
};

export default GameMenu;
