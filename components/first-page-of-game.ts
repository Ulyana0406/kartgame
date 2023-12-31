import { goToPage, page, setPage } from '../main'
import { EASY_PAGE, HARD_PAGE, MEDIUM_PAGE } from '../modules/routes'
import { int } from '../components/game-page'
import { hideFirstPage } from '../components/game-page'

export function renderFirstPageComponent(appEl: HTMLElement) {
    const firstPageHtml = `
    <div id="choose__complexity__window" class="choose__complexity__window">
    <div class="choose__complexity prompt__center">
    <h1 class="popup__windox__text">Выбери <br> сложность</h1>
    <section class="radio-toolbar">
        <input type="radio" class="radio" id="easyBtn" name="radios" value="Легкий">
    <label for="easyBtn">1</label>
    
    <input type="radio" id="mediumBtn" name="radios" value="Средний">
    <label for="mediumBtn">2</label>
    
    <input type="radio" id="hardBtn" name="radios" value="Сложный">
    <label for="hardBtn">3</label>
    </section>
  <button class="play__button" id="startBtn">
    Старт
 </button>
</div> 
</div> 
    `
    appEl.innerHTML = firstPageHtml

    const easyBtn = document.getElementById('easyBtn') as HTMLElement
    const mediumBtn = document.getElementById('mediumBtn') as HTMLElement
    const hardBtn = document.getElementById('hardBtn') as HTMLElement
    const startBtn = document.getElementById('startBtn') as HTMLElement
    const btnCollection = [easyBtn, mediumBtn, hardBtn]

    btnCollection.forEach((el) => {
        el.addEventListener('click', () => {
            btnCollection.forEach((el) => {
                el.removeAttribute('checked')
            })
            el.setAttribute('checked', '')
        })
    })

    startBtn.addEventListener('click', () => {
        if (easyBtn.hasAttribute('checked')) {
            setPage(EASY_PAGE)
            goToPage(page)
            int()
            hideFirstPage()
        }
        if (mediumBtn.hasAttribute('checked')) {
            setPage(MEDIUM_PAGE)
            goToPage(page)
            int()
            hideFirstPage()
        }
        if (hardBtn.hasAttribute('checked')) {
            setPage(HARD_PAGE)
            goToPage(page)
            int()
            hideFirstPage()
        }
    })
}
