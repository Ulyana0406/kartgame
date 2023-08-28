import { goToPage, page, setPage } from '../main.js'
import { EASY_PAGE, HARD_PAGE, MEDIUM_PAGE } from '../modules/routes.js'

export function renderFirstPageComponent(appEl) {
    let firstPageHtml = `
    <div class="choose__complexity__window">
    <div class="choose__complexity prompt__center">
    <h1 class="popup__windox__text">Выбери <br> сложность</h1>
    <section class="radio-toolbar">
        <input type="radio" id="easyBtn" name="radios" value="Легкий">
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

    const easyBtn = document.getElementById('easyBtn')
    const mediumBtn = document.getElementById('mediumBtn')
    const hardBtn = document.getElementById('hardBtn')
    const startBtn = document.getElementById('startBtn')
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
        }
        if (mediumBtn.hasAttribute('checked')) {
            setPage(MEDIUM_PAGE)
            goToPage(page)
        }
        if (hardBtn.hasAttribute('checked')) {
            setPage(HARD_PAGE)
            goToPage(page)
        }
    })
}
