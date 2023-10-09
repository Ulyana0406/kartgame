//import { renderFirstPageComponent } from '../components/first-page-of-game'
import { userSettings } from '../main'
import { arr2 } from './renderlevel-of-game'

let step = 0

let score = 0
console.log('Счет :', score)
console.log(arr2)
export function renderGame(isAct: boolean) {
    hideFirstPage()
    playingFieldShow()
    const cardsHtml = arr2
        .map((back) => {
            return `<div id="${back}" class="back"><img class="playingFieldCard" id="${back}" data-name="${back}" src="./cards/back.jpg" alt=""></div>`
        })
        .join('')
    const cardsBackHtml = arr2
        .map((back) => {
            return `<div id="${back}" class="back"><img class="playingFieldCard" id="${back}" data-name="${back}" src="./cards/${back}.jpg" alt=""></div>`
        })
        .join('')
    const appElGame = document.getElementById('appGame') as HTMLElement

    const gameHtml = `
  <div class="playingField center">
      <div class="playingFieldHeader">
          <div class="time">
          <div class="time" id="timer">00:00</div>
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
        showFirstPage()
        score = 0
        console.log('Играть заново')
        hidegameResult()
        playingFieldRemove()
        stopTimer()
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
                            score++
                            step++
                            compareId = []
                            compareNameId = []
                        } else {
                            step++
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

export function playingFieldRemove() {
    const removePlayingField = document.getElementById('appGame') as HTMLElement
    removePlayingField.classList.add('hidden')
}

export function playingFieldShow() {
    const removePlayingField = document.getElementById('appGame') as HTMLElement
    removePlayingField.classList.remove('hidden')
}

export function showWin() {
    const gameResult = document.getElementById('gameResult') as HTMLElement
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
    gameResult.innerHTML = WinHTMl
    const returnButtonAftergame = document.querySelector(
        '#firstpage',
    ) as Element
    //const appElGame = document.getElementById('appGame') as HTMLElement
    returnButtonAftergame.addEventListener('click', () => {
        showFirstPage()
        score = 0
        console.log('Играть заново')
        gameResult.remove()
        playingFieldRemove()
    })
}

export function showLose() {
    const gameResult = document.getElementById('gameResult') as HTMLElement
    const timerElement = document.getElementById('timer') as HTMLElement

    if (gameResult) {
        const WinHTMl = `<div class="winOrLose">
         <div class="winLose">
        <img class="imgHeader" src="./cards/lose.png" alt="win">
        <h1 class="headerLow"> Вы проиграли!</h1>
        <h3 class="heading">Затраченное время:</h3>
        <span class="timer" id="timer">${timerElement.textContent}</span>
        <button id="firstpage" class="play__button returnButton">Играть снова</button>
    </div>
    </div>`
        gameResult.innerHTML = WinHTMl
        const returnButtonAftergame = document.querySelector(
            '#firstpage',
        ) as Element
        //const appElGame = document.getElementById('appGame') as HTMLElement
        returnButtonAftergame.addEventListener('click', () => {
            showFirstPage()
            score = 0
            console.log('Играть заново')
            gameResult.remove()
            playingFieldRemove()
        })
    }
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
let intervalId: NodeJS.Timeout
function startTimer() {
    intervalId = setInterval(() => {
        const timerElement = document.getElementById('timer') as HTMLElement
        seconds++
        if (seconds >= 60) {
            minutes++
            seconds = 0
        }

        // Форматируем время для вывода
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds

        if (timerElement) {
            timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`
        }
    }, 1000)
}
function stopTimer() {
    clearInterval(intervalId)
    seconds = 0
    minutes = 0
}
