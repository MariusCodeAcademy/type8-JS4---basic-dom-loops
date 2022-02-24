/*  
<ul id="my-list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
nusitaikom i my-list ul el ir jo viduje sugeneruojam 5 li el su tekstu
Item 1
item 2
...
    */
const kiekEl = 100;
const ulEl = document.getElementById('my-list');
// debugger;
// ulEl.innerHTML += '<li>Item 1</li>';
// ulEl.innerHTML += '<li>Item 2</li>';
// ulEl.innerHTML += '<li>Item 3</li>';
let liElementuSakinys = '';
for (let i = 1; i < kiekEl; i++) {
  liElementuSakinys += `<li>Item ${i}</li>`;
}
console.log('liElementuSakinys ===', liElementuSakinys);
ulEl.innerHTML = liElementuSakinys;

/*
el  <div id="visas"></div> 
sudeti skaicius nuo 1 iki 10. kiekvieno sudejimo zingsnio rezultata sugeneruoti
rikiuoto saraso pavidalu

*/
