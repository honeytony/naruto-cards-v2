import narutoImg from '../Assets/Images/cards/naruto/hero.png';
import narutoCard from '../Assets/Images/cards/naruto/card.svg';

import sasukeImg from '../Assets/Images/cards/sasuke/hero.png';
import sasukeCard from '../Assets/Images/cards/sasuke/card.svg';

import sakuraImg from '../Assets/Images/cards/sakura/hero.png';
import sakuraCard from '../Assets/Images/cards/sakura/card.svg';

import kakashiImg from '../Assets/Images/cards/kakashi/hero.png';
import kakashiCard from '../Assets/Images/cards/kakashi/card.svg';

import minatoImg from '../Assets/Images/cards/minato/hero.png';
import minatoCard from '../Assets/Images/cards/minato/card.svg';

import jirayaImg from '../Assets/Images/cards/jiraya/hero.png';
import jirayaCard from '../Assets/Images/cards/jiraya/card.svg';

const heroes = [
    {
        name: 'Naruto Uzumaki',
        heroImg: narutoImg,
        card: narutoCard,
        matched: false,
    },
    {
        name: 'Sasuke Uchiha',
        heroImg: sasukeImg,
        card: sasukeCard,
        matched: false,
    },
    {
        name: 'Sakura Haruno',
        heroImg: sakuraImg,
        card: sakuraCard,
        matched: false,
    },
    {
        name: 'Kakashi Hatake',
        heroImg: kakashiImg,
        card: kakashiCard,
        matched: false,
    },
    {
        name: 'Minato Namikaze',
        heroImg: minatoImg,
        card: minatoCard,
        matched: false,
    },
    {
        name: 'Jiraya',
        heroImg: jirayaImg,
        card: jirayaCard,
        matched: false,
    },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default heroes;
