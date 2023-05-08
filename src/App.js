import CardList from './components/gameField/cardList';
import GameMenu from './components/gameMenu/gameMenu';
import { useState, useEffect } from 'react';
import './App.scss';

const allData = [
    {
        src: 'https://i.pinimg.com/736x/e1/a7/2c/e1a72c43b9a471226f8bf0050878a6b9.jpg',
        matched: false,
    },
    {
        src: 'https://64.media.tumblr.com/207795c0672d4d18cadfeb98e48f7c26/tumblr_o3vrw8eBHi1v3ko1mo1_1280.jpg',
        matched: false,
    },
    {
        src: 'https://cs13.pikabu.ru/post_img/big/2019/11/06/10/1573057699189042928.jpg',
        matched: false,
    },
    {
        src: 'https://i.pinimg.com/originals/4c/7d/67/4c7d67627861ed356d9ea587981cf2a4.jpg',
        matched: false,
    },
    {
        src: 'https://cs7.pikabu.ru/post_img/big/2018/06/20/12/1529528232141314457.jpg',
        matched: false,
    },
    {
        src: 'https://flomaster.club/uploads/posts/2021-12/1639500741_4-flomaster-club-p-shikamaru-nara-dlya-srisovki-krasivie-risu-4.jpg',
        matched: false,
    },
    {
        src: 'https://i.pinimg.com/736x/4d/d3/6f/4dd36f86c06b45ebfdb94ea9bd897100.jpg',
        matched: false,
    },
    {
        src: 'https://anime-fans.ru/wp-content/uploads/2021/01/Kak-Minato-voobshhe-stal-CHetvertym-Hokage.jpg',
        matched: false,
    },
];
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
            if (choiseOne.src === choiseTwo.src) {
                setCardList((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.src === choiseOne.src) {
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
