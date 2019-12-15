
const renderElement = (html) => {
  let fragment = document.createElement('div')
  fragment.innerHTML = html;
  document.querySelector('.main').append(fragment)
};

const clearScreen = () => {
  let screen = document.querySelector('.main');
  screen.innerHTML = '';
}

export {renderElement, clearScreen};