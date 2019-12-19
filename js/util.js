// функция получения элементов из шаблона
const createElementFromTemplate = (template) => {
  const fragment = document.createElement('div');
  fragment.innerHTML = template;
  return fragment;
}
// функция отрисовки шаблона на странице
const renderElement = (element) => {
  const wraper = document.querySelector('.main');
  wraper.innerHTML = '';
  wraper.append(element);
};


// Функция подсчёта набранных баллов игрока
// на вход принимает массив ответов пользователя answersArr и кол-во оставшихся нот remainingLifes
// Функция на выходе отдаёт кол-во набранных очков
const playerScoresCounter = (answersArr, remainingLifes) => {
  let playerScores = 0;
  for (let i = 0; i < answersArr.length; i += 1) {
    if (answersArr[i].answ === 'r') {
      playerScores += 1;
      if (answersArr[i].time < 30) {
        playerScores += 1;
      }
    } else { playerScores -= 2; }
  }
  if (answersArr.length < 10) {
    playerScores = -1;
  }
  return playerScores;
};


// Функция вывода результата игрока
// на вход принимает массив результатов игр других игроков otherPlayersArr и
// объект результата с кол-ом набранных баллов playerStatusObj.scores,
// кол-вом оставшихся жизней playerStatusObj.lifes
// и кол-вом оставшегося времени playerStatusObj.timeLeft
const showPlayerResult = (otherPlayersArr, playerStatusObj) => {
  let result = '';
  // сценарий проигрыша когда закончились жизни
  if (playerStatusObj.lifes < 0) {
    result = 'У вас закончились все попытки. Ничего, повезёт в следующий раз!';
  } else if
  // сценарий проигрыша когда закончилось время
  (playerStatusObj.timeLeft <= 0) {
    result = 'Время вышло! Вы не успели отгадать все мелодии';
  } else {
  // сценарий выигрыша
  /* узнаем место игрока в таблице результатов */
    otherPlayersArr.sort((a, b) => b - a);

    let playerPosition = (otherPlayersArr.findIndex((item) => playerStatusObj.scores >= item)) + 1;
    if (playerPosition === 0) {
      playerPosition = otherPlayersArr.length + 1;
    }
    /* вычисление процента успеха игрока */
    const playerSuccessPercent = ((otherPlayersArr.length - playerPosition) / otherPlayersArr.length) * 100;

    result = `Вы заняли ${playerPosition} место из ${otherPlayersArr.length} игроков.
    Это лучше, чем у ${playerSuccessPercent}% игроков,`;
  }

  return result;
};

export { createElementFromTemplate, renderElement, playerScoresCounter, showPlayerResult };
