import {renderElement, clearScreen} from './util';
import welcomeScreen from './welcome-screen';

const failTries = function () {
  clearScreen();
  renderElement(`<section class="result">
<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
<h2 class="result__title">Какая жалость!</h2>
<p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
<button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`);

const returnBtn = document.querySelector('.result__replay');

returnBtn.addEventListener('click', welcomeScreen)
};

export default failTries;