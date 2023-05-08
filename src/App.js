import CardList from './components/gameField/cardList';
import GameMenu from './components/gameMenu/gameMenu';
import { useState, useEffect } from 'react';
import heroes from './components/cardsImport';
import './App.scss';

const allData = heroes;

const shuffleCards = (array, dif) => {
    switch (dif) {
        case 0:
            return [...array.slice(array.length / 2), ...array.slice(array.length / 2)]
                .sort(() => Math.random() - 0.5)
                .map((card) => ({ ...card, id: Math.random() }));
        case 1:
            return [...array.slice(array.length / 2 - 2), ...array.slice(array.length / 2 - 2)]
                .sort(() => Math.random() - 0.5)
                .map((card) => ({ ...card, id: Math.random() }));
        case 2:
            return [...array, ...array]
                .sort(() => Math.random() - 0.5)
                .map((card) => ({ ...card, id: Math.random() }));
        default:
            break;
    }
};

function App() {
    const [gameState, setGameState] = useState('menu');
    const [difficult, setDifficult] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [cardList, setCardList] = useState();
    const [choiseOne, setChoiseOne] = useState();
    const [choiseTwo, setChoiseTwo] = useState();
    const [score, setScore] = useState(0);
    const [turns, setTurns] = useState(0);
    const [leaders, setLeaders] = useState([
        { name: 'Nuntlesko', scores: 9999999999 },
        { name: 'toha sadness', scores: 12332 },
        { name: 'боря могила', scores: 12331 },
    ]);
    let count = 0;
    /*---------------Проверяем все ли карты открыты----------------*/
    useEffect(() => {
        cardList &&
            cardList.forEach((card) => {
                if (card.matched) {
                    count++;
                }
                if (count === cardList.length) {
                    setTimeout(() => {
                        resetTurn();
                    }, 1000);
                    setTimeout(() => {
                        playerWin();
                    }, 1000);
                }
            });
    }, [cardList]);
    /*---------------Проверяем выбор карт----------------*/
    useEffect(() => {
        if (choiseOne && choiseTwo) {
            setDisabled(true);
            if (choiseOne.name === choiseTwo.name) {
                setCardList((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.name === choiseOne.name) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    });
                });
                resetTurn();
                setScore(score + (10 - difficult));
            } else {
                if (score > 4) {
                    setScore(score - 4);
                }
                setTimeout(() => {
                    resetTurn();
                }, 800);
            }
        }
    }, [choiseOne, choiseTwo]);

    /*---------------Обнуляем ход----------------*/

    const resetTurn = () => {
        setChoiseOne(null);
        setChoiseTwo(null);
        setTurns((prevTurns) => prevTurns + 1);

        setDisabled(false);
    };

    /* Текущая выбранная карта */
    function setCurrentCard(card) {
        if (choiseOne && card.id !== choiseOne.id) {
            setChoiseTwo(card);
        } else {
            setChoiseOne(card);
        }
    }
    function startGame(dif) {
        setDifficult(dif);
        setGameState('game');

        setCardList(shuffleCards(allData, dif));
    }
    function about() {
        setGameState('about');
    }
    function menu() {
        setGameState('menu');
        setScore(0);
    }
    function stateDifficult() {
        setGameState('difficult');
    }
    function auth() {
        setGameState('auth');
    }
    function playerWin() {
        setGameState('win');
        setCardList(null);
    }

    return (
        <div className={gameState + ' App'}>
            {!cardList ? (
                <GameMenu
                    startGame={startGame}
                    gameState={gameState}
                    score={score}
                    about={about}
                    menu={menu}
                    stateDifficult={stateDifficult}
                    auth={auth}
                    leaders={leaders}
                />
            ) : (
                <CardList
                    cards={cardList}
                    choiseOne={choiseOne}
                    choiseTwo={choiseTwo}
                    setCurrentCard={setCurrentCard}
                    disabled={disabled}
                    score={score}
                />
            )}
        </div>
    );
}

export default App;
