var util = (function (exports) {
  'use strict';

  const renderElement = (html) => {
    let fragment = document.createElement('div');
    fragment.innerHTML = html;
    document.querySelector('.main').append(fragment);
  };

  const clearScreen = () => {
    let screen = document.querySelector('.main');
    screen.innerHTML = '';
  };

  exports.clearScreen = clearScreen;
  exports.renderElement = renderElement;

  return exports;

}({}));

//# sourceMappingURL=util.js.map
