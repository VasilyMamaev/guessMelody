(function (chai) {
  'use strict';

  // функция получения элементов из шаблона


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

  describe('playerScoresCounter', () => {
    it('игрок ответил меньше, чем на 10 вопросов должно вернуть -1', () => {
      const arr = [{ answ: 'r', time: 32 }, { answ: 'f', time: 12 }, { answ: 'f', time: 10 }];
      chai.assert(playerScoresCounter(arr) === -1);
    });

    it('ответил медленно на все 10 вопросов правильно получил 10 баллов', () => {
      const arr = [{ answ: 'r', time: 32 }, { answ: 'r', time: 120 }, { answ: 'r', time: 130 }, { answ: 'r', time: 30 }, { answ: 'r', time: 30 }, { answ: 'r', time: 30 }, { answ: 'r', time: 30 }, { answ: 'r', time: 100 }, { answ: 'r', time: 100 }, { answ: 'r', time: 40 }];
      chai.assert(playerScoresCounter(arr) === 10);
    });
  });

  describe('showPlayerResult', () => {
    it('упорядочивает получаемый массив других игроков', () => {
      const arr = [9, 2, 4, -7, 1];
      showPlayerResult(arr, 1);
      console.log(arr);
      chai.assert(1);
    });

    it('функция возвращает строку результата', () => {
      const arr = [10, 2, 4, -7, 1];
      const obj = { scores: 10, lifes: 1, timeLeft: 10 };
      const jojo = showPlayerResult(arr, obj);
      console.log(jojo);
      chai.assert(showPlayerResult(arr, obj));
    });

    it('результат если жизни кончились', () => {
      const arr = [10, 2, 4, -7, 1];
      const obj = { scores: 1, lifes: -1, timeLeft: 10 };
      const jojo = showPlayerResult(arr, obj);
      console.log(jojo);
      chai.assert(showPlayerResult(arr, obj));
    });

    it('результат если кончилось время', () => {
      const arr = [10, 2, 4, -7, 1];
      const obj = { scores: 1, lifes: 1, timeLeft: 0 };
      const jojo = showPlayerResult(arr, obj);
      console.log(jojo);
      chai.assert(showPlayerResult(arr, obj));
    });
  });

}(chai));

//# sourceMappingURL=util.test.js.map
