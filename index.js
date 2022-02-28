// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Aprire la console per i risultati</h1>`;

var arw = (x) => 4 * x +3;
function zeroN(r){
  return r(10);
}
console.log(zeroN(arw));
