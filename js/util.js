
const renderElement = (html) => {
  const fragment = document.createElement('div');
  fragment.innerHTML = html;
  document.querySelector('.main').append(fragment);
};

const clearScreen = () => {
  const screen = document.querySelector('.main');
  screen.innerHTML = '';
};

export { renderElement, clearScreen };
