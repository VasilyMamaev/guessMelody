import welcomeScreen from './welcome-screen';
// import gameGenre from './game-genre';
// import gameArtist from './game-artist';
// import resultSuccess from './result-success';
// import failTime from './fail-time';
// import failTries from './fail-tries';
// import {clearScreen} from './util'

welcomeScreen();


// const screensTemplates = document.querySelectorAll('template');
// const screenContainer = document.querySelector('.main');
// let fragment = document.createDocumentFragment();

// // функция показа экранов приложения
// const showScreens = function(num) {
//   screenContainer.innerHTML= '';
//   let element =screensTemplates[num].content.querySelector('section').cloneNode(true);
//   fragment.append(element);
//   screenContainer.append(fragment)
// };

// let screenNumber = 0;
// showScreens(screenNumber);

// //переключение экранов клавишами стрелок
// document.addEventListener('keyup', function(evt) {
//   if (evt.keyCode === 37) {
//     if (screenNumber > 0) {
//       screenNumber = screenNumber - 1;
//       showScreens(screenNumber)
//     }
//   } else {
//     if (screenNumber < (screensTemplates.length - 1)) {
//       screenNumber = screenNumber + 1;
//       showScreens(screenNumber)
//     }
//   }
// });

// //вставка в разметку "стрелок"
// const mainApp = document.querySelector('.app');
// const arrows = document.createElement('DIV');
// arrows.classList.add('arrows__wrap');
// arrows.innerHTML = `<button class="arrows__btn"><-</button>
// <button class="arrows__btn">-></button>`;

// mainApp.append(arrows);

// //обработчик для стрелок
// const leftArrow = document.querySelector('body > main > div > button:nth-child(1)');
// const rightArrow = document.querySelector('body > main > div > button:nth-child(2)');

// leftArrow.addEventListener('click', function() {
//   if (screenNumber > 0) {
//     screenNumber = screenNumber - 1;
//     showScreens(screenNumber)
//   }
// });

// rightArrow.addEventListener('click', function() {
//   if (screenNumber < (screensTemplates.length - 1)) {
//     screenNumber = screenNumber + 1;
//     showScreens(screenNumber)
//   }
// });
