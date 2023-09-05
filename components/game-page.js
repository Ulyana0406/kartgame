export function renderLevel(difficulty) {
    let numCards = 6
    if (difficulty === 'easy') {
        numCards = 6
        hideFirstPage()
    } else if (difficulty === 'medium') {
        numCards = 12
        hideFirstPage()
    } else if (difficulty === 'hard') {
        numCards = 18
        hideFirstPage()
    }
    console.log('Кол-во карт :', numCards)

    arr = arr
        .map((i) => [Math.random(), i])
        .sort()
        .map((i) => i[1])
    arr = arr.slice(0, numCards / 2)
    let arrB = Array.from(arr)
    let arrC = [...arr, ...arrB]
    arr = arrC
        .map((i) => [Math.random(), i])
        .sort()
        .map((i) => i[1])
    console.log(arr)
}

let arr = [
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

let a = []
let score = 0
console.log('Счет :', score)

export function renderGame(isAct) {
    hideFirstPage()
    let cardsHtml = arr
        .map((back) => {
            return `<div id="back" class="back"><img class="playingFieldCard" id="back" data-name="${back}" src="./cards/back.jpg" alt=""></div>`
        })
        .join('')
    let cardsBackHtml = arr
        .map((back) => {
            return `<div id="back" class="back"><img class="playingFieldCard" id="back" data-name="${back}" src="./cards/${back}.jpg" alt=""></div>`
        })
        .join('')
    let appElGame = document.getElementById('appGame')
    let gameHtml = `
  <div class="playingField center">
      <div class="playingFieldHeader">
          <div class="time">
              <p class="time">00.00<p>
          </div>
          <div>
              <button class="play__button returnButton">Начать заново</button>
          </div>
      </div>
      <div class="playingFieldCards">
          ${isAct ? cardsHtml : cardsBackHtml}
      </div>
  </div>`
    appElGame.innerHTML = gameHtml

    const returnButton = document.querySelector('.play__button')
    returnButton.addEventListener('click', () => {
        arr = arr = [
            'AceSpades',
            'KingSpades',
            'QueenSpades',
            'JackSpades',
            '10Spades',
            '9Spades',
            '8Spades',
            '7Spades',
            '6Spades',
            'AceHearts',
            'KingHearts',
            'QueenHearts',
            'JackHearts',
            '10Hearts',
            '9Hearts',
            '8Hearts',
            '7Hearts',
            '6Hearts',
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
        score = 0
        renderLevel(false)
        console.log('Играть заново')
    })

    const playingFieldCard = document.querySelectorAll('.playingFieldCard')
    playingFieldCard.forEach((playingFieldCard) => {
        playingFieldCard.addEventListener('click', () => {
            let card = playingFieldCard.dataset.name
            playingFieldCard.setAttribute('src', `../cards/${card}.jpg`)
            console.log(playingFieldCard.dataset.name)
            a.push(card)
            console.log(a)
            console.log(a.length)

            if (a.length === 2) {
                if (a[0] === a[1]) {
                    score = score + 1
                    a = []
                    alert('Вы победили!')
                    console.log('=', 'Счет :', score, a)
                } else {
                    a = []
                    console.log('!=', 'Счет :', score, a)
                    alert('Вы проиграли!')
                }
            }
        })
    })
}
export function showFirstPage() {
    const loader = document.querySelector('.choose__complexity__window')
    loader.classList.remove('hidden')
}
export function hideFirstPage() {
    const loader = document.querySelector('.choose__complexity__window')
    loader.classList.add('hidden')
}
// Показать и скрытие карточек через 5 сек в начале игры
export function int() {
    setTimeout(() => {
        console.log('set')
    }, 5000)
    renderGame(true)
}

//document.getElementById("timeData").textContent = "11.11";
