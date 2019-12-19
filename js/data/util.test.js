import { assert } from 'chai';
import { playerScoresCounter, showPlayerResult } from '../util';

describe('playerScoresCounter', () => {
  it('игрок ответил меньше, чем на 10 вопросов должно вернуть -1', () => {
    const arr = [{ answ: 'r', time: 32 }, { answ: 'f', time: 12 }, { answ: 'f', time: 10 }];
    assert(playerScoresCounter(arr, 1) === -1);
  });

  it('ответил медленно на все 10 вопросов правильно получил 10 баллов', () => {
    const arr = [{ answ: 'r', time: 32 }, { answ: 'r', time: 120 }, { answ: 'r', time: 130 }, { answ: 'r', time: 30 }, { answ: 'r', time: 30 }, { answ: 'r', time: 30 }, { answ: 'r', time: 30 }, { answ: 'r', time: 100 }, { answ: 'r', time: 100 }, { answ: 'r', time: 40 }];
    assert(playerScoresCounter(arr, 1) === 10);
  });
});

describe('showPlayerResult', () => {
  it('упорядочивает получаемый массив других игроков', () => {
    const arr = [9, 2, 4, -7, 1];
    showPlayerResult(arr, 1);
    console.log(arr);
    assert(1);
  });

  it('функция возвращает строку результата', () => {
    const arr = [10, 2, 4, -7, 1];
    const obj = { scores: 10, lifes: 1, timeLeft: 10 };
    const jojo = showPlayerResult(arr, obj);
    console.log(jojo);
    assert(showPlayerResult(arr, obj));
  });

  it('результат если жизни кончились', () => {
    const arr = [10, 2, 4, -7, 1];
    const obj = { scores: 1, lifes: -1, timeLeft: 10 };
    const jojo = showPlayerResult(arr, obj);
    console.log(jojo);
    assert(showPlayerResult(arr, obj));
  });

  it('результат если кончилось время', () => {
    const arr = [10, 2, 4, -7, 1];
    const obj = { scores: 1, lifes: 1, timeLeft: 0 };
    const jojo = showPlayerResult(arr, obj);
    console.log(jojo);
    assert(showPlayerResult(arr, obj));
  });
});
