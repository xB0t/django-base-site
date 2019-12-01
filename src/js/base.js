import jQuery from 'jquery';
window.$ = window.jQuery = jQuery; // workaround for https://github.com/parcel-bundler/parcel/issues/333
import 'bootstrap/dist/js/bootstrap.bundle';
const myArr = [1, 2, 3].map((n) => n + 1);
if (myArr.toString() !== '2,3,4') {
  console.error("Array didn't transpile.");
}
if ($().modal === undefined) {
  debugger;
  console.error("Bootstrap wasn't imported correctly.");
}
