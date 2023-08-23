export function renderGamePage(difficulty, appEl) {
    let gameHtml = '';
    
    if (difficulty === "easy") {
      gameHtml = `
        <div class="page__title">ТУТ БУДЕТ ЛЕГКАЯ СЛОЖНОСТЬ</div>
      `;
    } else if (difficulty === "medium") {
      gameHtml = `
        <div class="page__title">ТУТ БУДЕТ СРЕДНЯЯ СЛОЖНОСТЬ</div>
      `;
    } else if (difficulty === "hard") {
      gameHtml = `
        <div class="page__title">ТУТ БУДЕТ БОЛЬШАЯ СЛОЖНОСТЬ</div>
      `;
    }
    
    appEl.innerHTML = gameHtml;
  };