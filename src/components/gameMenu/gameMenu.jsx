import React from 'react';
import './gameMenu.scss';

const GameMenu = ({ startGame, gameState, about, score, menu, stateDifficult, auth, leaders }) => {
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
                        <div className="buttons">
                            <button onClick={() => menu()}>Back to Main Menu</button>
                        </div>
                    </div>
                    <br />
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
                        <h2>You win! Score: {score}</h2>
                        <div className="buttons">
                            <button onClick={() => menu()}>Back to Main Menu</button>
                        </div>
                    </div>
                </div>
            );
        case 'auth':
            return (
                <div className="container auth">
                    <div className="logo"></div>
                    <form action="#">
                        <h3>Enter your name</h3>
                        <input type="text" />
                        <button onClick={() => startGame(2)}>Submit</button>
                    </form>
                </div>
            );
        default:
            return (
                <div className="container">
                    <div className="left">
                        <div className="logo"></div>
                        <div className="buttons">
                            <button onClick={() => auth()}>Play</button>
                            <button onClick={() => about()}>Author</button>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="right">
                        <h2>Scores</h2>
                        <ul>
                            {leaders &&
                                leaders.map((leader, index) => {
                                    return (
                                        <li key={index}>
                                            {index + 1}. {leader.name} - {leader.scores}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            );
    }
};

export default GameMenu;
