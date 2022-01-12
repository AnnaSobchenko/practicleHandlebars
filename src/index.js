import dishes from './menu.json';
import menuItem from './templates/menu-item.hbs';

// console.log(dishes);
// console.log(menuItem);

// const markup = dishes.map(menuItem).join('');
const markup = menuItem(dishes);

console.log(markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const checkbox = document.querySelector('.theme-switch__toggle');

const list = document.querySelector('.js-menu');
list.insertAdjacentHTML('beforeend', markup);
const dataFromLS = localStorage.getItem('theme');
if (!dataFromLS) {
  document.body.classList.add('light-theme');
} else {
  document.body.classList.add(dataFromLS);
  if (dataFromLS === 'dark-theme') {
    checkbox.checked = true;
  }
}

checkbox.addEventListener('change', onChange);

function onChange(e) {
  if (checkbox.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
