
function getElementFromTemplate (html) {
  let fragment = document.createDocumentFragment()
  fragment.innerHTML = html;
  return fragment
};