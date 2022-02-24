console.log(document);

// nusitaikyk i subtitle
// document.getElementById('title').innerHTML = 'Pakeiciau is JS';
const daugybaEl = document.getElementById('daugyba');
const titleEl = document.getElementById('title');

// titleEl.innerHTML = 'Pakeiciau is JS';
// titleEl.innerHTML = '<button>click me</button>';

// for cikas nuo 5 - 12 ir sudauginam
let result = 1;
for (let i = 5; i <= 12; i++) {
  result = result * i;
}

daugybaEl.innerHTML = result;

// pakeisti elementa kurio id == text ir irasyti ten savo sakini
const textEl = document.getElementById('text');
textEl.innerHTML =
  'pakeisti elementa kurio id == text ir irasyti ten savo sakini';

// prideti prie esamos titleEl reiksmes " prideta bet ne perrasyta"
console.log(titleEl.innerHTML + ' prideta bet ne perrasyta');
// titleEl.innerHTML = titleEl.innerHTML + ' prideta bet ne perrasyta';
titleEl.innerHTML += ' prideta bet ne perrasyta';
