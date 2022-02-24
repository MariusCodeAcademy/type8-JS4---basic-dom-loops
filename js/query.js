const headerEl = document.getElementById('header');

const headerEl2 = document.querySelector('#header');
headerEl.innerHTML += '<h1> main title </h1>';

const h2FirstEl = document.querySelector('header h2:first-child');
h2FirstEl.innerHTML = 'Pavyko';

// pakeisti article viduje esancio el title
const articleTitleEl = document.querySelector('article .title');
articleTitleEl.innerHTML = 'main title';

// idekim mygtuka i <li>item 3</li>
const thirdLiEl = document.querySelector('ul li:nth-of-type(3)');
thirdLiEl.innerHTML = `<button onclick="console.log('you are well')">Click me for alert</button>`;
