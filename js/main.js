/* eslint-disable import/prefer-default-export */
import welcomeScreen from './welcome-screen';
import gameGenre from './game-genre';
import gameArtist from './game-artist';
import resultSuccess from './result-success';
import { renderElement } from './util';


//
const answerChecker = () => {
  const rightAnswers = document.querySelectorAll('.game__input:checked');
  const answeBtn = document.querySelector('.game__submit');
  if (rightAnswers.length > 0) {
    answeBtn.disabled = false;
  } else {
    answeBtn.disabled = true;
  }
};

//  логика экрана welcomeScreen
const welcomeScreenHandler = () => {
  const welcomeBtn = document.querySelector('.welcome__button');

  welcomeBtn.addEventListener('click', () => {
    renderElement(gameGenre);
    gameGenreHandler();
  });
};


//  логика экрана gameGenre
const gameGenreHandler = () => {
  const form = document.querySelector('.game__tracks');
  const answerBtn = document.querySelector('.game__submit');
  const returnBtn = document.querySelector('.game__logo');

  answerBtn.disabled = true;

  form.addEventListener('change', () => {
    answerChecker();
  });

  answerBtn.addEventListener('click', () => {
    renderElement(gameArtist);
    gameArtistHandler();
  });
  returnBtn.addEventListener('click', () => {
    renderElement(welcomeScreen);
    welcomeScreenHandler();
  });
};


// логика экрана gameArtist
const gameArtistHandler = () => {
  const answerBtns = document.querySelectorAll('.artist');
  const returnBtn = document.querySelector('.game__logo');

  answerBtns.forEach((element) => {
    element.addEventListener('click', () => {
      renderElement(resultSuccess);
      resultSuccessHandler();
    });
  });
  returnBtn.addEventListener('click', () => {
    renderElement(welcomeScreen);
    welcomeScreenHandler();
  });
};


// логика экрана resultSuccess
const resultSuccessHandler = () => {
  const returnBtn = document.querySelector('.result__replay');

  returnBtn.addEventListener('click', () => {
    renderElement(welcomeScreen);
    welcomeScreenHandler();
  });
};


// вызов начального экрана
renderElement(welcomeScreen);
welcomeScreenHandler();
