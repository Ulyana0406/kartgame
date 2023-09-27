import './style.scss'
import { renderLevel } from './components/game-page'
import { EASY_PAGE, FIRST_PAGE, HARD_PAGE, MEDIUM_PAGE } from './modules/routes'
import { renderFirstPageComponent } from './components/first-page-of-game'
import { hideFirstPage } from './components/game-page'
export let page = FIRST_PAGE

export const userSettings = {
    time: 0,
    gameStatus: 'in game',
    difficulty: 'easy',
}

export const setPage = (newPage: string) => {
    page = newPage
}

export const goToPage = (page: string) => {
    if ([EASY_PAGE, FIRST_PAGE, HARD_PAGE, MEDIUM_PAGE].includes(page)) {
        if (page === FIRST_PAGE) {
            userSettings.gameStatus = 'choose difficulty level'
            renderApp()
        }
        if (page === EASY_PAGE) {
            userSettings.difficulty = 'easy'
            userSettings.gameStatus = 'in game'
            console.log(userSettings)
            renderApp()
            hideFirstPage()
        }
        if (page === MEDIUM_PAGE) {
            userSettings.difficulty = 'medium'
            userSettings.gameStatus = 'in game'
            console.log(userSettings)
            renderApp()
            hideFirstPage()
        }
        if (page === HARD_PAGE) {
            userSettings.difficulty = 'hard'
            userSettings.gameStatus = 'in game'
            console.log(userSettings)
            renderApp()
            hideFirstPage()
        }
    }
}
const appEl = document.getElementById('app') as HTMLElement

export const renderApp = () => {
    if (page === EASY_PAGE) {
        return renderLevel('easy')
    }
    if (page === MEDIUM_PAGE) {
        return renderLevel('medium')
    }
    if (page === HARD_PAGE) {
        return renderLevel('hard')
    }
    if (page === FIRST_PAGE) {
        return renderFirstPageComponent(appEl)
    }
}
goToPage(page)
