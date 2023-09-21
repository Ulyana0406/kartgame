import { renderFirstPageComponent } from '../components/first-page-of-game'
import { userSettings } from '../main'
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
let arr2: (string | number)[][] = []
export function renderLevel(difficulty: string) {
    let numCards = 0
    if (difficulty === 'easy') {
        step = 0
        numCards = 6
        score = 0
        hideFirstPage()
    } else if (difficulty === 'medium') {
        numCards = 12
        score = 0
        step = 0
        hideFirstPage()
    } else if (difficulty === 'hard') {
        numCards = 18
        score = 0
        step = 0
        hideFirstPage()
    }
    console.log('Кол-во карт :', numCards)

    arr.sort(() => Math.random() - 1)
    arr = arr.slice(0, numCards)
    arr.forEach((el) => arr.push(el))
    arr.sort(() => Math.random() - 1)
    arr2 = arr.map((element, index) => {
        return [index, element]
    })
    console.log('массив пар', arr2)
}

let step = 0

let score = 0
console.log('Счет :', score)

export function renderGame(isAct: boolean) {
    hideFirstPage()
    const cardsHtml = arr
        .map((back) => {
            return `<div id="${back}" class="back"><img class="playingFieldCard" id="${back}" data-name="${back}" src="./cards/back.jpg" alt=""></div>`
        })
        .join('')
    const cardsBackHtml = arr
        .map((back) => {
            return `<div id="${back}" class="back"><img class="playingFieldCard" id="${back}" data-name="${back}" src="./cards/${back}.jpg" alt=""></div>`
        })
        .join('')
    const appElGame = document.getElementById('appGame') as HTMLElement

    const gameHtml = `
  <div class="playingField center">
      <div class="playingFieldHeader">
          <div class="time">
          <span class="time" id="timer">00:00</span>
          </div>
          <div>
              <button id="restart" class="play__button returnButton">Начать заново</button>
          </div>
      </div>
      <div class="playingFieldCards">
          ${isAct ? cardsHtml : cardsBackHtml}
      </div>
  </div>
  `
    appElGame.innerHTML = gameHtml

    const returnButton = document.querySelector('#restart') as Element

    returnButton.addEventListener('click', () => {
        renderFirstPageComponent(appElGame)
        score = 0
        console.log('Играть заново')
        hidegameResult()
    })

    const playingFieldCards = document.querySelectorAll('.playingFieldCard')
    let compareNameId: string[] = []
    let compareId: string[] = []
    playingFieldCards.forEach((playingFieldCard) => {
        playingFieldCard.addEventListener('click', (event) => {
            if (event.target instanceof HTMLElement) {
                const nameId = event.target.dataset.name || ''
                const id = event.target.id

                playingFieldCard.setAttribute('src', `/cards/${nameId}.jpg`)

                compareId.push(id)
                compareNameId.push(nameId)

                if (compareId.length === 2 && compareNameId.length === 2) {
                    if (compareId[0] !== compareId[1]) {
                        if (compareNameId[0] === compareNameId[1]) {
                            score = score + 1
                            step = ++step
                            compareId = []
                            compareNameId = []
                        } else {
                            step = ++step
                            setTimeout(() => {
                                playingFieldCards.forEach(
                                    (playingFieldCard) => {
                                        playingFieldCard.setAttribute(
                                            'src',
                                            '/cards/back.jpg',
                                        )
                                    },
                                )
                                console.log('Очистка')
                            }, 500)
                            compareId = []
                            compareNameId = []
                        }
                    } else if (compareId[0] === compareId[1]) {
                        compareNameId.shift()
                        compareId.shift()
                    }

                    console.log('Счет :', score, 'Ход :', step)
                    if (userSettings.difficulty === 'easy') {
                        if (step === 5 || score === 3) {
                            if (score === 3) {
                                showWin()
                                stopTimer()
                            } else if (score <= 3) {
                                stopTimer()
                                showLose()
                            }
                        }
                    } else if (userSettings.difficulty === 'medium') {
                        if (step === 8 || score === 6) {
                            if (score === 6) {
                                showWin()
                                stopTimer()
                            } else {
                                showLose()
                                stopTimer()
                            }
                        }
                    } else if (userSettings.difficulty === 'hard') {
                        if (step === 9 || score === 9) {
                            if (score === 9) {
                                showWin()
                                stopTimer()
                            } else {
                                showLose()
                                stopTimer()
                            }
                        }
                    }
                }
            }
        })
    })
}

export function showFirstPage() {
    const loader = document.querySelector(
        '.choose__complexity__window',
    ) as Element
    loader.classList.remove('hidden')
}
export function hideFirstPage() {
    const loader = document.querySelector(
        '.choose__complexity__window',
    ) as Element
    loader.classList.add('hidden')
}

export function showWin() {
    const timerElement = document.getElementById('timer') as HTMLElement
    const WinHTMl = ` <div class="WinLoseWindow"></div>
    <div class="winOrLose">
     <div class="winLose">
    <img class="imgHeader" src="./cards/win.png" alt="win">
    <h1 class="headerLow"> Вы выиграли!</h1>
    <h3 class="heading">Затраченное время:</h3>
    <span class="timer" id="timer">${timerElement.textContent}</span>
    <button id="firstpage" class="play__button returnButton">Играть снова</button> 
</div>
</div>`
    const gameResult = document.getElementById('gameResult') as HTMLElement
    gameResult.innerHTML = WinHTMl
    const returnButtonAftergame = document.querySelector(
        '#firstpage',
    ) as Element
    const appElGame = document.getElementById('appGame') as HTMLElement
    returnButtonAftergame.addEventListener('click', () => {
        renderFirstPageComponent(appElGame)
        score = 0
        console.log('Играть заново')
        hidegameResult()
    })
}

export function showLose() {
    const timerElement = document.getElementById('timer') as HTMLElement
    const WinHTMl = `<div class="winOrLose">
     <div class="winLose">
    <img class="imgHeader" src="./cards/lose.png" alt="win">
    <h1 class="headerLow"> Вы проиграли!</h1>
    <h3 class="heading">Затраченное время:</h3>
    <span class="timer" id="timer">${timerElement.textContent}</span>
    <button id="firstpage" class="play__button returnButton">Играть снова</button>
</div>
</div>`
    const gameResult = document.getElementById('gameResult') as HTMLElement
    gameResult.innerHTML = WinHTMl
    const returnButtonAftergame = document.querySelector(
        '#firstpage',
    ) as Element
    const appElGame = document.getElementById('appGame') as HTMLElement
    returnButtonAftergame.addEventListener('click', () => {
        renderFirstPageComponent(appElGame)
        score = 0
        console.log('Играть заново')
        hidegameResult()
    })
}

export function hidegameResult() {
    const hidegameResult = document.getElementById('gameResult') as HTMLElement
    hidegameResult.classList.add('hidden')
}
// Показать и скрытие карточек через 5 сек в начале игры
export function int() {
    renderGame(false)
    setTimeout(() => {
        renderGame(true)
        startTimer()
    }, 5000)
}
let minutes = 0
let seconds = 0
const interval = 0
function startTimer() {
    const number: NodeJS.Timeout = setInterval(() => {
        const timerElement = document.getElementById('timer') as HTMLElement
        seconds++
        if (seconds >= 60) {
            minutes++
            seconds = 0
        }

        // Форматируем время для вывода
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds

        // Выводим время в элемент разметки
        timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`
    }, 1000)
    console.log(number)
}
function stopTimer() {
    clearInterval(interval)
    seconds = 0
    minutes = 0
}
//document.getElementById("timeData").textContent = "11.11";
