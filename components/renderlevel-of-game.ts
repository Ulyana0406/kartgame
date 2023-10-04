import { hideFirstPage } from './game-page'
let arr: string[] = [
    'AceSpades',
    'KingSpades',
    'QueenSpades',
    'JackSpades',
    '10Spades',
    '9Spades',
    '8Spades',
    '7Spades',
    '6Spades',
    'AceHeart',
    'KingHeart',
    'QueenHeart',
    'JackHeart',
    '10Heart',
    '9Heart',
    '8Heart',
    '7Heart',
    '6Heart',
    'AceDiamonds',
    'KingDiamonds',
    'QueenDiamonds',
    'JackDiamonds',
    '10Diamonds',
    '9Diamonds',
    '8Diamonds',
    '7Diamonds',
    '6Diamonds',
    'AceClubs',
    'KingClubs',
    'QueenClubs',
    'JackClubs',
    '10Clubs',
    '9Clubs',
    '8Clubs',
    '7Clubs',
    '6Clubs',
]
export let arr2: string[] = []
let step = 0
let score = 0
export function renderLevel(difficulty: string) {
    let numCards = 0
    if (difficulty === 'easy') {
        numCards = 3
        step = 0
        score = 0
        hideFirstPage()
    } else if (difficulty === 'medium') {
        numCards = 6
        score = 0
        step = 0
        hideFirstPage()
    } else if (difficulty === 'hard') {
        numCards = 9
        score = 0
        step = 0
        hideFirstPage()
    }
    console.log('Кол-во карт :', numCards)

    arr.sort(() => Math.random() - 0.5)
    arr = arr.slice(0, numCards)
    arr.forEach((el) => arr.push(el))
    arr.sort(() => Math.random() - 0.5)
    arr2 = arr.map((element) => {
        return element
    })
    console.log('массив пар', arr2)
}
console.log('Счет :', score)
console.log('Шаг:', step)
