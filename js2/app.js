var selectedMenu = 'Home';
var $selected = document.querySelector('.selected');
var $menus = document.querySelectorAll('.menu');
var activeClass = 'is-active';

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className);
  return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className) {
  if (el.classList)
    return el.classList.add(className);
  else if (!hasClass(el, className))
    el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
}

function toggleActive(els, elSelected) {
  els.forEach(function(el) {
    if (el.dataset.value === elSelected.dataset.value) {
      addClass(el, activeClass);
      $selected.innerHTML = elSelected.dataset.value;
    } else {
      removeClass(el, activeClass);
    }
  })
}

$menus.forEach(function($menu) {
  $menu.addEventListener('click', toggleActive.bind(this, $menus, $menu));
});

function changeBgBody(color){
    document.body.style.background = color;
}