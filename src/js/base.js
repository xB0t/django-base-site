import jQuery from 'jquery';

const $ = jQuery,
  myArr = [1, 2, 3].map((n) => n + 1);

window.$ = jQuery;
window.jQuery = jQuery;

if (myArr.toString() !== '2,3,4') {
  console.error("Array didn't transpile.");
}

if ($ === undefined) {
  console.error("jQuery wasn't imported correctly.");
}
