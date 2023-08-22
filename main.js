import {easyGameGeneration} from "./components/easy-game.js"
import {hardGameGeneration} from "./components/hard-game.js"
import {mediumGameGeneration} from "./components/medium-game.js"
import {
    EASY_PAGE,
    FIRST_PAGE,
    HARD_PAGE,
    MEDIUM_PAGE,
  } from "./modules/routes.js";
import { renderFirstPageComponent } from "./components/first-page-of-game.js";
  export let page = FIRST_PAGE;

  export let userSettings= {
    time:0,
    gameStatus: null,
    difficalty:null,
  };

  export const setPage = (newPage) => {
    page = newPage;
  };

  export const goToPage= (page)=>{
    if (
        [EASY_PAGE, FIRST_PAGE, HARD_PAGE, MEDIUM_PAGE, LOADING_PAGE].includes(page)
      ){
        if (page===FIRST_PAGE){
            userSettings.gameStatus = "choose difficulty level";
            renderApp();
        };
        if(page===EASY_PAGE){
            userSettings.difficalty="easy";
            userSettings.gameStatus = "in game";
            console.log(userSettings);
            renderApp();
        };
        if(page===MEDIUM_PAGE){
            userSettings.difficalty="medium";
            userSettings.gameStatus = "in game";
            console.log(userSettings);
            renderApp();
        };
        if(page===HARD_PAGE){
            userSettings.difficalty="hard";
            userSettings.gameStatus = "in game";
            console.log(userSettings);
            renderApp();
        };
      };
  };

  export const renderApp= ()=>{
const appEl=document.getElementById ("app");
if(page===EASY_PAGE){
    return easyGameGeneration (appEl);
};
if(pege===MEDIUM_PAGE){
   return mediumGameGeneration(appEl);
};
if(page===HARD_PAGE){
    return hardGameGeneration(appEl);
};
if (page === FIRST_PAGE) {
return renderFirstPageComponent(appEl);
  };
  };
  goToPage(page);